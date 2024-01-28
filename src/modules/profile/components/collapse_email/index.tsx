import { Flex } from "antd";
import React, { useState } from "react";
import MyInput from "../../../../components/input";
import MyButton from "../../../../components/button";

interface Props {
    email: string;
    changeEmail: (value: string) => void;
    onSubmit: (passwordToConfirm: string) => void;
}

const EmailCollapse: React.FC<Props> = ({ email, changeEmail, onSubmit }) => {
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(password);
    };
    const [password, setPassword] = useState("");

    return (
        <form onSubmit={onSubmitHandler}>
            <Flex vertical gap={8} onClick={(e) => e.stopPropagation()}>
                <MyInput
                    onChangeHandler={(value) => changeEmail(value)}
                    placeholder=""
                    title="First name"
                    value={email}
                />
                <MyInput
                    onChangeHandler={(value) => setPassword(value)}
                    placeholder="*******"
                    title="password"
                    value={password}
                    type="password"
                />
                <MyButton>Save</MyButton>
            </Flex>
        </form>
    );
};

export default EmailCollapse;
