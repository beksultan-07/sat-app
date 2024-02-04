import React, { useEffect, useState } from "react";
import Head from "./components/head";
import Card from "../../components/card";
import scss from "./style.module.scss";
import GrayBG from "../../components/gray_bg";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { Post } from "../../api/type";

const PostsModule: React.FC = () => {
    const [searchData, setSearchData] = useState("");
    const [postsState, setPostsState] = useState<Post[]>([]);

    const [sortBy, setSortBy] = useState("Новее");

    const allPosts = useSelector((state: RootState) => state.posts.posts);

    const nav = useNavigate();

    useEffect(() => {
        setPostsState(allPosts);
    }, [allPosts]);

    const onClickSearchHandler = (value: string) => {
        const info = value.trim().toLowerCase();
        setSearchData(value);

        const foundPosts = allPosts.filter((post) =>
            post.address.toLowerCase().includes(info)
        );

        if (foundPosts.length > 0) {
            setPostsState(foundPosts);
        } else {
            setPostsState([]);
        }
    };

    const sortPosts = (sotrType: string) => {
        console.log(sotrType);

        if (sotrType === "Новее") {
            const sorted = postsState.sort();
            setPostsState(sorted);
            console.log(sorted);
        }
        if (sotrType === "Дешевле") {
            const sorted = postsState.sort((a, b) => a.price - b.price);
            setPostsState(sorted);
        }
        if (sotrType === "Дороже") {
            const sorted = postsState.sort((a, b) => b.price - a.price);
            setPostsState(sorted);
        }
        setSortBy(sotrType);
    };

    return (
        <>
            <Head
                inputData={searchData}
                onChange={(value) => onClickSearchHandler(value)}
                results={postsState.length}
                onClickBtn={() => nav("/filter")}
                sortPosts={sortPosts}
                sortedBy={sortBy}
            />

            <GrayBG>
                {postsState.length > 0 ? (
                    <ul className={scss.list}>
                        {postsState.map((el) => (
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

export default PostsModule;
