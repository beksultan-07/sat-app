import { Flex, Typography } from "antd";
import React, { useEffect, useState } from "react";
import MyInput from "../../../../components/input";
import MyButton from "../../../../components/button";

interface Props {
    passwordSubmit: (password: string) => void;
}

const PasswordCollapse: React.FC<Props> = ({ passwordSubmit }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errText, setErrText] = useState("");

    useEffect(() => {
        return () => {
            setErrText("");
        };
    }, []);

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrText("Different passwords");
        } else {
            passwordSubmit(password);
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
                    title="New password"
                    value={password}
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
