import React, { useEffect, useState } from "react";
import Head from "./components/head";
import MyDropDown from "../../components/dropdown";
import MyInput from "../../components/input";
import { Flex, Typography } from "antd";
import BottomButtons from "../../components/bottom_buttons";
import scss from "./style.module.scss";
import MyMap from "../../components/map";
import { ownershipTypes, propertyTypes, regions } from "./data/data";
import MyUpload from "./components/upload";
import MyButton from "../../components/button";
import { useTranslation } from "react-i18next";
import { addPost } from "../../store/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RootState } from "../../store";
import { addMyPost } from "../../store/slices/myPosts";
import { Post } from "../../api/type";
import { getLocationVariants } from "./api/googleMap";
import { v4 as uuidv4 } from "uuid";
import { addNewPost } from "./api/api";

const CreatePostModule: React.FC = () => {
    const [formData, setFormData] = useState<Post>({
        id: "",
        region: "Любое",
        address: "",
        location: undefined,
        propertyType: "Любое",
        ownership: "Любое",
        description: "",
        generalInfo: "",
        area: 0,
        roomCount: 0,
        price: 0,
        author: "",
        bedroomCount: 0,
        bathroomCount: 0,
        date: "",
        phone: 0,
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

    const auth = useSelector((state: RootState) => state.auth);
    const myPosts = useSelector((state: RootState) => state.myPosts.posts);

    const nav = useNavigate();

    const [searchParam] = useSearchParams();

    useEffect(() => {
        if (!auth.auth) nav("/signin");
    }, [auth]);

    useEffect(() => {
        const editId = searchParam.get("edit_id");

        if (editId) {
            const find = myPosts.find((el) => el.id === editId);
            if (find) {
                setFormData(find);
            }
        } else {
            const newUserId = uuidv4();
            setFormData({ ...formData, id: newUserId, author: auth.email });
        }
    }, []);

    const onClearHadnler = () => {
        setFormData({
            id: new Date().getTime() + "",
            region: "Любое",
            address: "",
            location: undefined,
            propertyType: "Любое",
            ownership: "Любое",
            description: "",
            generalInfo: "",
            area: 0,
            roomCount: 0,
            price: 0,
            author: auth.email,
            bedroomCount: 0,
            bathroomCount: 0,
            date: "",
            phone: 0,
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

    const regionSearchHandler = async (region: string) => {
        const res = await getLocationVariants("кыргызстан " + region);

        if (res.results.length > 0) {
            setFormData({ ...formData, region });
            setCameraLocation(res.results[0].geometry.location);
        }
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

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const values = Object.values(formData);

        if (values.every((el) => el || el.lenght > 0)) {
            addNewPost(auth.id, formData).then((res) => {
                dispatch(addMyPost(res));
                dispatch(addPost(res));
                nav("/post/" + res.id);
            });
        } else {
            setErrText("Заполните все поля");
        }
    };

    return (
        <React.Fragment key={formData.id}>
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
                            defaultName={formData.region}
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
                            value={String(formData.phone)}
                            title="Введите номер телефона"
                            placeholder="Номер телефона"
                            type="number"
                            onChangeHandler={(value) =>
                                setFormData({ ...formData, phone: +value })
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
                            defaultName={formData.propertyType}
                            items={propertyTypes}
                            title={t("lang35")}
                        />
                        <MyDropDown
                            handleChange={(value) =>
                                setFormData({ ...formData, ownership: value })
                            }
                            defaultName={formData.ownership}
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
                            <MyInput
                                onChangeHandler={(value) =>
                                    setFormData({
                                        ...formData,
                                        roomCount: +value,
                                    })
                                }
                                placeholder="-"
                                value={String(formData.roomCount)}
                                type="number"
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
                            <MyInput
                                onChangeHandler={(value) =>
                                    setFormData({
                                        ...formData,
                                        bedroomCount: +value,
                                    })
                                }
                                placeholder="-"
                                value={String(formData.bedroomCount)}
                                type="number"
                                title="Кол-во спален"
                            />
                            <MyInput
                                onChangeHandler={(value) =>
                                    setFormData({
                                        ...formData,
                                        bathroomCount: +value,
                                    })
                                }
                                placeholder="-"
                                value={String(formData.bathroomCount)}
                                type="number"
                                title="Кол-во ванных комнат"
                            />
                        </Flex>
                        <MyUpload
                            postId={formData.id}
                            photos={formData.photos}
                            title="Загрузить фотки"
                            setPhotos={(arr) =>
                                setFormData({
                                    ...formData,
                                    photos: arr,
                                })
                            }
                        />
                        <MyUpload
                            postId={formData.id}
                            photos={formData.sketchs}
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
        </React.Fragment>
    );
};

export default CreatePostModule;
