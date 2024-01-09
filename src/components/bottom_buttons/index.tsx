import { Button } from "antd";
import React from "react";
import MyButton from "../button";

import scss from "./style.module.scss";

interface props {
    confirm: () => void;
    reject: () => void;
}

const BottomButtons: React.FC<props> = ({ confirm, reject }) => {
    return (
        <div className={scss.wrap}>
            <Button onClick={reject} size="large" className={scss.reject__btn}>
                Очистить
            </Button>
            <MyButton onClick={confirm}>Найти жилье</MyButton>
        </div>
    );
};

export default BottomButtons;
