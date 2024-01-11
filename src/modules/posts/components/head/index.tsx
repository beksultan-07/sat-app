import React from "react";
import scss from "./style.module.scss";
import { Button, Dropdown, Flex, Input } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

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
}
const Head: React.FC<Props> = ({ inputData, onChange, results }) => {
    return (
        <div className={scss.wrap}>
            <Flex className={scss.top}>
                <Input
                    onChange={(e) => onChange(e.target.value)}
                    value={inputData}
                    size="large"
                    placeholder="Бишкек"
                />
                <Button type="text" size="large" className={scss.btn}>
                    Фильтры
                </Button>
            </Flex>
            <Flex align="center" justify="flex-start" className={scss.bottom}>
                <h4 className={scss.bottom__title}>{results} Результатов</h4>
                <Dropdown menu={{ items }} placement="bottom">
                    <Button type="text">
                        Новые
                        <CaretDownOutlined />
                    </Button>
                </Dropdown>
            </Flex>
        </div>
    );
};

export default Head;
