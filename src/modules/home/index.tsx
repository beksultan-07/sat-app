import React from "react";
import Advice from "./components/advice";
import Register from "./components/register";
import NoViews from "./components/noViews";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const HomeModule: React.FC = () => {
    const auth = useSelector((state: RootState) => state.auth.auth);
    return (
        <>
            <Advice />
            {!auth ? <Register /> : null}
            <NoViews />
        </>
    );
};

export default HomeModule;
