import React, { useState } from "react";
import Head from "./components/head";

import scss from "./style.module.scss";
import MyInput from "../../components/input";
import { Checkbox, Flex } from "antd";
import MyDropDown from "../../components/dropdown/index";
import { propertyTypes } from "../../components/dropdown/data";
import FromTo from "./components/FromTo";
import BottomButtons from "../../components/bottom_buttons";

const FilterModule: React.FC = () => {
    const [formData, setFormData] = useState({
        city: "",
        propertyType: "",
        ownership: "",
        area: "",
        roomCountFrom: 0,
        roomCountTo: 0,
        priceFrom: 0,
        priceTo: 0,
        date: "",
        rented: false,
    });

    const onClearHadnler = () => {
        setFormData({
            city: "",
            propertyType: "",
            ownership: "",
            area: "",
            roomCountFrom: 0,
            roomCountTo: 0,
            priceFrom: 0,
            priceTo: 0,
            date: "",
            rented: false,
        });
    };

    const searchHandler = () => {
        console.log(formData);
    };

    return (
        <>
            <Head
                onChangeHandler={(value) =>
                    setFormData({ ...formData, city: value })
                }
            />
            <div className={scss.wrap}>
                <Flex gap={32} vertical>
                    <MyInput
                        value={formData.area}
                        type="number"
                        placeholder="Укажите квадратуру в метрах"
                        title="Квадратура"
                        onChangeHandler={(value) =>
                            setFormData({ ...formData, area: value })
                        }
                    />
                    <MyDropDown
                        handleChange={(value) =>
                            setFormData({ ...formData, propertyType: value })
                        }
                        defaultName="Любоe"
                        items={propertyTypes}
                        title="Тип недвижимости"
                    />
                    <FromTo
                        fromValue={formData.roomCountFrom}
                        toValue={formData.roomCountTo}
                        title="Комнаты"
                        changeFromHandler={(value) =>
                            setFormData({ ...formData, roomCountFrom: +value })
                        }
                        changeToHandler={(value) =>
                            setFormData({ ...formData, roomCountTo: +value })
                        }
                    />
                    <FromTo
                        fromValue={formData.priceFrom}
                        toValue={formData.priceTo}
                        title="Цена"
                        changeFromHandler={(value) =>
                            setFormData({ ...formData, priceFrom: +value })
                        }
                        changeToHandler={(value) =>
                            setFormData({ ...formData, priceTo: +value })
                        }
                    />

                    <MyInput
                        value={formData.date}
                        onChangeHandler={(value) =>
                            setFormData({
                                ...formData,
                                date: value,
                            })
                        }
                        placeholder=""
                        title="По дате добавления"
                        type="date"
                    />
                    <Checkbox
                        onChange={() =>
                            setFormData({
                                ...formData,
                                rented: !formData.rented,
                            })
                        }
                        checked={formData.rented}
                    >
                        Включая арендованные жилье
                    </Checkbox>
                </Flex>
            </div>
            <BottomButtons
                confirmText="Найти жилье"
                rejectText="Очистить"
                confirm={() => searchHandler()}
                reject={() => onClearHadnler()}
            />
        </>
    );
};

export default FilterModule;
