import React, { useEffect, useState } from "react";
import GrayBG from "../../components/gray_bg";
import Languages from "./components/languages";
import { Button, Collapse, Flex, Modal, Typography } from "antd";
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
import { getAllNeedDataFromDB } from "../signin/api/api";
import { setMyPosts } from "../../store/slices/myPosts";
import { setFavoritePosts } from "../../store/slices/favoritePosts";
import { setPosts } from "../../store/slices/posts";

const { Title, Text } = Typography;

const ProfileModule: React.FC = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [activeCollapse, setActiveCollapse] = useState(0);

    const [errorText, setErrorText] = useState("");

    const [showCollapseItem, setShowCollapseItem] = useState<
        [boolean, boolean, boolean]
    >([true, true, true]);

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

    const nameSubmitHandler = () => {
        changeNameFromDB(user.id, data.firstName, data.lastName)
            .then((res) => {
                dispatch(
                    changeFullName({
                        lastName: res.lastName,
                        name: res.firstName,
                    })
                );
                setActiveCollapse(0);
                setShowCollapseItem([true, true, true]);
            })
            .catch((err) => setErrorText(err.code));
    };

    const emailSubmitHandler = async () => {
        updateEmailFromDB(data.email, user.id)
            .then(async (res) => {
                if (typeof res === "string") {
                    const newData = await getAllNeedDataFromDB(res);
                    dispatch(setMyPosts(newData.myPosts));
                    dispatch(setFavoritePosts(newData.favorites));
                    dispatch(setPosts(newData.allPosts));

                    dispatch(changeEmail(res));
                    setActiveCollapse(0);
                    setShowCollapseItem([true, true, true]);
                }
            })
            .catch((err) => {
                setErrorText(err.code);
            });
    };

    const passwordSubmitHandler = (password: string) => {
        updatePasswordFromDB(password)
            .then(() => {
                setActiveCollapse(0);
                setShowCollapseItem([true, true, true]);
            })
            .catch((err) => {
                setErrorText(err.code);
            });
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
            setActiveCollapse(0);
            setShowCollapseItem([true, true, true]);

            nav("/");
        });
    };

    return (
        <GrayBG>
            <Modal
                title="Error"
                open={!!errorText}
                onOk={() => setErrorText("")}
                cancelButtonProps={{ style: { visibility: "hidden" } }}
            >
                {errorText}
            </Modal>
            <Title level={3}>Настойки аккаунта</Title>

            <Flex gap={16} vertical className={scss.wrap} align="flex-start">
                <Flex justify="space-between" style={{ width: "100%" }}>
                    <Languages />

                    <Button onClick={signOutHandler}>Sign out</Button>
                </Flex>

                <Collapse
                    activeKey={activeCollapse}
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
                        activeCollapse,
                        setActiveCollapse,
                    })}
                />
            </Flex>
        </GrayBG>
    );
};

export default ProfileModule;
