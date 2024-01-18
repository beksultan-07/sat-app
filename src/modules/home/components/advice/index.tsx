import scss from "./style.module.scss";
import { Flex } from "antd";
import MyButton from "../../../../components/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Advice = () => {
    const { t } = useTranslation();
    return (
        <div className={scss.advice}>
            <div className={scss.advice__info}>
                <h1 className={scss.advice__title}>{t("lang2")}</h1>
                <p className={scss.advice__text}>
                    Ищите недвижимость на продажу и в аренду в Кыргызстане
                </p>
            </div>
            <Flex gap={12}>
                <Link to={"/post/create"}>
                    <MyButton>{t("lang4")}</MyButton>
                </Link>
                <Link to={"/posts"}>
                    <MyButton>{t("lang4.1")}</MyButton>
                </Link>
            </Flex>
        </div>
    );
};

export default Advice;
