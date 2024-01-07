import React from "react";
import Advice from "./components/advice";
import Register from "./components/register";
import NoViews from "./components/noViews";

const HomeModule = () => {
    return (
        <>
            <Advice />
            <Register />
            <NoViews />
        </>
    );
};

export default HomeModule;
