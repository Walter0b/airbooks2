import { commonValidations } from '@/static/modal/validation'
import { IndividualFormDataProp } from '@/utils/types/structure'

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
                        type: 'lookup',
                        span: 'sm:col-span-1',
                        required: true,
                    },
                    {
                        id: 'first_name',
                        label: 'First Name',
                        type: 'text',
                        span: 'sm:col-span-3',
                        required: true,
                    },
                    {
                        id: 'last_name',
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
                        id: 'display_name',
                        type: 'input',
                        readOnly: true,
                        span: 'sm:col-span-6',
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
                        id: 'work_phone',
                        label: 'Work Phone',
                        type: 'tel',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'mobile_phone',
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
                        id: 'passport_number',
                        label: 'Number',
                        type: 'text',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'passport_issued_on',
                        label: 'issued On',
                        type: 'date',
                        span: 'sm:col-span-2',
                    },
                    {
                        id: 'passport_expire_on',
                        label: 'Expires On',
                        type: 'date',
                        span: 'sm:col-span-2',
                    },

                    {
                        id: 'CountryOfCitizenship',
                        label: 'Country of Citizenship',
                        type: 'lookup',
                        span: 'sm:col-span-3',
                    },

                    {
                        id: 'Empty1',
                        type: 'space',
                        span: 'sm:col-span-3',
                    },

                    {
                        id: 'birth_date',
                        label: 'Date Of Birth',
                        type: 'date',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'marital_status',
                        label: 'Marital Status',
                        type: 'lookup',
                        span: 'sm:col-span-2',
                    },
                    {
                        id: 'gender',
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
                        id: 'street',
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
                        id: 'postal_code',
                        label: 'Zip/Postal Code',
                        type: 'text',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'country',
                        label: 'Country',
                        type: 'lookup',
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
        label: 'Preferences',
        tabs: [
            // {
            //     label: '',
            //     fields: [
            //         {
            //             id: 'smoking',
            //             label: 'Smoking',
            //             type: 'checkbox',
            //             span: 'sm:col-span-6',
            //         }
            //     ],
            // },
            {
                label: 'Flights',
                fields: [
                    {
                        id: 'seating',
                        label: 'Seating',
                        type: 'lookup',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'meal_request',
                        label: 'Meal Request',
                        type: 'lookup',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'special_request',
                        label: 'Special Request',
                        type: 'text',
                        span: 'sm:col-span-6',
                    },
                    {
                        id: 'preferred_airline',
                        label: 'Preferred Airline',
                        type: 'lookup',
                        span: 'sm:col-span-3',
                    },
                    {
                        id: 'frequent_flyer',
                        label: 'Frequent Flyer#',
                        type: 'text',
                        span: 'sm:col-span-2',
                    },
                    {
                        id: 'delete',
                        label: 'X',
                        type: 'button',
                        span: 'sm:col-span-1',
                    },
                    {
                        id: 'airTax',
                        label: 'Air Tax',
                        type: 'table',
                        span: 'sm:col-span-3',
                        tableClass: '',
                        tableLayout: [
                            {
                                trClass: '',
                                tds: [
                                    {
                                        tdClass: '',
                                        content: {
                                            id: 'td1',
                                            type: 'text',
                                            span: '',
                                        },
                                    },
                                    {
                                        tdClass: '',
                                        content: {
                                            id: 'td2',
                                            type: 'text',
                                            span: '',
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
]
