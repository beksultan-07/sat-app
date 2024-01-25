import React from "react";
import { Button, Dropdown, type MenuProps } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import GrayBG from "../../components/gray_bg";

const ProfileModule = () => {
    const { i18n } = useTranslation();

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: "Русский",
            onClick: () => {
                i18n.changeLanguage("ru");
            },
        },
        {
            key: "2",
            label: "Кыргызча",
            onClick: () => {
                i18n.changeLanguage("kg");
            },
        },
    ];
    return (
        <GrayBG>
            <Dropdown
                menu={{ items }}
                placement="bottom"
                onOpenChange={(e) => console.log(e)}
            >
                <Button>
                    <GlobalOutlined />
                    Язык
                </Button>
            </Dropdown>
        </GrayBG>
    );
};

export default ProfileModule;
