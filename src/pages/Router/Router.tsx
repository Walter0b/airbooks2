import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from '@components/layout'
import Customer from '@pages/core/customers'
import Travelers from '@pages/core/travelers'
import { coreNavigation, reportNavigation } from '@static/page/sidebar'
import Dashboard from '@pages/core/dashboard'
import TravelItems from '@pages/core/travelerItems'
import Bill from '@pages/core/bill'
import CreditNotes from '@pages/core/creditNotes'
import Expenses from '@pages/core/expenses'
import Invoice from '@pages/core/invoice'
import ManualJournal from '@pages/core/manualjournal'
import Payments from '@pages/core/payments'
import Estimates from '@pages/core/estimates'
import ProfitAndLoss from '@pages/report/profit_and_loss'

export const appRouters = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/core/dashboard" />,
    },
    {
        path: 'core',
        element: <Layout sidebar={coreNavigation} />,
        children: [
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'travelers', element: <Travelers /> },
            { path: 'travel-items', element: <TravelItems /> },
            { path: 'customer', element: <Customer /> },
            { path: 'estimates', element: <Estimates /> },
            { path: 'invoice', element: <Invoice /> },
            { path: 'credit_notes', element: <CreditNotes /> },
            { path: 'payments', element: <Payments /> },
            { path: 'bill', element: <Bill /> },
            { path: 'expenses', element: <Expenses /> },
            { path: 'manual_journal', element: <ManualJournal /> },
        ],
    },
    {
        path: 'report',
        element: <Layout sidebar={reportNavigation} />,
        children: [{ path: 'profit_and_loss', element: <ProfitAndLoss /> }],
    },
    {
        path: 'settings',
        element: <Layout sidebar={reportNavigation} />,
        children: [{ path: 'customers', element: <Customer /> }],
    },
])
