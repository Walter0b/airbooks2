import { createBrowserRouter } from "react-router-dom";
import Layout from "@components/layout";
import Travelers from "@pages/travelers";
import { TravelItem } from "@pages/travelerItems";
import Customer from "@pages/customers";

export const appRouters = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: "/travelers", element: <Travelers />, },
            { path: "travelitem", element: <TravelItem /> },
            { path: "customers", element: <Customer /> },
        ]
    }
]);
