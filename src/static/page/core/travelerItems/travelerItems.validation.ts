import { commonValidations } from '@/static/modal/validation'

export const TravelersItemsValidations = {
    ...commonValidations,
    PassportNumber: (value: string) => !value && 'Passport number is required',
    PassportExpiry: (value: string) =>
        !value && 'Passport expiry date is required',
    Nationality: (value: string) => !value && 'Nationality is required',
}
