import React from "react";
import scss from "./style.module.scss";
import { useTranslation } from "react-i18next";

const NoViews: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className={scss.wrap}>
            <h2 className={scss.title}>{t("lang6")}</h2>
            <p className={scss.text}>{t("lang7")}</p>
        </div>
    );
};

export default NoViews;
