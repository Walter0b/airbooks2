import { FormDataProps } from "@/utils/models/structure";

export const TravelersInputFields: FormDataProps[] = [
    {
        label: 'Main',
        tabs: [
            // TODO: Case option
            {
                label: 'Traveler Name',
                fields: [
                    {
                        id: 'Title', label: 'Title', type: 'select', span: 'sm:col-span-1'
                    },
                    {
                        id: 'FName', label: 'First Name', type: 'text', span: 'sm:col-span-3'
                    },
                    {
                        id: 'LName', label: 'Last Name', type: 'text', span: 'sm:col-span-2'
                    },
                ]
            },
            {
                label: 'Display Name',
                required: true,
                fields: [
                    {
                        id: 'DisplayName', type: 'select', span: 'sm:col-span-6'
                    }
                ]

            },
            {
                label: 'Contact',
                fields: [
                    {
                        id: 'Email', label: 'Email', type: 'email', span: 'sm:col-span-6'
                    }
                ]

            },
            {

                fields: [
                    {
                        id: 'WorkPhone', label: 'Work Phone', type: 'tel', span: 'sm:col-span-3'
                    },
                    {
                        id: 'mobilePhone', label: 'Mobile Phone', type: 'tel', span: 'sm:col-span-3'
                    }
                ]

            },
            {
                label: 'Passport',
                columnSpan: 'sm:grid-cols-7',
                fields: [
                    {
                        id: 'PassportNumber', label: 'Number', type: 'number', span: 'sm:col-span-3'
                    },
                    {
                        id: 'issuedDate', label: 'issued On', type: 'date', span: 'sm:col-span-2'
                    },
                    {
                        id: 'ExpiresDate', label: 'Expires On', type: 'tel', span: 'sm:col-span-2'
                    },

                    {
                        id: 'CountryOfCitizenship', label: 'Country of Citizenship', type: 'select', span: 'sm:col-span-3',
                    },

                    {
                        id: 'Empty1', type: 'space', span: 'sm:col-span-3',
                    },

                    {
                        id: 'DateOfBirth', label: 'Date Of Birth', type: 'date', span: 'sm:col-span-3'
                    },
                    {
                        id: 'MaritalStatus', label: 'Marital Status', type: 'select', span: 'sm:col-span-2'
                    },
                    {
                        id: 'Gender', label: 'Gender', type: 'lookup', readOnly: true, span: 'sm:col-span-2', options: [
                            {
                                label: 'Male',
                                value: 'Male',

                            },
                            {
                                label: 'Female',
                                value: 'Female'
                            },]
                    }



                ]

            },
            {
                label: 'Address',
                fields: [
                    {
                        id: 'Select', label: 'Street', type: 'text', span: 'sm:col-span-6'
                    }
                ]

            },
            {

                fields: [
                    {
                        id: 'City', label: 'City', type: 'text', span: 'sm:col-span-3'
                    },
                    {
                        id: 'State', label: 'State', type: 'text', span: 'sm:col-span-3'
                    }
                ]

            },
            {

                fields: [
                    {
                        id: 'ZipPostalCode', label: 'Zip/Postal Code', type: 'text', span: 'sm:col-span-3'
                    },
                    {
                        id: 'Country', label: 'Country', type: 'select', span: 'sm:col-span-3'
                    }
                ]

            },
            {
                label: 'Notes',
                fields: [
                    {
                        id: 'Note', type: 'textarea', span: 'sm:col-span-6'
                    },

                ]

            },

        ]
    },
    {
        label: 'Booking',
        tabs: [
            {
                label: 'Traveler Name',
                fields: [
                    {
                        id: 'Title', label: 'Title', type: 'select', span: 'sm:col-span-1'
                    },
                    {
                        id: 'FName', label: 'First Name', type: 'text', span: 'sm:col-span-3'
                    },
                    {
                        id: 'LName', label: 'Last Name', type: 'text', span: 'sm:col-span-2'
                    },
                ]
            }
        ]
    }
];


export const Customerslabels = [
    { key: 'ID', label: 'id' },
    { key: 'Customer_name', label: 'Name' },
    { key: 'City', label: 'City' },
    { key: 'Balance', label: 'Balance' },
    { key: 'Language', label: 'Language' },
    { key: 'Id_currency', label: 'Currency ID' },
    { key: 'Id_country', label: 'Country ID' },
]; 
