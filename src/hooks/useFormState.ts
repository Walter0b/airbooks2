import { useState } from "react";

export function useFormState(initialValues, validations) {
    const [values, setValues] = useState(() => {
        const initializeFieldStates = Object.fromEntries(
            Object.entries(initialValues).map(([field, value]) => [field, { value, error: '' }])
        );
        return initializeFieldStates;
    });

    const handleChange = (prop, newValue) => {
        const validationError = validations[prop]?.(newValue, values) ?? '';
        setValues(prevValues => ({
            ...prevValues,
            [prop]: { value: newValue, error: validationError }
        }));
    };

    const FieldsValue = new Proxy(values, {
        set(target, prop, value) {
            handleChange(prop, value);
            return true;
        }
    });

    return { FieldsValue };
}
