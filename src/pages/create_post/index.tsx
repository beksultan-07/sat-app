import React from "react";
import Header from "../../components/header";
import CreatePostModule from "../../modules/create_post";

const CreatePost: React.FC = () => {
    return (
        <>
            <Header />
            <CreatePostModule />
        </>
    );
};

export default CreatePost;
