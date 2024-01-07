import scss from "./style.module.scss";
import { Flex } from "antd";
import MyButton from "../../../../components/button";
import { Link } from "react-router-dom";

const Advice = () => {
    return (
        <div className={scss.advice}>
            <div className={scss.advice__info}>
                <h1 className={scss.advice__title}>
                    Верь в то, чтобы найти это.
                </h1>
                <p className={scss.advice__text}>
                    Ищите недвижимость на продажу и в аренду в Кыргызстане
                </p>
            </div>
            <Flex gap={12}>
                <Link to={"/post/create"}>
                    <MyButton>Продажа</MyButton>
                </Link>
                <Link to={"/posts"}>
                    <MyButton>Покупка</MyButton>
                </Link>
            </Flex>
        </div>
    );
};

export default Advice;
