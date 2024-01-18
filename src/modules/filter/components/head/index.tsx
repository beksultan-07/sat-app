import React from "react";
import scss from "./style.module.scss";
import { Input } from "antd";
import { useTranslation } from "react-i18next";

interface Props {
    onChangeHandler: (value: string) => void;
}

const Head: React.FC<Props> = ({ onChangeHandler }) => {
    const { t } = useTranslation();
    return (
        <div className={scss.head}>
            <h2 className={scss.title}>{t("lang13")}</h2>
            <h3 className={scss.pretitle}>{t("lang14")}</h3>

            <Input
                onChange={(e) => onChangeHandler(e.target.value)}
                placeholder={t("lang15")}
                size="large"
            />
        </div>
    );
};

export default Head;
