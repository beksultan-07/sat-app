import React, { useState } from "react";
import Head from "./components/head";

import scss from "./style.module.scss";
import MyInput from "../../components/input";
import { Flex } from "antd";
import MyDropDown from "../../components/dropdown/index";
import FromTo from "./components/FromTo";
import BottomButtons from "../../components/bottom_buttons";
import { useTranslation } from "react-i18next";
import { propertyTypes } from "../../data/data";
import {
    convertToTimeStamp,
    getDateFromTimeStamp,
    getTruncateTime,
} from "../../halpers/time";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFilteredPosts } from "../../store/slices/filteredPosts";
import { useNavigate } from "react-router-dom";

const FilterModule: React.FC = () => {
    const [formData, setFormData] = useState({
        city: "",
        propertyType: "",
        areaFrom: 0,
        areaTo: 0,
        roomCountFrom: 0,
        roomCountTo: 0,
        priceFrom: 0,
        priceTo: 0,
        dateFrom: 0,
        dateTo: 0,
        rented: false,
    });

    const [update, setUpdate] = useState(1);

    const { t } = useTranslation();

    const posts = useSelector((state: RootState) => state.posts.posts);

    const dispatch = useDispatch();
    const nav = useNavigate();

    const onClearHadnler = () => {
        setFormData({
            city: "",
            propertyType: "",
            areaFrom: 0,
            areaTo: 0,
            roomCountFrom: 0,
            roomCountTo: 0,
            priceFrom: 0,
            priceTo: 0,
            dateFrom: 0,
            dateTo: 0,
            rented: false,
        });
        setUpdate(update + 1);
    };

    const searchHandler = () => {
        let filteredPosts = [...posts];

        if (formData.city) {
            filteredPosts = filteredPosts.filter(
                (el) => el.region === formData.city
            );
        }

        if (formData.propertyType) {
            filteredPosts = filteredPosts.filter(
                (el) => el.propertyType === formData.propertyType
            );
        }

        // filter area
        if (formData.areaFrom > 0) {
            filteredPosts = filteredPosts.filter(
                (el) => el.area > formData.areaFrom
            );
        }

        if (formData.areaTo > 0) {
            filteredPosts = filteredPosts.filter(
                (el) => el.area < formData.areaTo
            );
        }

        // filter room count
        if (formData.roomCountFrom > 0) {
            filteredPosts = filteredPosts.filter(
                (el) => el.roomCount > formData.roomCountFrom
            );
        }

        if (formData.roomCountTo > 0) {
            filteredPosts = filteredPosts.filter(
                (el) => el.roomCount < formData.roomCountTo
            );
        }

        // filter price
        if (formData.priceFrom > 0) {
            filteredPosts = filteredPosts.filter(
                (el) => el.price > formData.priceFrom
            );
        }

        if (formData.priceTo > 0) {
            filteredPosts = filteredPosts.filter(
                (el) => el.price < formData.priceTo
            );
        }

        // filter date
        if (formData.dateFrom > 0) {
            filteredPosts = filteredPosts.filter(
                (el) =>
                    getTruncateTime(el.date) >=
                    getTruncateTime(formData.dateFrom)
            );
        }

        if (formData.dateTo > 0) {
            filteredPosts = filteredPosts.filter(
                (el) =>
                    getTruncateTime(el.date) <= getTruncateTime(formData.dateTo)
            );
        }

        dispatch(setFilteredPosts(filteredPosts));
        nav("/posts");
    };

    return (
        <React.Fragment key={update}>
            <Head
                onChangeHandler={(value) =>
                    setFormData({ ...formData, city: value })
                }
            />
            <div className={scss.wrap}>
                <Flex gap={32} vertical>
                    <FromTo
                        fromValue={formData.areaFrom}
                        toValue={formData.areaTo}
                        title="Квадратура"
                        changeFromHandler={(value) =>
                            setFormData({ ...formData, areaFrom: +value })
                        }
                        changeToHandler={(value) =>
                            setFormData({ ...formData, areaTo: +value })
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

                    <Flex gap={16}>
                        <MyInput
                            value={
                                formData.dateFrom !== 0
                                    ? getDateFromTimeStamp(formData.dateFrom)
                                    : "-"
                            }
                            onChangeHandler={(value) =>
                                setFormData({
                                    ...formData,
                                    dateFrom: convertToTimeStamp(value),
                                })
                            }
                            placeholder=""
                            title={t("lang21")}
                            type="date"
                        />
                        <MyInput
                            value={
                                formData.dateTo !== 0
                                    ? getDateFromTimeStamp(formData.dateTo)
                                    : "-"
                            }
                            onChangeHandler={(value) =>
                                setFormData({
                                    ...formData,
                                    dateTo: convertToTimeStamp(value),
                                })
                            }
                            placeholder=""
                            title=""
                            type="date"
                        />
                    </Flex>
                    {/* <Checkbox
                        onChange={() =>
                            setFormData({
                                ...formData,
                                rented: !formData.rented,
                            })
                        }
                        checked={formData.rented}
                    >
                        {t("lang23")}
                    </Checkbox> */}
                </Flex>
            </div>
            <BottomButtons
                confirmText={t("lang25")}
                rejectText={t("lang24")}
                confirm={() => searchHandler()}
                reject={() => onClearHadnler()}
            />
        </React.Fragment>
    );
};

export default FilterModule;
