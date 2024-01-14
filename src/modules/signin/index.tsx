import React, { useState } from "react";
import scss from "./style.module.scss";
import MyInput from "../../components/input";
import MyButton from "../../components/button";
import { Typography } from "antd";

const { Title } = Typography;

const SignInModule: React.FC = () => {
    const [errorText, setErrorText] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
                    title="Адрес электронной почты"
                    type="email"
                    onChangeHandler={(value) =>
                        setFormData({ ...formData, email: value })
                    }
                />

                <MyInput
                    value={formData.password}
                    placeholder=""
                    title="Пароль"
                    type="password"
                    onChangeHandler={(value) =>
                        setFormData({ ...formData, password: value })
                    }
                />

                <MyButton>Продолжить</MyButton>
            </form>
        </div>
    );
};

export default SignInModule;
