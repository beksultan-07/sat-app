import { Button } from "antd";
import React from "react";
import MyButton from "../button";

import scss from "./style.module.scss";

interface props {
    confirm: () => void;
    reject: () => void;
    confirmText: string;
    rejectText: string;
}

const BottomButtons: React.FC<props> = ({
    confirm,
    reject,
    confirmText,
    rejectText,
}) => {
    return (
        <div className={scss.wrap}>
            <Button onClick={reject} size="large" className={scss.reject__btn}>
                {rejectText}
            </Button>
            <MyButton onClick={confirm}>{confirmText}</MyButton>
        </div>
    );
};

export default BottomButtons;
