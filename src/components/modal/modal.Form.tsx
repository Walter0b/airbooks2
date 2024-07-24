import { DynamicFormProps } from '@/utils/types/structure'
import React from 'react'
import fieldsCompents from './form-Input-Builder'
import { cn } from '@/utils/functions/classNames'

export default function DynamicForm({
    items,
    FieldsValue,
}: Readonly<DynamicFormProps>) {
    return (
        <div>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex content-center text-black ">
                        <div
                            className={cn(
                                'mt-9 w-1/6',
                                !item.label && 'invisible',
                                'font-medium',
                                item?.required && 'text-red-800'
                            )}
                        >
                            {' '}
                            {item.label}
                        </div>
                        <div
                            className={cn(
                                'grid w-4/5 max-w-2xl grid-cols-1 gap-x-4 gap-y-2 dark:text-white',
                                item.columnSpan
                                    ? item.columnSpan
                                    : 'sm:grid-cols-6'
                            )}
                        >
                            {item?.fields?.map((field) => {
                                return (
                                    <div
                                        key={field.id}
                                        className={cn(
                                            field.span,
                                            field.type === 'space' &&
                                                'invisible',
                                            'text-end'
                                        )}
                                    >
                                        <label
                                            htmlFor={field.id}
                                            className={cn(
                                                !field.label && 'mt-7',
                                                'input-label h-8 !text-right'
                                            )}
                                        >
                                            {field.label}
                                        </label>

                                        <div
                                            className={cn(
                                                !field.label && 'mt-7',
                                                'h-8'
                                            )}
                                        >
                                            {fieldsCompents[field?.type](
                                                field,
                                                FieldsValue
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
