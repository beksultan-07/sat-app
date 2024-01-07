import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import logo from "../../assets/images/logo.png";
import scss from "./style.module.scss";

const Header: React.FC = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <header className={scss.header}>
                <Flex justify="space-between" align="center">
                    <Button type="text" onClick={() => setShowNav(!showNav)}>
                        <MenuOutlined />
                    </Button>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <Link to="/profile">
                        <Button type="text">
                            <UserOutlined />
                        </Button>
                    </Link>
                </Flex>
            </header>

            <div
                className={`${scss.wrap} ${showNav ? scss.active : ""}`}
                onClick={() => setShowNav(false)}
            >
                <nav
                    className={scss.header__links}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Link to="/">Главная</Link>
                    <Link to="/filter">Поиск</Link>
                    <Link to="/signin">Войти</Link>
                    <Link to="/posts">Продукт</Link>
                    <Link to="/post/create">Добавить продукт</Link>
                    <Link to="/profile">Настройки</Link>
                </nav>
            </div>
        </>
    );
};

export default Header;
