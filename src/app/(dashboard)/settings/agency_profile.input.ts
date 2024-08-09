import { commonValidations } from '@/static/modal/validation'
import { FormTabType, IndividualFormDataProp } from '@/utils/types/structure'

export const AgencyProfileInputFields: FormTabType[] =

    [
        {
            label: 'Agency Name',
            fields: [
                {
                    id: 'title',
                    type: 'text',
                    span: 'sm:col-span-6',
                    required: true,
                },
                {
                    id: 'first_name',
                    label: 'With IATA Accreditation',
                    type: 'text',
                    span: 'sm:col-span-1',
                    required: true,
                },
                {
                    id: 'Empty1',
                    type: 'space',
                    span: 'sm:col-span-3',
                },
                {
                    id: 'ID',
                    type: 'number',
                    span: 'sm:col-span-4',
                    required: true,
                },
            ],
        },
        {
            label: 'Country',
            required: true,
            fields: [
                {
                    label: 'country',
                    id: 'country',
                    type: 'lookup',
                    span: 'sm:col-span-6',
                },
            ],
        },
        {
            label: 'Agency Adress',
            fields: [
                {
                    id: 'street',
                    label: 'Street',
                    type: 'text',
                    span: 'sm:col-span-6',
                },
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
                {
                    id: 'Phone',
                    label: 'Phone',
                    type: 'tel',
                    span: 'sm:col-span-3',
                },
                {
                    id: 'fax',
                    label: 'Fax',
                    type: 'tel',
                    span: 'sm:col-span-3',
                },
                {
                    id: 'email',
                    label: 'Email',
                    type: 'email',
                    span: 'sm:col-span-3',
                    validations: commonValidations.Email,
                },
                {
                    id: 'website',
                    label: 'Website',
                    type: 'text',
                    span: 'sm:col-span-3',
                },
            ],
        },
        {
            label: 'Owner Contact',
            columnSpan: 'sm:grid-cols-7',
            fields: [
                {
                    id: 'title',
                    label: 'Title',
                    placeHolder: 'Title',
                    type: 'lookup',
                    readOnly: true,
                    span: 'sm:col-span-1',
                    options: [
                        {
                            label: 'Mr.',
                            value: 'Male',
                        },
                        {
                            label: 'Mrs.',
                            value: 'Female',
                        },
                        {
                            label: 'Miss.',
                            value: 'Female',
                        },
                        {
                            label: 'Ms.',
                            value: 'Female',
                        },
                        {
                            label: 'Dr.',
                            value: 'Female',
                        },
                        {
                            label: 'Pr.',
                            value: 'Female',
                        },
                        {
                            label: 'Hons.',
                            value: 'Female',
                        },
                        {
                            label: 'Ing.',
                            value: 'Female',
                        },
                        {
                            label: 'M.',
                            value: 'Female',
                        },
                    ],
                },
                {
                    id: 'first_name',
                    label: 'First Name',
                    type: 'text',
                    span: 'sm:col-span-3',
                },
                {
                    id: 'last_name',
                    label: 'Last Name',
                    type: 'text',
                    span: 'sm:col-span-3',
                },
                {
                    id: 'email',
                    label: 'Email',
                    type: 'email',
                    span: 'sm:col-span-6',
                    validations: commonValidations.Email,
                },
                {
                    id: 'mobile_phone',
                    label: 'Mobile Phone',
                    type: 'tel',
                    span: 'sm:col-span-4',
                },
            ],
        },
        {
            label: 'Tax ID',
            fields: [
                {
                    id: 'tax_id',
                    type: 'text',
                    span: 'sm:col-span-6',
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

    ]

