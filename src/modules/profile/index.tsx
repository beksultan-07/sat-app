import React, { useEffect, useState } from "react";
import GrayBG from "../../components/gray_bg";
import Languages from "./components/languages";
import { Button, Collapse, Flex, Typography } from "antd";
import scss from "./style.module.scss";
import { EditOutlined } from "@ant-design/icons";
import getItems from "./components/collapse_items";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ProfileModule: React.FC = () => {
    const [data, setData] = useState({
        firstName: "Michael",
        lastName: "Jordan",
        email: "user@gmail.com",
    });

    const auth = useSelector((state: RootState) => state.auth.auth);

    const nav = useNavigate();

    useEffect(() => {
        if (!auth) nav("/signin");
    }, [auth]);

    const [showCollapseItem, setShowCollapseItem] = useState([
        true,
        true,
        true,
    ]);

    const nameSubmitHandler = () => {
        console.log(data);
    };

    const emailSubmitHandler = (passwordToConfirm: string) => {
        console.log(data);
    };

    return (
        <GrayBG>
            <Title level={3}>Настойки аккаунта</Title>

            <Flex gap={16} vertical className={scss.wrap} align="flex-start">
                <Flex justify="space-between" style={{ width: "100%" }}>
                    <Languages />

                    <Button>Sign out</Button>
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
                    })}
                />
            </Flex>
        </GrayBG>
    );
};

export default ProfileModule;
