import { Flex } from "antd";
import React from "react";
import MyInput from "../../../../components/input";

interface Props {
    title: string;
    fromValue: number;
    toValue: number;
    changeFromHandler: (value: string) => void;
    changeToHandler: (value: string) => void;
}

const FromTo: React.FC<Props> = ({
    title,
    fromValue,
    toValue,
    changeFromHandler,
    changeToHandler,
}) => {
    return (
        <Flex gap={16} align="flex-end">
            <MyInput
                value={String(fromValue)}
                onChangeHandler={changeFromHandler}
                placeholder="-"
                title={title}
                type="number"
            />
            <MyInput
                value={String(toValue)}
                onChangeHandler={changeToHandler}
                placeholder="-"
                title=""
                type="number"
            />
        </Flex>
    );
};

export default FromTo;
