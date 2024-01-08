import React from "react";
import scss from "./style.module.scss";
import { Flex, Input, Typography } from "antd";

const { Text } = Typography;

interface Props {
    placeholder: string;
    title: string;
    onChangeHandler: (value: string) => void;
    type?: string;
}

const MyInput: React.FC<Props> = ({
    placeholder,
    title,
    onChangeHandler,
    type = "text",
}) => {
    return (
        <Flex vertical gap={12} className={scss.wrap}>
            <Text>{title}</Text>
            <Input
                size="large"
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChangeHandler(e.target.value)}
            />
        </Flex>
    );
};

export default MyInput;
