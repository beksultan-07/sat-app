import React, { useState } from "react";
import scss from "./style.module.scss";
import MyInput from "../../components/input";
import MyButton from "../../components/button";

const SignInModule: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className={scss.wrap}>
            <h2 className={scss.title}>Войти в аккаунт</h2>

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

                <MyButton>Продолжить</MyButton>
            </form>
        </div>
    );
};

export default SignInModule;
