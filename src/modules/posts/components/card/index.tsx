import React from "react";
import scss from "./style.module.scss";
import { Flex } from "antd";
import { HeartOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface Props {
    images: string[];
    price: string;
    address: string;
    rooms: number;
    date: string;
    phone: string;
}

const Card: React.FC<Props> = ({
    images,
    price,
    address,
    rooms,
    date,
    phone,
}) => {
    const normalizePrice = (price: string) => {
        return price
            .split("")
            .reverse()
            .map((el, idx) => (idx !== 0 && idx % 3 === 0 ? el + "," : el))
            .reverse()
            .join("");
    };
    return (
        <li className={scss.item}>
            <div className={scss.big__image}>
                <img src={images[0]} alt="" />
            </div>
            <Flex gap={5} className={scss.images}>
                {images.length > 2
                    ? images.slice(1, 4).map((link, idx) => (
                          <div key={idx} className={scss.image}>
                              <img src={link} alt="" />
                          </div>
                      ))
                    : null}
            </Flex>
            <Flex className={scss.price__and__link} justify="space-between">
                <Flex
                    vertical
                    gap={8}
                    align="flex-start"
                    className={scss.price}
                >
                    <span className={scss.price__number}>
                        {normalizePrice(price)}
                    </span>
                    <span className={scss.price__text}>сом</span>
                </Flex>
                <Link to={"/post/1"} className={scss.btn}>
                    открыть
                </Link>
            </Flex>
            <Flex gap={7} vertical align="flex-start" className={scss.info}>
                <span className={scss.state}>{address}</span>
                <span className={scss.state}>{rooms} комнаты</span>

                <span className={scss.new}>новый</span>

                <span className={scss.date}>Добавлено {date}</span>
                <Flex justify="space-between" className={scss.bottom}>
                    <a href={"tel:" + phone}>
                        <button className={scss.bottom__btn}>
                            <PhoneOutlined />
                            Позвонить
                        </button>
                    </a>
                    <button className={scss.bottom__btn}>
                        <HeartOutlined />
                        Сохранить
                    </button>
                </Flex>
            </Flex>
        </li>
    );
};

export default Card;
