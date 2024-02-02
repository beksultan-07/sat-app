import React, { useEffect } from "react";
import Header from "../../components/header";
import GrayBG from "../../components/gray_bg";
import Card from "../../components/card";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";

const MyPosts: React.FC = () => {
    const auth = useSelector((state: RootState) => state.auth.auth);

    const myPosts = useSelector((state: RootState) => state.myPosts.posts);

    const nav = useNavigate();

    useEffect(() => {
        if (!auth) nav("/signin");
    }, []);

    return (
        <>
            <Header />

            <GrayBG>
                <Typography.Title level={3}>My favorite posts</Typography.Title>
                {myPosts.length > 0 ? (
                    <ul style={{ listStyle: "none", padding: "35px 0 20px" }}>
                        {myPosts.map((el) => (
                            <Card {...el} key={el.id} />
                        ))}
                    </ul>
                ) : (
                    <Typography.Text>No data . .</Typography.Text>
                )}
            </GrayBG>
        </>
    );
};

export default MyPosts;
