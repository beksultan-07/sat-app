import React, { useEffect, useState } from "react";
import GrayBG from "../../components/gray_bg";
import Languages from "./components/languages";
import { Button, Collapse, Flex, Typography } from "antd";
import scss from "./style.module.scss";
import { EditOutlined } from "@ant-design/icons";
import getItems from "./components/collapse_items";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import {
    changeNameFromDB,
    signOutFromFB,
    updateEmailFromDB,
    updatePasswordFromDB,
} from "./api";
import { changeEmail, changeFullName, setAuth } from "../../store/slices/auth";

const { Title, Text } = Typography;

const ProfileModule: React.FC = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const user = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    const nav = useNavigate();

    useEffect(() => {
        if (!user.auth) {
            nav("/signin");
        } else {
            setData({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            });
        }
    }, [user]);

    const [showCollapseItem, setShowCollapseItem] = useState([
        true,
        true,
        true,
    ]);

    const nameSubmitHandler = () => {
        changeNameFromDB(user.id, data.firstName, data.lastName).then((res) => {
            dispatch(
                changeFullName({ lastName: res.lastName, name: res.firstName })
            );
        });
    };

    const emailSubmitHandler = (passwordToConfirm: string) => {
        updateEmailFromDB(
            user.email,
            data.email,
            passwordToConfirm,
            user.id
        ).then((res) => {
            dispatch(changeEmail(res));
        });
    };

    const passwordSubmitHandler = (
        oldPassword: string,
        newPassword: string
    ) => {
        updatePasswordFromDB(user.email, oldPassword, newPassword);
    };

    const signOutHandler = () => {
        signOutFromFB().then(() => {
            dispatch(
                setAuth({
                    auth: false,
                    email: "",
                    firstName: "",
                    id: "",
                    lastName: "",
                })
            );
            nav("/");
        });
    };

    return (
        <GrayBG>
            <Title level={3}>Настойки аккаунта</Title>

            <Flex gap={16} vertical className={scss.wrap} align="flex-start">
                <Flex justify="space-between" style={{ width: "100%" }}>
                    <Languages />

                    <Button onClick={signOutHandler}>Sign out</Button>
                </Flex>

                <Collapse
                    expandIconPosition="end"
                    bordered={false}
                    expandIcon={() => (
                        <Flex gap={8} align="center">
                            <EditOutlined className={scss.green} />
                            <Text className={scss.green}>Edit</Text>
                        </Flex>
                    )}
                    className={scss.collapse}
                    items={getItems({
                        data,
                        setData,
                        showCollapseItem,
                        setShowCollapseItem,
                        nameSubmit: nameSubmitHandler,
                        emailSubmit: emailSubmitHandler,
                        passwordSubmit: passwordSubmitHandler,
                    })}
                />
            </Flex>
        </GrayBG>
    );
};

export default ProfileModule;
