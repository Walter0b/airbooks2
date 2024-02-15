import { DynamicFormProps } from "@utils/models/structure";

export const TravelersMainFields: DynamicFormProps[] = [

    {
        column: 'Traveler Name',
        files: [
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
        column: 'Display Name',
        color: 'red-800',
        files: [
            {
                id: 'DisplayName', type: 'select', span: 'sm:col-span-6'
            }
        ]

    },
    {
        column: 'Contact',
        files: [
            {
                id: 'Email', label: 'Email', type: 'email', span: 'sm:col-span-6'
            }
        ]

    },
    {

        files: [
            {
                id: 'WorkPhone', label: 'Work Phone', type: 'tel', span: 'sm:col-span-3'
            },
            {
                id: 'MobilePhone', label: 'Mobile Phone', type: 'tel', span: 'sm:col-span-3'
            }
        ]

    },
    {
        column: 'Passport',
        cSpan: 'sm:grid-cols-7',
        files: [
            {
                id: 'PassportNumber', label: 'Number', type: 'number', span: 'sm:col-span-3'
            },
            {
                id: 'issuedDate', label: 'issued On', type: 'date', span: 'sm:col-span-2'
            },
            {
                id: 'ExpiresDate', label: 'Expires On', type: 'tel', span: 'sm:col-span-2'
            },

        ]

    },
    {
        cSpan: 'sm:grid-cols-7',
        files: [
            {
                id: 'CountryOfCitizenship', label: 'Country of Citizenship', type: 'select', span: 'sm:col-span-3'
            },

        ]

    },
    {
        cSpan: 'sm:grid-cols-7',
        files: [

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
                        value: 'Male'
                    },
                    {
                        label: 'Female',
                        value: 'Female'
                    },]
            }
        ]

    },
    {
        column: 'Address',
        files: [
            {
                id: 'Select', label: 'Street', type: 'text', span: 'sm:col-span-6'
            }
        ]

    },
    {

        files: [
            {
                id: 'City', label: 'City', type: 'text', span: 'sm:col-span-3'
            },
            {
                id: 'State', label: 'State', type: 'text', span: 'sm:col-span-3'
            }
        ]

    },
    {

        files: [
            {
                id: 'Zip-PostalCode', label: 'Zip/Postal Code', type: 'text', span: 'sm:col-span-3'
            },
            {
                id: 'Country', label: 'Country', type: 'select', span: 'sm:col-span-3'
            }
        ]

    },
    {
        column: 'Notes',
        files: [
            {
                id: 'Note', type: 'textarea', span: 'sm:col-span-6'
            },

        ]

    },


];


export const TravelersBookingFields: DynamicFormProps[] = [{
    column: 'Traveler Name',
    files: [
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
},];
export const CustomersColumns = [
    { key: 'ID', label: 'id' },
    { key: 'Customer_name', label: 'Name' },
    { key: 'City', label: 'City' },
    { key: 'Balance', label: 'Balance' },
    { key: 'Language', label: 'Language' },
    { key: 'Id_currency', label: 'Currency ID' },
    { key: 'Id_country', label: 'Country ID' },
]; 
