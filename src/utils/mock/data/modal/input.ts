import { FormDataProps } from "@utils/models/structure";

export const TravelersMainFields: FormDataProps[] = [
    {

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
            },
            {
                label: 'Display Name',
                color: 'red-800',
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
                        id: 'Email', label: 'Email', type: 'textarea', span: 'sm:col-span-6'
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
                        id: 'CountryOfCitizenship', label: 'Country of Citizenship', type: 'select', span: 'sm:col-span-3'
                    },


                ]

            },
            {
                columnSpan: 'sm:grid-cols-7',
                fields: [
                    {
                        id: 'CountryOfCitizenship', label: 'Country of Citizenship', type: 'select', span: 'sm:col-span-3'
                    },

                ]

            },
            {
                columnSpan: 'sm:grid-cols-7',
                fields: [

                    {
                        id: 'DateOfBirth', label: 'Date Of Birth', type: 'date', span: 'sm:col-span-3'
                    },
                    {
                        id: 'MaritalStatus', label: 'Marital Status', type: 'select', span: 'sm:col-span-2'
                    },
                    {
                        id: 'Gender', label: 'Gender', type: 'select', span: 'sm:col-span-2', options: [
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
                        id: 'Zip-PostalCode', label: 'Zip/Postal Code', type: 'text', span: 'sm:col-span-3'
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
