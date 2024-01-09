import React from "react";
import scss from "./style.module.scss";
import { Input } from "antd";

interface Props {
    onChangeHandler: (value: string) => void;
}

const Head: React.FC<Props> = ({ onChangeHandler }) => {
    return (
        <div className={scss.head}>
            <h2 className={scss.title}>Недвижимость в Кыргызстане в аренду</h2>
            <h3 className={scss.pretitle}>Введите название города</h3>

            <Input
                onChange={(e) => onChangeHandler(e.target.value)}
                placeholder="Название города"
                size="large"
            />
        </div>
    );
};

export default Head;
