import { TableHeaderProps, Column } from '@utils/models/interface/table'
import React from 'react'
import Checkboxes from './checkbox'
import SortableBtn from '../buttons/sortable.btn';

export const TableHeader: React.FC<TableHeaderProps> = ({
    columns,
    isCheckedAll,
    handleCheckboxAllChange,
    hasCheckbox,
    handleSort
}) => {

    const handleClick = (sortState: boolean, column: unknown)=>{
        //sortable()
        if(handleSort){
            const data={
                column,
                sortUp: sortState
            }

            handleSort(data)

            //console.log(sortState, column, data);
        }
        
    }

    return (
        <thead
            data-slot="TableHeader"
            className="sticky top-0 bg-gray-50 text-xs capitalize"
        >
            <tr>
                {hasCheckbox && (
                    <Checkboxes
                        checkboxState={isCheckedAll}
                        onChange={handleCheckboxAllChange}
                    />
                )}
                {columns?.map((column: Column) => (
                    <th
                        key={column.key}
                        scope="col"
                        className="px-6 font-normal text-blue-550 active:text-red-500"
                    >
                        {
                            column.sortable?
                            <SortableBtn onClick={(sortState)=>handleClick(sortState, column)} label={column.label} sortUp={false} className={column.className}/>
                            :
                            column.label
                        }
                    </th>
                ))}
            </tr>
        </thead>
    )
}
