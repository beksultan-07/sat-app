import React from "react";
import scss from "./style.module.scss";
import { useTranslation } from "react-i18next";
import MyDropDown from "../../../../components/dropdown";
import { regions } from "../../../../data/data";

interface Props {
    onChangeHandler: (value: string) => void;
}

const Head: React.FC<Props> = ({ onChangeHandler }) => {
    const { t } = useTranslation();
    return (
        <div className={scss.head}>
            <h2 className={scss.title}>{t("lang13")}</h2>
            <h3 className={scss.pretitle}>{t("lang14")}</h3>

            <MyDropDown
                defaultName="Обасть"
                handleChange={onChangeHandler}
                items={regions}
                title=""
            />
        </div>
    );
};

export default Head;
