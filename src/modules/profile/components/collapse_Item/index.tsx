import { Flex, Typography } from "antd";
import React from "react";

interface Props {
    title: string;
    value: string;
    showValue: boolean;
}

const CollapseItem: React.FC<Props> = ({ title, value, showValue }) => {
    return (
        <Flex vertical gap={8}>
            <Typography.Title level={5} style={{ margin: 0 }}>
                {title}
            </Typography.Title>

            <Typography.Text
                style={{
                    transition: ".2s",
                    height: showValue ? "auto" : 0,
                    visibility: showValue ? "visible" : "hidden",
                    opacity: showValue ? "1" : "0",
                }}
            >
                {value}
            </Typography.Text>
        </Flex>
    );
};

export default CollapseItem;
