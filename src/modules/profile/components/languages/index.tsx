import React from "react";
import { Button, Dropdown, type MenuProps } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const items: MenuProps["items"] = [
    {
        key: "1",
        label: "Русский",
        onClick: () => {
            useTranslation().i18n.changeLanguage("ru");
        },
    },
    {
        key: "2",
        label: "Кыргызча",
        onClick: () => {
            useTranslation().i18n.changeLanguage("kg");
        },
    },
];
const Languages: React.FC = () => {
    return (
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
    );
};

export default Languages;
