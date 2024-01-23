import { createBrowserRouter } from "react-router-dom";
// import App from "../../App";
// import MyComponent from "@components/test";
import Layout from "@components/layout";

export const appRouters = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // children: [
        //     { path: "", element: <Login />, },
        //     { path: "customers", element: <Customers /> },
        //     { path: "test", element: <MyComponent /> },
        // ]
    }
]);
