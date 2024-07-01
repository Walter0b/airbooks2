import { TravelersItemsValidations } from '@/pages/core/travelerItems/travelerItems.validation'
import { travelerValidations } from '@/pages/core/travelers/travelers.validation'
import { ValidationType } from '@/utils/types/structure'

export const Validations: ValidationType = {
    travelers: travelerValidations,
    'travel-item': TravelersItemsValidations,
}
