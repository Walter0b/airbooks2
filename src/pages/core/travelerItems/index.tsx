import Pageheader from '@components/header/pageheader'
import Pages from '@components/pages'
import { TableBody } from '@components/table/body'
import Checkboxes from '@components/table/checkbox'
import { TableHeader } from '@components/table/header'
import { Table } from '@components/table/table'
import { tableOptions } from '@static/travelers/table/dropdown'
import { stylize } from '@utils/functions/stylize'
import {
    travelerItemsColumns,
    travelerItemsData,
} from '@utils/mock/data/travelers/table'

export default function TravelItems() {
    return (
        <Pages>
            <Pageheader data-slot="header" dropdownOptions={tableOptions} />
            <Table
                data-slot="body"
                data={travelerItemsData}
                columns={travelerItemsColumns}
                hasCheckbox={true}
            >
                <TableHeader data-slot="TableHeader" />
                <TableBody data-slot="TableBody" >
                {
                    travelerItemsData?.map((item: Record<string, any>, index: number) => (
                        <tr
                            key={index}
                            className={`hover:bg-Neutral-50 border-b odd:bg-white even:bg-slate-50 capitalize`}
                        >
                            {
                                <Checkboxes
                                    checkboxState={false}
                                    onChange={() => index}
                                />
                            }
                            {travelerItemsColumns?.map((column) => (
                                <td
                                    key={column.key}
                                    className={ stylize({key: column.key, value: item[column.key]})+' px-6 py-2 font-normal'}
                                >
                                    {item[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))
                }
                </TableBody>
            </Table>
        </Pages>
    )
}

