import React from "react";

import scss from "./style.module.scss";

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}

const MyButton: React.FC<Props> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={scss.button}>
            {children}
        </button>
    );
};

export default MyButton;
