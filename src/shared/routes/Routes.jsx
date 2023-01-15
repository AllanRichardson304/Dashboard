import React from "react";
import { useRoutes } from "react-router-dom";
import { LayoutContent } from "../../components/layout/layout";
export const Routes = () =>{
    let routes = useRoutes([
        {
            path: "*", element: <LayoutContent />,
        },
    ]);
    return routes;
}