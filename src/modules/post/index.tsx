import React, { useEffect, useState } from "react";
import ImagesSlider from "./components/images_slider";
import Head from "./components/head";
import Info from "./components/info";
import GeneralInfo from "./components/general__info";
import Description from "./components/description";
import MyMap from "../../components/map";
import scss from "./style.module.scss";
import Sketch from "./components/sketch";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { Post } from "../../store/slices/posts";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Modal, Typography } from "antd";

const PostModule: React.FC = () => {
    const [postData, setPostData] = useState<Post | null>(null);

    const [notFound, setNotFound] = useState(false);

    const location = useLocation();
    const nav = useNavigate();

    const posts = useSelector((state: RootState) => state.posts.posts);

    useEffect(() => {
        const locs = location.pathname.split("/");
        const postId = locs.at(-1);
        const currentPost = posts.find((post) => post.id === postId);
        if (currentPost) {
            setPostData(currentPost);
        } else {
            setNotFound(true);
        }
    }, [location, posts]);

    return (
        <div className={scss.wrap}>
            <Modal
                title="Basic Modal"
                open={notFound}
                onOk={() => nav("/posts")}
                cancelButtonProps={{ style: { visibility: "hidden" } }}
            >
                <Typography.Text>
                    Sorry but your post didnt found
                </Typography.Text>
            </Modal>
            <ImagesSlider images={postData?.photos || []} />

            <Head
                mapLink="#"
                paymentLink="#"
                date={postData?.date}
                price={postData?.price}
                title={postData?.address}
            />

            <Info
                bathroomCount={postData?.bathroomCount}
                bedroomCount={postData?.bedroomCount}
                ownership={postData?.ownership}
                property={postData?.propertyType}
            />
            <Sketch images={postData?.sketchs || []} />
            <Description text={postData?.description} />
            <GeneralInfo text={postData?.generalInfo} />
            <MyMap
                zoom={5}
                locationVariants={[]}
                cameraLocation={{ lat: 41.2044, lng: 74.7661 }}
                location={postData?.location || null}
                clickedPlace={() => console.log()}
            />
        </div>
    );
};

export default PostModule;
