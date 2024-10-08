import {fieldsToDisplayType, ResponseDataType} from "@/utils/types/page-type/table.type";
import {useParams, useRouter} from "next/navigation";
import {cn} from "@/utils/functions/classNames";

export default function CompactList({
    tableData,
    layoutParameters
}: Readonly<{ tableData?: ResponseDataType, layoutParameters?: fieldsToDisplayType }>) {

    const navigate = useRouter()
    const handleClick = (location: number) => {
        navigate.push(`${location}`)
    }

    const currentID = parseInt(useParams().id as string, 10)

    return (
        <div>
            <ul className="hidScrollbar flex-1 overflow-auto"
                style={{ maxHeight: 'calc(100vh - 220px)' }}>
                {tableData?.data?.map((item) => (
                    <button
                        onClick={() => handleClick(item.id)}
                        key={item.id}
                        className={cn(
                            'flex w-full border-b p-2 hover:!bg-gray-100 border-b border-gray-200',
                            currentID === item.id && 'bg-gray-100'
                        )}
                    >
                        <div className=" pointer-events-none py-1 px-2">
                            <input
                                className=" pointer-events-auto cursor-pointer "
                                type="checkbox"
                                name=""
                                id=""
                            />
                        </div>
                        <div
                            key={item.id}
                            className="space-x-auto flex w-full cursor-pointer justify-between font-medium"
                        >
                            <div className="justify-start text-left">
                                {
                                    layoutParameters?.leftGroup?.map((fields) => {
                                        return (
                                            fields.fieldsName.length === 1 ?
                                            <div key={fields.fieldsName[0]} className={fields.class[0]}>
                                                { item[fields.fieldsName[0]] }
                                            </div>
                                                :
                                            <div key={`${fields.fieldsName[0]}_${fields.fieldsName[1]}`}>
                                                <span className={fields.class[0]}>
                                                    { item[fields.fieldsName[0]] }
                                                    <span className="text-black">|</span>
                                                </span>
                                                <span className={fields.class[1]}>
                                                    { item[fields.fieldsName[1]] }
                                                </span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="justify-end text-right">
                                {
                                    layoutParameters?.rightGroup?.map((fields) => {
                                        return (
                                            fields.fieldsName.length === 1 ?
                                                <div key={fields.fieldsName[0]} className={fields.class[0]}>
                                                    { item[fields.fieldsName[0]] }
                                                </div>
                                                :
                                                <div key={`${fields.fieldsName[0]}_${fields.fieldsName[1]}`}>
                                                    <span className={fields.class[0]}>
                                                        { item[fields.fieldsName[0]] }
                                                        <span className="text-black">|</span>
                                                    </span>
                                                    <span className={fields.class[1]}>
                                                        { item[fields.fieldsName[1]] }
                                                    </span>
                                                </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </button>
                ))}
            </ul>
        </div>
    )
}