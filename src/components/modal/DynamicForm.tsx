import './index.css'
import { FormTabType } from '@utils/models/structure'
import React from 'react'
import fieldsCompents from './formInputBuilder'

export default function DynamicForm({ items, values, errors }: Readonly<{ items: FormTabType[], }>) {

    console.log(fieldsCompents)
    return (

        <form>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex content-center text-black ">
                        <div
                            className={`mt-9 w-1/6 ${!item.column && 'invisible'} font-medium text-${item?.color}`}
                        >
                            {' '}
                            {item.column}
                        </div>
                        <div
                            className={`grid w-4/5 max-w-2xl grid-cols-1 gap-x-4 gap-y-2 dark:text-white ${item.cSpan ? item.cSpan : 'sm:grid-cols-6'} `}
                        >
                            {item.fields.map((field) => {
                                return (
                                    <div
                                        key={field.id}
                                        className={field.span}
                                    >
                                        <label
                                            htmlFor={field.id}
                                            className={`mt-3  block h-fit text-end text-[0.6rem] font-medium leading-6 text-cyan-900`}
                                        >
                                            {field.label}
                                        </label>
                                        <div
                                            className={`${field.label} ${!field.label && 'mt-7'} h-8`}
                                        >
                                            {fieldsCompents[field.type](field, values, errors)}

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </form>

    )
}
