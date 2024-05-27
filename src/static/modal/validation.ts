/* eslint-disable @typescript-eslint/no-explicit-any */

const emailValidation = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(value)) {
        return 'Please enter a valid email address'
    }

    return null
}
const generateEmail = (fields: any) => {
    // console.log("🚀 ~ generateEmail ~ fields:", fields)
    return `${fields.first_name.value}${fields.last_name.value}@example.com`
}

export const commonValidations = {
    Title: (value: string) => !value && 'Title is required',
    firstName: (value: string) => !value && 'First name is required',
    lastName: (value: string) => !value && 'Last name is required',
    DisplayName: (value: string) => !value && 'Display name is required',

    Email: (value: string, fields: any) => {
        // console.log("🚀 ~ generateEmail ~ fields2:", fields,value)
        const generatedEmail = generateEmail(fields)
        return !value && (!fields.firstName.value || !fields.lastName.value)
            ? 'Email should be the concatenation of first name and last name followed by @example.com'
            : value !== generatedEmail
              ? 'Email should be the concatenation of first name and last name followed by @example.com'
              : emailValidation(value)
    },
}
