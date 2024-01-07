import React from "react";

import scss from "./style.module.scss";

interface Props {
    children: React.ReactNode;
}

const MyButton: React.FC<Props> = ({ children }) => {
    return <button className={scss.button}>{children}</button>;
};

export default MyButton;
