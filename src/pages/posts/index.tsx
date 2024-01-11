import React from "react";
import Header from "../../components/header";
import PostsModule from "../../modules/posts";

const Posts: React.FC = () => {
    return (
        <>
            <Header />
            <PostsModule />
        </>
    );
};

export default Posts;
