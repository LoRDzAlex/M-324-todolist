import React from "react";
import {Outlet} from "react-router-dom";
import Appbar from "./Appbar";
import Home from "./Home/Home";

const Layout = () => {
    return (
        <>
            <Appbar/>
            <Home/>
            <Outlet/>
        </>
    );
};

export default Layout;