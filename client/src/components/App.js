import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


/**
 * Import all components
 */
import Username from "./user/Username";
import Password from "./user/Password";
import Register from "./user/Register";
import Profile from "./user/Profile";
import Recovery from "./user/Recovery";
import Reset from "./user/Reset";
import PageNotFound from "./general/PageNotFound";


/**
 * root routes
 * -> Defines all the routes in the application
 * @type {Router}
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <Username></Username>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/password",
        element: <Password></Password>
    },
    {
        path: "/recovery",
        element: <Recovery></Recovery>
    },
    {
        path: "/reset",
        element: <Reset></Reset>
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    },

])

const App = () => {
    return (
        <main>
            <RouterProvider router={router}>

            </RouterProvider>
        </main>
    );
}

export default App;