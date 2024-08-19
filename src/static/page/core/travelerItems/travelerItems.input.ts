import { IndividualFormDataProp } from '@/utils/types/structure'

export const TravelerItemsInputFields: IndividualFormDataProp[] = [
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
