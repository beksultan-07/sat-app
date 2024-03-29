import { Divider, Flex, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

interface Props {
    property?: string;
    ownership?: string;
    bathroomCount?: number;
    bedroomCount?: number;
}

const Info: React.FC<Props> = ({
    property,
    ownership,
    bathroomCount,
    bedroomCount,
}) => {
    const { t } = useTranslation();
    return (
        <div>
            <Divider />

            <Flex gap={12} justify="space-between">
                <Flex vertical gap={8} flex={1}>
                    <Text style={{ fontSize: "12px" }}>{t("lang18")}</Text>
                    <Text>{property}</Text>
                </Flex>
                <Flex vertical gap={8} flex={1}>
                    <Text style={{ fontSize: "12px" }}>{t("lang36")}</Text>
                    <Text>{ownership}</Text>
                </Flex>
            </Flex>
            <Flex gap={12} justify="space-between" style={{ margin: "20px 0" }}>
                <Flex vertical gap={8} flex={1}>
                    <Text style={{ fontSize: "12px" }}>Спальни</Text>
                    <Text>{bathroomCount}</Text>
                </Flex>
                <Flex vertical gap={8} flex={1}>
                    <Text style={{ fontSize: "12px" }}>Ванные комнаты</Text>
                    <Text>{bedroomCount}</Text>
                </Flex>
            </Flex>
            <Divider />
        </div>
    );
};

export default Info;
