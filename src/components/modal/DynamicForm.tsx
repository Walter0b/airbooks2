import Buttons from '@components/buttons/buttons'
import './index.css'
import { DynamicFormProps } from '@utils/models/structure'
import { Dropdown } from '@components/buttons/dropdown'
import React from 'react'

export default function DynamicForm({ items }: { items: DynamicFormProps[] }) {
    console.log('fields', items)

    return (
      
            <div className="px-4 sm:px-8 ">
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex content-center text-black ">
                            <div
                                className={`mt-9 w-1/6 font-medium text-${item?.color}`}
                            >
                                {' '}
                                {item.column}
                            </div>
                            <div
                                className={`grid w-4/5 max-w-2xl grid-cols-1 gap-x-4 gap-y-2 dark:text-white ${item.cSpan ? item.cSpan : 'sm:grid-cols-6'} `}
                            >
                                {item.files.map((field) => {
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
                                                {field.type === 'select' ? (
                                                    <Buttons
                                                        hasDropdownIcon={true}
                                                        arrowClassName="group-hover/button:!fill-cyan-550 fill-gray-500 mr-2"
                                                        className=" !h-full items-center justify-end rounded-sm  !border text-gray-900 shadow-sm hover:border-blue-400 focus:border-blue-400  sm:text-sm sm:leading-6"
                                                    >
                                                        <div data-slot="title"></div>
                                                        <Dropdown
                                                            size={'full'}
                                                            className="focus:shadow-outline right-0 rounded-sm border border-blue-400 text-sm text-gray-900 "
                                                            text="!text-xs font-normal text-start"
                                                            data-slot="dropdown"
                                                            dropdownOptions={
                                                                field?.options 
                                                            }
                                                        />
                                                    </Buttons>
                                                ) : field.type ===
                                                  'textarea' ? (
                                                    <textarea
                                                        id={field.id}
                                                        name={field.id}
                                                        autoComplete={
                                                            field.autoComplete
                                                        }
                                                        className="input-shadow focus:shadow-outline mb-11 block h-36 w-full rounded-sm border border-gray-300 text-sm text-gray-900 focus:border-blue-400"
                                                    />
                                                ) : (
                                                    <input
                                                        type={field.type}
                                                        id={field.id}
                                                        name={field.id}
                                                        autoComplete={
                                                            field.autoComplete
                                                        }
                                                        placeholder={
                                                            field.placeHolder
                                                        }
                                                        className="input-shadow focus:shadow-outline block h-full w-full rounded-sm border border-gray-300 text-sm text-gray-900 focus:border-blue-400 hover:border-blue-400"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        
    )
}
