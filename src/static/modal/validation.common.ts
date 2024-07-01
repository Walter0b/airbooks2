import { TravelersItemsValidations } from '@/app/(dashboard)/core/travelerItems/travelerItems.validation'
import { travelerValidations } from '@/app/(dashboard)/core/travelers/travelers.validation'
import { ValidationType } from '@/utils/types/structure'

export const Validations: ValidationType = {
    travelers: travelerValidations,
    'travel-item': TravelersItemsValidations,
}
