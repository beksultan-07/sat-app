import { Flex } from "antd";
import React from "react";
import MyInput from "../../../../components/input";
import MyButton from "../../../../components/button";

interface Props {
    firstName: string;
    lastName: string;
    changeName: (value: string) => void;
    changeLastName: (value: string) => void;
    onSubmit: () => void;
}

const NameCollapse: React.FC<Props> = ({
    firstName,
    lastName,
    changeLastName,
    changeName,
    onSubmit,
}) => {
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <Flex vertical gap={8} onClick={(e) => e.stopPropagation()}>
                <MyInput
                    onChangeHandler={(value) => changeName(value)}
                    placeholder=""
                    title="First name"
                    value={firstName}
                />
                <MyInput
                    onChangeHandler={(value) => changeLastName(value)}
                    placeholder=""
                    title="Last name"
                    value={lastName}
                />
                <MyButton>Save</MyButton>
            </Flex>
        </form>
    );
};

export default NameCollapse;
