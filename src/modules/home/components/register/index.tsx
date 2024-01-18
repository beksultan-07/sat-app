import React from "react";
import scss from "./style.module.scss";
import { Flex } from "antd";
import search from "../../assets/search.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register: React.FC = () => {
    const nav = useNavigate();
    const { t } = useTranslation();
    return (
        <div className={scss.wrap}>
            <Flex gap={20} align="center">
                <img src={search} alt="" />
                <button className={scss.btn} onClick={() => nav("/register")}>
                    {t("lang5")}
                </button>
            </Flex>
        </div>
    );
};

export default Register;
