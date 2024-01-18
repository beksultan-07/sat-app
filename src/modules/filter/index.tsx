import React, { useState } from "react";
import Head from "./components/head";

import scss from "./style.module.scss";
import MyInput from "../../components/input";
import { Checkbox, Flex } from "antd";
import MyDropDown from "../../components/dropdown/index";
import { propertyTypes } from "../../components/dropdown/data";
import FromTo from "./components/FromTo";
import BottomButtons from "../../components/bottom_buttons";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation();

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
                        placeholder={t("lang17")}
                        title={t("lang16")}
                        onChangeHandler={(value) =>
                            setFormData({ ...formData, area: value })
                        }
                    />
                    <MyDropDown
                        handleChange={(value) =>
                            setFormData({ ...formData, propertyType: value })
                        }
                        defaultName={t("lang22")}
                        items={propertyTypes}
                        title={t("lang18")}
                    />
                    <FromTo
                        fromValue={formData.roomCountFrom}
                        toValue={formData.roomCountTo}
                        title={t("lang20")}
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
                        title={t("lang28")}
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
                        title={t("lang21")}
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
                        {t("lang23")}
                    </Checkbox>
                </Flex>
            </div>
            <BottomButtons
                confirmText={t("lang25")}
                rejectText={t("lang24")}
                confirm={() => searchHandler()}
                reject={() => onClearHadnler()}
            />
        </>
    );
};

export default FilterModule;
