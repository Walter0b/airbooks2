import { TravelerItemsInputFields } from "@/pages/core/travelerItems/travelerItems.input";
import { TravelersInputFields } from "@/pages/core/travelers/travelers.input";
import { FormDataProps } from "@/utils/models/structure";

export const modalInputFields: FormDataProps = {
    'travelers': TravelersInputFields,
    'travel-items': TravelerItemsInputFields
}

export const Customerslabels = [
    { key: 'ID', label: 'id' },
    { key: 'Customer_name', label: 'Name' },
    { key: 'City', label: 'City' },
    { key: 'Balance', label: 'Balance' },
    { key: 'Language', label: 'Language' },
    { key: 'Id_currency', label: 'Currency ID' },
    { key: 'Id_country', label: 'Country ID' },
]; 
