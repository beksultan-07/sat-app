import { CalculatorOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import React from "react";
import scss from "./style.module.scss";

const { Text, Title, Link } = Typography;

interface Props {
    title: string;
    price: string | number;
    date: string | number;
}

const Head: React.FC<Props> = ({ title, price, date }) => {
    return (
        <>
            <Flex vertical gap={8}>
                <Title level={5}>{title}</Title>
                <Flex gap={4} align="center">
                    <EnvironmentOutlined className={scss.green} />
                    <Link className={scss.green__text}>Посмотреть карту</Link>
                </Flex>
            </Flex>

            <Flex vertical gap={8} className={scss.indents}>
                <Title level={4}>{price} COM</Title>
                <Flex gap={4} align="center">
                    <CalculatorOutlined className={scss.green} />
                    <Link className={scss.green__text}>
                        Ежемесячные выплаты по ипотеке
                    </Link>
                </Flex>
                <Text>Добавлено {date}</Text>
            </Flex>
        </>
    );
};

export default Head;
