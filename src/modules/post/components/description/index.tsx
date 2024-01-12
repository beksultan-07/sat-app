import { Flex, Typography } from "antd";
import React from "react";

const { Title } = Typography;

interface Props {
    text: string;
}

const Description: React.FC<Props> = ({ text }) => {
    return (
        <>
            <Flex vertical gap={16}>
                <Title level={5}>Общая информация</Title>

                <Flex vertical gap={12}>
                    {text}
                </Flex>
            </Flex>
        </>
    );
};

export default Description;
