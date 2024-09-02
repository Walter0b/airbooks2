interface EndpointConfig {
    name: string
    endpoint: string
}

export const endpointConfig: EndpointConfig[] = [
    { name: 'Travelers', endpoint: 'traveler' },
    { name: 'Customers', endpoint: 'customer' },
    { name: 'AgencyProfile', endpoint: 'agency' },
    { name: 'Users', endpoint: 'user' },
    { name: 'ChartsOfAccounts', endpoint: 'chart_of_accounts' },
    { name: 'Products', endpoint: 'product' },
    { name: 'Currencies', endpoint: 'currency' },
    { name: 'BusinessRules', endpoint: 'business_rules' },
    { name: 'Preferences', endpoint: 'preferences' },
    { name: 'Integration', endpoint: 'integration' },
    { name: 'TravelItem', endpoint: 'travel_item' },
    { name: 'Estimates', endpoint: 'estimates' },
    { name: 'Invoice', endpoint: 'invoice' },
    { name: 'CreditNotes', endpoint: 'credit_notes' },
    { name: 'Payments', endpoint: 'payments' },
    { name: 'Bill', endpoint: 'bill' },
    { name: 'Expenses', endpoint: 'expenses' },
    { name: 'ManualJournal', endpoint: 'manual_journal' },
]
