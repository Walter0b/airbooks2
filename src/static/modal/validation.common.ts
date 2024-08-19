import { TravelersItemsValidations } from '@/static/page/core/travelerItems/travelerItems.validation'
import { travelerValidations } from '@/static/page/core/travelers/travelers.validation'
import { ValidationType } from '@/utils/types/structure'

export const Validations: ValidationType = {
    travelers: travelerValidations,
    'travel-item': TravelersItemsValidations,
}
