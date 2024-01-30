import { Flex, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

interface Props {
    text?: string;
}

const GeneralInfo: React.FC<Props> = ({ text }) => {
    return (
        <>
            <Flex vertical gap={16} style={{ margin: "32px 0" }}>
                <Title level={5}>Описание недвижимости</Title>
                <Text>{text}</Text>
            </Flex>
        </>
    );
};

export default GeneralInfo;
