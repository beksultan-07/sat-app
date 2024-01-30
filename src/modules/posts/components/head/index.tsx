import React from "react";
import scss from "./style.module.scss";
import { Button, Dropdown, Flex, Input } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const items = [
    {
        key: "1",
        label: <a href="#">1st menu item</a>,
    },
    {
        key: "2",
        label: <a href="#">2nd menu item</a>,
    },
    {
        key: "3",
        label: <a href="#">3rd menu item</a>,
    },
];

interface Props {
    inputData: string;
    onChange: (value: string) => void;
    results: number | string;
    onClickBtn: () => void;
}
const Head: React.FC<Props> = ({
    inputData,
    onChange,
    results,
    onClickBtn,
}) => {
    const { t } = useTranslation();
    return (
        <div className={scss.wrap}>
            <Flex className={scss.top}>
                <Input
                    onChange={(e) => onChange(e.target.value)}
                    value={inputData}
                    size="large"
                    placeholder="Бишкек"
                />
                <Button
                    type="text"
                    size="large"
                    className={scss.btn}
                    onClick={onClickBtn}
                >
                    Фильтры
                </Button>
            </Flex>
            <Flex align="center" justify="flex-start" className={scss.bottom}>
                <h4 className={scss.bottom__title}>
                    {results} {t("lang26")}
                </h4>
                <Dropdown menu={{ items }} placement="bottom">
                    <Button type="text">
                        {t("lang27")}
                        <CaretDownOutlined />
                    </Button>
                </Dropdown>
            </Flex>
        </div>
    );
};

export default Head;
