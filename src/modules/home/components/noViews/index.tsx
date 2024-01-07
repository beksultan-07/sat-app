import React from "react";
import scss from "./style.module.scss";

const NoViews: React.FC = () => {
    return (
        <div className={scss.wrap}>
            <h2 className={scss.title}>Последние просмотры</h2>
            <p className={scss.text}>У вас нету последних просмотров</p>
        </div>
    );
};

export default NoViews;
