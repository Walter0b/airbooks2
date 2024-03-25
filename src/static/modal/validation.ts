/* eslint-disable @typescript-eslint/no-explicit-any */


const emailValidation = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
    }

    return null;
};

const generateEmail = (Fields: any) => {
    return `${Fields.FName.value}${Fields.LName.value}@example.com`;
};

export const commonValidations = {
    Title: (value: string) => !value && 'Title is required',
    FName: (value: string) => !value && 'First name is required',
    LName: (value: string) => !value && 'Last name is required',
    DisplayName: (value: string) => !value && 'Display name is required',

    Email: (value: string, Fields: any) => {
        const generatedEmail = generateEmail(Fields);
        return !value && (!Fields.FName.value || !Fields.LName.value)
            ? 'Email should be the concatenation of first name and last name followed by @example.com'
            : value !== generatedEmail
                ? 'Email should be the concatenation of first name and last name followed by @example.com'
                : emailValidation(value);
    },
};

