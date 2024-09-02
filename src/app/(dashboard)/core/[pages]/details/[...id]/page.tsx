'use client';

import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useParams, useRouter } from "next/navigation";

import { pagesConfig } from "../../_pagesConfig";
import ItemDetailsBody from "@/components/compactlist/itemdetails";
import CompactListData from "@/foundry/compactListData";
import CompactListHeader from "@/foundry/ItemDetails/cl-header";
import { ModalContext } from "@/states/context/ModalContext";
import { openModalWithData } from "@/states/reducer/modalSlice";
import useSingleState from "@/hooks/useSingleState";

export default function CompactList({
    params,
    searchParams,
}: Readonly<{
    params: { pages: string };
    searchParams: { [key: string]: string | string[] | undefined };
}>) {

    const pageConfig = pagesConfig[params.pages];
    if (!pageConfig) return <p>Page {params.pages} not found</p>;

    const { fetchQuery, columns, tableOptions, compactListLayout } = pageConfig;

    const page = useSingleState(1);
    const pageSize = useSingleState(10);

    const { data: tableData } = fetchQuery({
        page: page.value,
        pageSize: pageSize.value,
    });

    const [activeButton, setActiveButton] = useState<string | undefined>(tableOptions?.actionButtons?.[0]?.api_name);
    const { setPageLabel } = useContext(ModalContext);
    const dispatch = useDispatch();
    const { route } = useParams<{ route: string }>();

    const handleOpenModal = () => {
        setPageLabel?.(route);
        dispatch(openModalWithData({ data: tableData }));
    };

    return (
        <ItemDetailsBody>
            <CompactListHeader
                data-slot="compactListHeader"
                dropdownOptions={tableOptions}
                justifyContent={compactListLayout?.headerContent_Position}
                contentToDisplay={activeButton}
                handleOpenModal={handleOpenModal}
            />
            <div data-slot="compactListBody" className="w-full border-b border-gray-200">
                {tableOptions.actionButtons?.length > 1 && (
                    <div className="mt-12 w-full flex">
                        {tableOptions.actionButtons.map((button, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveButton(button.api_name)}
                                className={activeButton === button.api_name
                                    ? 'border-b-3 text-cyan-550 px-10'
                                    : 'border-cyan-550 px-10 text-black hover:text-cyan-550 hover:border-b-3'
                                }
                            >
                                {button.name}
                            </button>
                        ))}
                    </div>
                )}
                <div className="h-full w-full">
                    <CompactListData data={tableData} />
                </div>
            </div>
        </ItemDetailsBody>
    );
}
