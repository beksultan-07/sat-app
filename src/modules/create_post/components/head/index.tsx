import React from "react";
import scss from "./style.module.scss";

const Head: React.FC = () => {
    return (
        <div className={scss.head}>
            <h1 className={scss.title}>
                Недвижимость <br /> в Кыргызстане в аренду
            </h1>
        </div>
    );
};

export default Head;
