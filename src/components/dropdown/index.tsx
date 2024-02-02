import { Flex, Select, Typography } from "antd";
import React, { useEffect } from "react";
import scss from "./style.module.scss";

const { Text } = Typography;

interface Props {
    defaultName: string;
    items: Array<{
        value: string;
        label: string;
    }>;
    title: string;
    handleChange: (value: string) => void;
}

const MyDropDown: React.FC<Props> = ({
    defaultName,
    items,
    title,
    handleChange,
}) => {
    return (
        <Flex vertical gap={12} className={scss.wrap} justify="space-between">
            <Text>{title}</Text>
            <Select
                size="large"
                defaultValue={defaultName}
                style={{ width: 120 }}
                onChange={(value) => handleChange(value)}
                options={items}
                className={scss.dropDown}
            />
        </Flex>
    );
};

export default MyDropDown;
