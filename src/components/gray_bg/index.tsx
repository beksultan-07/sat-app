import React from "react";
import scss from "./style.module.scss";
interface Props {
    children: React.ReactNode;
}

const GrayBG: React.FC<Props> = ({ children }) => {
    return <div className={scss.wrap}>{children}</div>;
};

export default GrayBG;
