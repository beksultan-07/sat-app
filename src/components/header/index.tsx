import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import logo from "../../assets/images/logo.png";
import scss from "./style.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header: React.FC = () => {
    const [showLinks, setShowLinks] = useState(false);
    const auth = useSelector((state: RootState) => state.auth.auth);
    return (
        <>
            <header className={scss.header}>
                <Flex justify="space-between" align="center">
                    <Button
                        type="text"
                        onClick={() => setShowLinks(!showLinks)}
                    >
                        <MenuOutlined />
                    </Button>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <Link to={auth ? "/profile" : "/signin"}>
                        <Button type="text">
                            <UserOutlined />
                        </Button>
                    </Link>
                </Flex>
            </header>

            <div
                className={`${scss.wrap} ${showLinks ? scss.active : ""}`}
                onClick={() => setShowLinks(false)}
            >
                <nav
                    className={scss.header__links}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Link to="/">Главная</Link>
                    <Link to="/filter">Поиск</Link>
                    {!auth ? <Link to="/signin">Войти</Link> : null}

                    <Link to="/posts">Все посты</Link>
                    <Link to="/favorite">Мои любимые</Link>
                    <Link to="/myposts">Мои посты</Link>
                    <Link to="/post/create">Добавить пост</Link>
                    <Link to="/profile">Настройки</Link>
                </nav>
            </div>
        </>
    );
};

export default Header;
