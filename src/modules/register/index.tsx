import React, { useState } from "react";
import scss from "./style.module.scss";
import MyInput from "../../components/input";
import MyButton from "../../components/button";
import sofa from "./assets/image.png";

const RegisterModule = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className={scss.wrap}>
            <h2 className={scss.title}>Зарегистрируйте аккаунт</h2>

            <form
                action="#"
                className={scss.form}
                onSubmit={(e) => submitHandler(e)}
            >
                <MyInput
                    placeholder=""
                    title="Адрес электронной почты"
                    type="email"
                    onChangeHandler={(value) =>
                        setFormData({ ...formData, email: value })
                    }
                />

                <MyInput
                    placeholder=""
                    title="Пароль"
                    type="password"
                    onChangeHandler={(value) =>
                        setFormData({ ...formData, password: value })
                    }
                />

                <MyInput
                    placeholder=""
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
