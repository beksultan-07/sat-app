import { Flex } from "antd";
import React from "react";
import MyInput from "../../../../components/input";
import MyButton from "../../../../components/button";

interface Props {
    email: string;
    changeEmail: (value: string) => void;
    onSubmit: () => void;
}

const EmailCollapse: React.FC<Props> = ({ email, changeEmail, onSubmit }) => {
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <Flex vertical gap={8} onClick={(e) => e.stopPropagation()}>
                <MyInput
                    onChangeHandler={(value) => changeEmail(value)}
                    placeholder=""
                    title=""
                    value={email}
                />
                <MyButton>Save</MyButton>
            </Flex>
        </form>
    );
};

export default EmailCollapse;
