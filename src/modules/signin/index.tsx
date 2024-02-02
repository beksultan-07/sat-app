import React, { useState } from "react";
import scss from "./style.module.scss";
import MyInput from "../../components/input";
import MyButton from "../../components/button";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/slices/auth";
import { Link, useNavigate } from "react-router-dom";
import { AllData, signin } from "./api/api";
import { setPosts } from "../../store/slices/posts";
import { setMyPosts } from "../../store/slices/myPosts";
import { setFavoritePosts } from "../../store/slices/favoritePosts";

const { Title } = Typography;

const SignInModule: React.FC = () => {
    const [errorText, setErrorText] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const nav = useNavigate();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const values = Object.values(formData);
        if (values.every((el) => el)) {
            signin(formData.email, formData.password)
                .then((res: AllData) => {
                    dispatch(setAuth(res.user));
                    dispatch(setMyPosts(res.myPosts));
                    dispatch(setFavoritePosts(res.favorites));

                    nav("/");
                })
                .catch((err) => {
                    setErrorText(JSON.stringify(err.code));
                });
        } else {
            setErrorText("Заполните все поля");
        }
    };

    return (
        <div className={scss.wrap}>
            <h2 className={scss.title}>Войти в аккаунт</h2>
            <form
                action="#"
                className={scss.form}
                onSubmit={(e) => submitHandler(e)}
            >
                {errorText ? (
                    <Title level={5} type="danger">
                        {errorText}
                    </Title>
                ) : null}
                <MyInput
                    value={formData.email}
                    placeholder=""
                    title={t("lang10")}
                    type="email"
                    onChangeHandler={(value) =>
                        setFormData({ ...formData, email: value })
                    }
                />

                <MyInput
                    value={formData.password}
                    placeholder=""
                    title={t("lang11")}
                    type="password"
                    onChangeHandler={(value) =>
                        setFormData({ ...formData, password: value })
                    }
                />

                <MyButton>Продолжить</MyButton>
            </form>

            <Typography.Text className={scss.link}>
                Еще не зарегистрировались?
                <Link to="/register"> Зарегистрироваться</Link>
            </Typography.Text>
        </div>
    );
};

export default SignInModule;
