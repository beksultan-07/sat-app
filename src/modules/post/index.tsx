import React, { useEffect, useState } from "react";
import ImagesSlider from "./components/images_slider";
import Head from "./components/head";
import Info from "./components/info";
import GeneralInfo from "./components/general__info";
import Description from "./components/description";
import MyMap from "../../components/map";
import scss from "./style.module.scss";
import Sketch from "./components/sketch";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Button, Flex, Modal, Typography } from "antd";
import { EditFilled } from "@ant-design/icons";
import { Post } from "../../api/type";
import { getDateFromTimeStamp } from "../../halpers/time";
import { deletePostFromDB } from "./api/index";
import { deleteMyPost } from "../../store/slices/myPosts";
import { deleteFavoritePost } from "../../store/slices/favoritePosts";
import { deletePost } from "../../store/slices/posts";

const PostModule: React.FC = () => {
    const [postData, setPostData] = useState<Post | null>(null);
    const [myPost, setMyPost] = useState<boolean>(false);
    const [showModalToConfirm, setShowModalToConfirm] = useState(false);

    const [notFound, setNotFound] = useState(false);

    const location = useLocation();
    const nav = useNavigate();

    const posts = useSelector((state: RootState) => state.posts.posts);

    const user = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const locs = location.pathname.split("/");
        const postId = locs.at(-1);
        const currentPost = posts.find((post) => post.id === postId);
        const ownPost = posts.find((post) => post.author === user.email);

        if (ownPost) setMyPost(true);

        if (currentPost) {
            setPostData(currentPost);
        } else {
            setNotFound(true);
        }
    }, [location, posts]);

    const deletePostHadnler = () => {
        if (postData) {
            deletePostFromDB(user.id, postData.id).then((postId) => {
                dispatch(deleteMyPost(postId));
                dispatch(deleteFavoritePost(postId));
                dispatch(deletePost(postId));
                nav("/posts");
            });
        }
    };

    return (
        <div className={scss.wrap}>
            <Modal
                open={showModalToConfirm}
                onOk={deletePostHadnler}
                onCancel={() => setShowModalToConfirm(false)}
                okButtonProps={{ danger: true }}
            >
                <Typography.Text>Are you sure?</Typography.Text>
            </Modal>
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
                date={
                    postData ? getDateFromTimeStamp(postData.date) : undefined
                }
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

            {myPost ? (
                <Flex gap={10} align="center" style={{ margin: "40px 0 0" }}>
                    <Button
                        danger
                        type="primary"
                        size="large"
                        className={scss.btn}
                        onClick={() => setShowModalToConfirm(true)}
                    >
                        delete
                    </Button>
                    <Button
                        type="primary"
                        size="large"
                        className={scss.btn}
                        onClick={() =>
                            nav("/post/create?edit_id=" + postData?.id)
                        }
                    >
                        <EditFilled />
                        Edit
                    </Button>
                </Flex>
            ) : null}
        </div>
    );
};

export default PostModule;
