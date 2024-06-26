import {
    Navigate,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import Layout from '@/components/layout'
import Customer from '@/pages/core/customers'
import Travelers from '@/pages/core/travelers'
import { coreNavigation, reportNavigation } from '@/static/page/sidebar'
import Dashboard from '@/pages/core/dashboard'
import TravelItems from '@/pages/core/travelerItems'
import Bill from '@/pages/core/bill'
import CreditNotes from '@/pages/core/creditNotes'
import Expenses from '@/pages/core/expenses'
import Invoice from '@/pages/core/invoice'
import ManualJournal from '@/pages/core/manualjournal'
import Payments from '@/pages/core/payments'
import Estimates from '@/pages/core/estimates'
import ProfitAndLoss from '@/pages/report/business_overview/profit_and_loss'
import BalanceSheet from '@/pages/report/business_overview/balance_sheet'
import Consultant from '@/pages/report/sales/consultant'
import Snapshot from '@/components/compactlist/snapshot'
import Bookings from '@/components/compactlist/bookings'
import TravelersItemDetails from '../core/travelers/compact-list/compact-list.details'

const appRouters = createBrowserRouter(
    createRoutesFromElements(
        //Todo: remove modal and put it in the page definition 
        <Route>
            <Route path="/" element={<Navigate to="/core" replace={true} />} />
            <Route path="core" element={<Layout sidebar={coreNavigation} />}>
                <Route index element={<Navigate to="travelers" replace={true} />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="travelers" element={<Travelers />}>
                    <Route path=":id" element={<TravelersItemDetails />} >
                        <Route index element={<Navigate to="snapshot" replace={true} />} />
                        <Route path="snapshot" element={<Snapshot />} />
                        <Route path="bookings" element={<Bookings />} />
                    </Route>

                </Route>
                <Route path="travel-items" element={<TravelItems />}>
                    <Route path=":id" element={<Customer />} />
                </Route>
                <Route path="customer" element={<Customer />} />
                <Route path="estimates" element={<Estimates />} />
                <Route path="invoice" element={<Invoice />} />
                <Route path="credit_notes" element={<CreditNotes />} />
                <Route path="payments" element={<Payments />} />
                <Route path="bill" element={<Bill />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="manual_journal" element={<ManualJournal />} />
            </Route>
            <Route
                path="report"
                element={<Layout sidebar={reportNavigation} />}
            >
                <Route
                    path="business_overview/profit_and_loss"
                    element={<ProfitAndLoss />}
                />
                <Route path="balance_sheet" element={<BalanceSheet />} />
                <Route path="sales/consultant" element={<Consultant />} />
            </Route>
            <Route
                path="settings"
                element={<Layout sidebar={reportNavigation} />}
            >
                <Route path="customers" element={<Customer />} />
            </Route>
        </Route>
    )
)

export default appRouters
