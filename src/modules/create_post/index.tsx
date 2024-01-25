import React, { useState } from "react";
import Head from "./components/head";
import MyDropDown from "../../components/dropdown";
import MyInput from "../../components/input";
import { Flex } from "antd";
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

interface post {
    id: number;
    region: string;
    address: string;
    location: {
        lng: number;
        lat: number;
    } | null;
    propertyType: string;
    ownership: string;
    description: string;
    generalInfo: string;
    area: number;
    roomCount: number;
    price: number;
    bedroomCount: number;
    bathroomCount: number;
    photos: string[];
    sketch: string[];
}

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
    const [formData, setFormData] = useState<post>({
        id: new Date().getTime(),
        region: "",
        address: "",
        location: null,
        propertyType: "",
        ownership: "",
        description: "",
        generalInfo: "",
        area: 0,
        roomCount: 0,
        price: 0,
        bedroomCount: 0,
        bathroomCount: 0,
        photos: [],
        sketch: [],
    });
    const [locationVariants, setLocationVariants] = useState<
        google.maps.LatLngLiteral[]
    >([]);

    const [cameraLocation, setCameraLocation] = useState({
        lat: 41.2044,
        lng: 74.7661,
    });

    const { t } = useTranslation();

    const onClearHadnler = () => {
        setFormData({
            ...formData,
            region: "",
            location: null,
            address: "",
            propertyType: "",
            ownership: "",
            description: "",
            generalInfo: "",
            area: 0,
            roomCount: 0,
            price: 0,
            bedroomCount: 0,
            bathroomCount: 0,
            photos: [],
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
            setCameraLocation(res.results[0].geometry.location);
        }
    };

    return (
        <>
            <Head />
            <div className={scss.content}>
                <Flex vertical gap={32}>
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
                    <MyButton onClick={searchAddressHandler}>Search</MyButton>
                    <MyMap
                        locationVariants={locationVariants}
                        cameraLocation={cameraLocation}
                        location={formData.location}
                        clickedPlace={clickMapHandler}
                    />
                    <MyDropDown
                        handleChange={(value) =>
                            setFormData({ ...formData, propertyType: value })
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
                                setFormData({ ...formData, roomCount: +value })
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
                                setFormData({ ...formData, price: +value })
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
                                sketch: arr,
                            })
                        }
                    />
                </Flex>
            </div>
            <BottomButtons
                confirmText={t("lang32")}
                rejectText={t("lang24")}
                confirm={() => console.log(formData)}
                reject={() => onClearHadnler()}
            />
        </>
    );
};

export default CreatePostModule;
