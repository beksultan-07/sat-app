import React from "react";
import scss from "./style.module.scss";
import { Button, Dropdown, Flex, Input } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const getItems = (sortPosts: (sotrType: string) => void) => [
    {
        key: "1",
        label: <React.Fragment>Новее</React.Fragment>,
        onClick: () => {
            sortPosts("Новее");
        },
    },
    {
        key: "2",
        label: <React.Fragment>Дешевле</React.Fragment>,
        onClick: () => {
            sortPosts("Дешевле");
        },
    },
    {
        key: "3",
        label: <React.Fragment>Дороже</React.Fragment>,
        onClick: () => {
            sortPosts("Дороже");
        },
    },
];

interface Props {
    inputData: string;
    onChange: (value: string) => void;
    results: number | string;
    onClickBtn: () => void;
    sortedBy: string;
    sortPosts: (sotrType: string) => void;
}
const Head: React.FC<Props> = ({
    inputData,
    onChange,
    results,
    onClickBtn,
    sortedBy,
    sortPosts,
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
                <Dropdown
                    menu={{ items: getItems(sortPosts) }}
                    placement="bottom"
                >
                    <Button type="text">
                        {sortedBy}
                        <CaretDownOutlined />
                    </Button>
                </Dropdown>
            </Flex>
        </div>
    );
};

export default Head;
