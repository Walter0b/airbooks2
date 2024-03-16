/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export function useFormState(initialValues: any, validations: any) {
    const [values, setValues] = useState(() => {
        const initializeFieldStates = Object.fromEntries(
            Object.entries(initialValues).map(([field, value]) => [field, { value, error: '' }])
        );
        return initializeFieldStates;
    });

    const handleChange = (prop: any, newValue: any) => {
        const validationError = validations[prop]?.(newValue, values) ?? '';
        setValues(prevValues => ({
            ...prevValues,
            [prop]: { value: newValue, error: validationError }
        }));
    };

    const FieldsValue = new Proxy(values, {
        set( prop, value) {
            handleChange(prop, value);
            return true;
        }
    });

    return { FieldsValue };
}
