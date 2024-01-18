import React, { useState } from "react";
import scss from "./style.module.scss";
import MyInput from "../../components/input";
import MyButton from "../../components/button";
import sofa from "./assets/image.png";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title } = Typography;
const RegisterModule = () => {
    const [errorText, setErrorText] = useState("");

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const values = Object.values(formData);
        if (values.every((el) => el)) {
            console.log(formData);
        } else {
            setErrorText("Заполните все поля");
        }
    };

    return (
        <div className={scss.wrap}>
            <h2 className={scss.title}>{t("lang9")}</h2>

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

                <MyInput
                    placeholder=""
                    value={formData.confirmPassword}
                    title="Подтвердитe пароль"
                    type="password"
                    onChangeHandler={(value) =>
                        setFormData({ ...formData, confirmPassword: value })
                    }
                />

                <MyButton>Продолжить</MyButton>
            </form>

            <div className={scss.image__wrap}>
                <img src={sofa} alt="" className={scss.image} />
            </div>
        </div>
    );
};

export default RegisterModule;
