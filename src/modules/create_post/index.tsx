import React, { useEffect, useState } from "react";
import Head from "./components/head";
import MyDropDown from "../../components/dropdown";
import MyInput from "../../components/input";
import { Flex, Typography } from "antd";
import BottomButtons from "../../components/bottom_buttons";

import scss from "./style.module.scss";
import MyMap from "../../components/map";
import {
    bathroomCountOptions,
    bedroomCountOptions,
    ownershipTypes,
    propertyTypes,
    regions,
    roomCountOptions,
} from "./data/data";
import MyUpload from "./components/upload";
import MyButton from "../../components/button";
import { useTranslation } from "react-i18next";
import { Post, addPost } from "../../store/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { addMyPost } from "../../store/slices/myPosts";

interface geocodingResponse {
    results: {
        geometry: {
            location: google.maps.LatLngLiteral;
        };
    }[];
}

const getLocationVariants = (address: string) => {
    return fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
        )}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
    )
        .then((res) => res.json())
        .then((res: geocodingResponse) => res);
};

const CreatePostModule: React.FC = () => {
    const [formData, setFormData] = useState<Post>({
        id: new Date().getTime() + "",
        region: "",
        address: "",
        location: undefined,
        propertyType: "",
        ownership: "",
        description: "",
        generalInfo: "",
        area: 0,
        roomCount: 0,
        price: "",
        bedroomCount: 0,
        bathroomCount: 0,
        date: "",
        phone: "",
        photos: [],
        sketchs: [],
    });
    const [locationVariants, setLocationVariants] = useState<
        google.maps.LatLngLiteral[]
    >([]);

    const [cameraLocation, setCameraLocation] = useState({
        lat: 41.2044,
        lng: 74.7661,
    });

    const [errText, setErrText] = useState("");

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const auth = useSelector((state: RootState) => state.auth.auth);

    const nav = useNavigate();

    // useEffect(() => {
    //     if (!auth) nav("/signin");
    // }, [auth]);

    const onClearHadnler = () => {
        setFormData({
            ...formData,
            region: "",
            address: "",
            location: undefined,
            propertyType: "",
            ownership: "",
            description: "",
            generalInfo: "",
            area: 0,
            roomCount: 0,
            price: "",
            bedroomCount: 0,
            bathroomCount: 0,
            date: "",
            phone: "",
            photos: [],
            sketchs: [],
        });
    };

    const clickMapHandler = (
        location: google.maps.LatLngLiteral,
        address: string
    ) => {
        setLocationVariants([]);

        setFormData({ ...formData, location, address });
    };

    const searchAddressHandler = async () => {
        let address = formData.address.toLowerCase();

        if (!address.split(" ").includes("кыргызстан")) {
            address = "кыргызстан " + formData.region + address;
        }

        const res = await getLocationVariants(address);

        const locations = res.results.map((el) => el.geometry.location);
        setLocationVariants(locations);
    };

    const regionSearchHandler = async (region: string) => {
        const res = await getLocationVariants("кыргызстан " + region);

        if (res.results.length > 0) {
            setFormData({ ...formData, region });
            setCameraLocation(res.results[0].geometry.location);
        }
    };

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (Object.values(formData).every((el) => el || el.length > 0)) {
            dispatch(addMyPost(formData));
            dispatch(addPost(formData));
            nav("/post/" + formData.id);
        } else {
            setErrText("Заполните все поля");
        }
    };

    return (
        <>
            <Head />
            <form onSubmit={onSubmitHandler}>
                <div className={scss.content}>
                    <Flex vertical gap={32}>
                        {errText ? (
                            <Typography.Title level={3} type="danger">
                                {errText}
                            </Typography.Title>
                        ) : null}
                        <MyDropDown
                            handleChange={(value) => regionSearchHandler(value)}
                            defaultName={t("lang22")}
                            items={regions}
                            title={t("lang33")}
                        />
                        <MyInput
                            value={formData.address}
                            title={t("lang34")}
                            placeholder="Укажите адрес"
                            onChangeHandler={(value) =>
                                setFormData({ ...formData, address: value })
                            }
                        />
                        <MyButton onClick={searchAddressHandler}>
                            Search
                        </MyButton>
                        <MyMap
                            locationVariants={locationVariants}
                            cameraLocation={cameraLocation}
                            location={
                                formData.location ? formData.location : null
                            }
                            clickedPlace={clickMapHandler}
                            zoom={8}
                        />
                        <MyInput
                            value={formData.phone}
                            title="Введите номер телефона"
                            placeholder="Номер телефона"
                            type="number"
                            onChangeHandler={(value) =>
                                setFormData({ ...formData, phone: value })
                            }
                        />
                        <MyInput
                            value={formData.date}
                            title="Укажите дату"
                            type="date"
                            placeholder=""
                            onChangeHandler={(value) =>
                                setFormData({ ...formData, date: value })
                            }
                        />
                        <MyDropDown
                            handleChange={(value) =>
                                setFormData({
                                    ...formData,
                                    propertyType: value,
                                })
                            }
                            defaultName={t("lang19")}
                            items={propertyTypes}
                            title={t("lang35")}
                        />
                        <MyDropDown
                            handleChange={(value) =>
                                setFormData({ ...formData, ownership: value })
                            }
                            defaultName={t("lang36")}
                            items={ownershipTypes}
                            title="Право собственности"
                        />
                        <MyInput
                            title={t("lang37")}
                            placeholder="Опишите недвижимость"
                            value={formData.description}
                            onChangeHandler={(value) =>
                                setFormData({ ...formData, description: value })
                            }
                        />
                        <MyInput
                            title={t("lang38")}
                            placeholder="Добавьте общую информацию"
                            value={formData.generalInfo}
                            onChangeHandler={(value) =>
                                setFormData({ ...formData, generalInfo: value })
                            }
                        />
                        <MyInput
                            title={t("lang16")}
                            type="number"
                            placeholder="Укажите квадратуру в метрах"
                            value={String(formData.area)}
                            onChangeHandler={(value) =>
                                setFormData({ ...formData, area: +value })
                            }
                        />
                        <Flex gap={16} justify="space-between">
                            <MyDropDown
                                handleChange={(value) =>
                                    setFormData({
                                        ...formData,
                                        roomCount: +value,
                                    })
                                }
                                defaultName="-"
                                items={roomCountOptions}
                                title={t("lang39")}
                            />
                            <MyInput
                                value={String(formData.price)}
                                type="number"
                                title={t("lang28")}
                                placeholder="-"
                                onChangeHandler={(value) =>
                                    setFormData({ ...formData, price: value })
                                }
                            />
                        </Flex>
                        <Flex gap={16} justify="space-between">
                            <MyDropDown
                                handleChange={(value) =>
                                    setFormData({
                                        ...formData,
                                        bedroomCount: +value,
                                    })
                                }
                                defaultName="-"
                                items={bedroomCountOptions}
                                title={t("lang39")}
                            />
                            <MyDropDown
                                handleChange={(value) =>
                                    setFormData({
                                        ...formData,
                                        bathroomCount: +value,
                                    })
                                }
                                defaultName="-"
                                items={bathroomCountOptions}
                                title={t("lang40")}
                            />
                        </Flex>
                        <MyUpload
                            title="Загрузить фотки"
                            setPhotos={(arr) =>
                                setFormData({
                                    ...formData,
                                    photos: arr,
                                })
                            }
                        />
                        <MyUpload
                            title="Загрузить чертеж"
                            setPhotos={(arr) =>
                                setFormData({
                                    ...formData,
                                    sketchs: arr,
                                })
                            }
                        />
                    </Flex>
                </div>
                <BottomButtons
                    confirmText={t("lang32")}
                    rejectText={t("lang24")}
                    confirm={() => {}}
                    reject={() => onClearHadnler()}
                />
            </form>
        </>
    );
};

export default CreatePostModule;
