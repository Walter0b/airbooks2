import { commonValidations } from '@/static/modal/validation'
import { IndividualFormDataProp } from '@/utils/models/structure'

export const TravelersInputFields: IndividualFormDataProp[] = [
    {
        label: 'Main',
        tabs: [
            {
                label: 'Traveler Name',
                fields: [
                    {
                        id: 'title',
                        label: 'Title',
                        type: 'select',
                        span: 'sm:col-span-1',
                        required: true,
                    },
                    {
                        id: 'firstName',
                        label: 'First Name',
                        type: 'text',
                        span: 'sm:col-span-3',
                        required: true,
                    },
                    {
                        id: 'lastName',
                        label: 'Last Name',
                        type: 'text',
                        span: 'sm:col-span-2',
                        required: true,
                    },
                ],
            },
            {
                label: 'Display Name',
                required: true,
                fields: [
                    {
                        id: 'displayName',
                        type: 'select',
                        span: 'sm:col-span-6',
                        options: [
                            {
                                id: 'firstName',
                                label: 'Male',
                                value: 'Male',
                            },
                            {
                                id: 'lastName',
                                label: 'Female',
                                value: 'Female',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Contact',
                fields: [
                    {
                        id: 'email',
                        label: 'Email',
                        type: 'email',
                        span: 'sm:col-span-6',
                        validations: commonValidations.Email,
                    },
                ],
            },
            {
                fields: [
                    {
                        id: 'workPhone',
                        label: 'Work Phone',
                        type: 'tel',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'mobilePhone',
                        label: 'Mobile Phone',
                        type: 'tel',
                        span: 'sm:col-span-3',
                    },
                ],
            },
            {
                label: 'Passport',
                columnSpan: 'sm:grid-cols-7',
                fields: [
                    {
                        id: 'passportNumber',
                        label: 'Number',
                        type: 'number',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'issuedDate',
                        label: 'issued On',
                        type: 'date',
                        span: 'sm:col-span-2',
                    },
                    {
                        id: 'expiresDate',
                        label: 'Expires On',
                        type: 'tel',
                        span: 'sm:col-span-2',
                    },

                    {
                        id: 'CountryOfCitizenship',
                        label: 'Country of Citizenship',
                        type: 'select',
                        span: 'sm:col-span-3',
                    },

                    {
                        id: 'Empty1',
                        type: 'space',
                        span: 'sm:col-span-3',
                    },

                    {
                        id: 'birthDate',
                        label: 'Date Of Birth',
                        type: 'date',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'MaritalStatus',
                        label: 'Marital Status',
                        type: 'select',
                        span: 'sm:col-span-2',
                    },
                    {
                        id: 'Gender',
                        label: 'Gender',
                        type: 'lookup',
                        readOnly: true,
                        span: 'sm:col-span-2',
                        options: [
                            {
                                label: 'Male',
                                value: 'Male',
                            },
                            {
                                label: 'Female',
                                value: 'Female',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Address',
                fields: [
                    {
                        id: 'Select',
                        label: 'Street',
                        type: 'text',
                        span: 'sm:col-span-6',
                    },
                ],
            },
            {
                fields: [
                    {
                        id: 'city',
                        label: 'City',
                        type: 'text',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'state',
                        label: 'State',
                        type: 'text',
                        span: 'sm:col-span-3',
                    },
                ],
            },
            {
                fields: [
                    {
                        id: 'ZipPostalCode',
                        label: 'Zip/Postal Code',
                        type: 'text',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'country',
                        label: 'Country',
                        type: 'select',
                        span: 'sm:col-span-3',
                    },
                ],
            },
            {
                label: 'Notes',
                fields: [
                    {
                        id: 'note',
                        type: 'textarea',
                        span: 'sm:col-span-6',
                    },
                ],
            },
        ],
    },
    {
        label: 'Booking',
        tabs: [
            {
                label: 'Traveler Name',
                fields: [
                    {
                        id: 'Title',
                        label: 'Title',
                        type: 'select',
                        span: 'sm:col-span-1',
                    },
                    {
                        id: 'firstName',
                        label: 'First Name',
                        type: 'text',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'lastName',
                        label: 'Last Name',
                        type: 'text',
                        span: 'sm:col-span-2',
                    },
                ],
            },
        ],
    },
]
