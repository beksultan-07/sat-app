import { Flex, Typography } from "antd";
import React, { useState } from "react";
import MyInput from "../../../../components/input";
import MyButton from "../../../../components/button";

interface Props {
    passwordSubmit: (oldPassword: string, newPassword: string) => void;
}

const PasswordCollapse: React.FC<Props> = ({ passwordSubmit }) => {
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errText, setErrText] = useState("");

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setErrText("Different passwords");
        } else {
            console.log(newPassword);
            passwordSubmit(password, confirmPassword);
        }
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <Flex vertical gap={8} onClick={(e) => e.stopPropagation()}>
                {errText ? (
                    <Typography.Title level={5} type="danger">
                        {errText}
                    </Typography.Title>
                ) : null}
                <MyInput
                    onChangeHandler={(value) => setPassword(value)}
                    placeholder="*******"
                    title="password"
                    value={password}
                />
                <MyInput
                    onChangeHandler={(value) => setNewPassword(value)}
                    placeholder="*******"
                    title="New password"
                    value={newPassword}
                    type="password"
                />
                <MyInput
                    onChangeHandler={(value) => setConfirmPassword(value)}
                    placeholder="*******"
                    title="Confirm new password"
                    value={confirmPassword}
                    type="password"
                />
                <MyButton>Save</MyButton>
            </Flex>
        </form>
    );
};

export default PasswordCollapse;
