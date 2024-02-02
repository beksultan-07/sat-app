import { CalculatorOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import React from "react";
import scss from "./style.module.scss";
import { useTranslation } from "react-i18next";

const { Text, Title, Link } = Typography;

const normalizePrice = (price: string) => {
    return price
        .split("")
        .reverse()
        .map((el, idx) => (idx !== 0 && idx % 3 === 0 ? el + "," : el))
        .reverse()
        .join("");
};

interface Props {
    title?: string;
    price?: number;
    date?: string;
    mapLink?: string;
    paymentLink?: string;
}

const Head: React.FC<Props> = ({
    title,
    price,
    date,
    mapLink,
    paymentLink,
}) => {
    const { t } = useTranslation();
    return (
        <>
            <Flex vertical gap={8}>
                <Title level={5}>{title}</Title>
                <Flex gap={4} align="center">
                    <EnvironmentOutlined className={scss.green} />
                    <Link
                        target="_blank"
                        href={mapLink}
                        className={scss.green__text}
                    >
                        Посмотреть карту
                    </Link>
                </Flex>
            </Flex>

            <Flex vertical gap={8} className={scss.indents}>
                <Title level={4}>{normalizePrice(String(price))} COM</Title>
                <Flex gap={4} align="center">
                    <CalculatorOutlined className={scss.green} />
                    <Link href={paymentLink} className={scss.green__text}>
                        Ежемесячные выплаты по ипотеке
                    </Link>
                </Flex>
                <Text>
                    {t("lang30")} {date}
                </Text>
            </Flex>
        </>
    );
};

export default Head;
