/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, useState } from 'react'

type Validations = Record<string, (value: string, fields: any) => string>

export function useFormState(initialValues: any, validations: Validations) {
    const [values, setValues] = useState(() => {
        const initializeFieldStates = Object.fromEntries(
            Object.entries(initialValues).map(([field, value]) => [
                field,
                { value, error: '' },
            ])
        )
        return initializeFieldStates
    })

    const memoizedValidations = useMemo(
        () =>
            Object.fromEntries(
                Object.entries(validations).map(([key, fn]) => [
                    key,
                    (value: string) => fn(value, values),
                ])
            ),
        [validations, values]
    )

    const handleChange = useCallback(
        (prop: any, newValue: any) => {
            const validationError = memoizedValidations[prop]?.(newValue) ?? ''
            setValues((prevValues) => ({
                ...prevValues,
                [prop]: {
                    ...prevValues[prop],
                    value: newValue,
                    error: validationError,
                },
            }))
        },
        [memoizedValidations]
    )

    const FieldsValue = new Proxy(values, {
        set(_, prop, value) {
            handleChange(prop, value)
            return true
        },
    })

    return { FieldsValue }
}
