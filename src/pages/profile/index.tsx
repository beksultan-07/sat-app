import React from "react";
import Header from "../../components/header/index";
import ProfileModule from "../../modules/profile";

const Profile: React.FC = () => {
    return (
        <>
            <Header />
            <ProfileModule />
        </>
    );
};

export default Profile;
