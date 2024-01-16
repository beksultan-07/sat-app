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

interface post {
    id: number;
    city: string;
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
        )}&key=${"AIzaSyCoxB02mXlIQ3UuJy7MJpCYaDm-FqgC78E"}`
    )
        .then((res) => res.json())
        .then((res: geocodingResponse) => res);
};

const CreatePostModule: React.FC = () => {
    const [formData, setFormData] = useState<post>({
        id: new Date().getTime(),
        city: "",
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
    });
    const [locationVariants, setLocationVariants] = useState<
        google.maps.LatLngLiteral[]
    >([]);

    const onClearHadnler = () => {
        setFormData({
            ...formData,
            city: "",
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

    const bishkekLocation = { lat: 41.2044, lng: 74.7661 };

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
            address = "кыргызстан " + address;
        }

        const res = await getLocationVariants(address);

        const locations = res.results.map((el) => el.geometry.location);
        setLocationVariants(locations);
    };

    return (
        <>
            <Head />
            <div className={scss.content}>
                <Flex vertical gap={32}>
                    <MyDropDown
                        handleChange={(value) =>
                            setFormData({ ...formData, city: value })
                        }
                        defaultName="Любой"
                        items={regions}
                        title="Введите название города"
                    />
                    <MyInput
                        value={formData.address}
                        title="Адрес"
                        placeholder="Укажите адрес "
                        onChangeHandler={(value) =>
                            setFormData({ ...formData, address: value })
                        }
                    />
                    <MyButton onClick={searchAddressHandler}>Search</MyButton>
                    <MyMap
                        locationVariants={locationVariants}
                        cameraLocation={bishkekLocation}
                        location={formData.location}
                        clickedPlace={clickMapHandler}
                    />
                    <MyDropDown
                        handleChange={(value) =>
                            setFormData({ ...formData, propertyType: value })
                        }
                        defaultName="Любое"
                        items={propertyTypes}
                        title="Тип недвижимостиа"
                    />
                    <MyDropDown
                        handleChange={(value) =>
                            setFormData({ ...formData, ownership: value })
                        }
                        defaultName="Владение"
                        items={ownershipTypes}
                        title="Право собственности"
                    />
                    <MyInput
                        title="Описание"
                        placeholder="Опишите недвижимость"
                        value={formData.description}
                        onChangeHandler={(value) =>
                            setFormData({ ...formData, description: value })
                        }
                    />
                    <MyInput
                        title="Общая информация о недвижимости"
                        placeholder="Добавьте общую информацию"
                        value={formData.generalInfo}
                        onChangeHandler={(value) =>
                            setFormData({ ...formData, generalInfo: value })
                        }
                    />
                    <MyInput
                        title="Квадратура"
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
                            title="Кол-во комнат"
                        />
                        <MyInput
                            value={String(formData.price)}
                            type="number"
                            title="Цена"
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
                            title="Кол-во спален"
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
                            title="Кол-во ванных комнат"
                        />
                    </Flex>

                    <MyUpload
                        setPhotos={(arr) =>
                            setFormData({
                                ...formData,
                                photos: arr,
                            })
                        }
                    />
                </Flex>
            </div>
            <BottomButtons
                confirmText="Сохранить"
                rejectText="Очистить"
                confirm={() => console.log(formData)}
                reject={() => onClearHadnler()}
            />
        </>
    );
};

export default CreatePostModule;
