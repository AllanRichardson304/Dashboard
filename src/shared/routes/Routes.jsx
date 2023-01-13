import React from "react";
import { useRoutes } from "react-router-dom";
import { Layout } from "../../components/layout/layout";
export const Routes = () =>{
    let routes = useRoutes([
        {
            path: "*", element: <Layout />,
        },
    ]);
    return routes;
}