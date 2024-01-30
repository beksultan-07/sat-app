import React, { useEffect, useState } from "react";
import scss from "./style.module.scss";
import { Button, Flex } from "antd";
import { HeartFilled, HeartOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Post } from "../../store/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
    addFavoritePost,
    deleteFavoritePost,
} from "../../store/slices/favoritePosts";

const RenderImage = ({ images }: { images: string[] }) => {
    if (images.length > 2) {
        const threeImages = images.slice(1, 4);

        return threeImages.map((link, idx) => (
            <div key={idx} className={scss.image}>
                <img src={link} alt="" />
            </div>
        ));
    }
};

const normalizePrice = (price: number) => {
    return price
        .toString()
        .split("")
        .reverse()
        .map((el, idx) => (idx !== 0 && idx % 3 === 0 ? el + "," : el))
        .reverse()
        .join("");
};

const Card: React.FC<Post> = (props) => {
    const [isSaved, setIsSaved] = useState(false);

    const nav = useNavigate();

    const favorite = useSelector((state: RootState) => state.favorite.posts);
    const auth = useSelector((state: RootState) => state.auth.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        const currentPost = favorite.find((post) => post.id === props.id);
        if (currentPost) setIsSaved(true);
    }, []);

    const onClickHeart = () => {
        if (auth) {
            if (isSaved) {
                dispatch(deleteFavoritePost(props.id));
                setIsSaved(false);
            } else {
                dispatch(addFavoritePost(props));
                setIsSaved(true);
            }
        } else {
            nav("/signin");
        }
    };

    const { t } = useTranslation();
    return (
        <li className={scss.item}>
            <div className={scss.big__image}>
                <img src={props.photos[0]} alt="" />
            </div>
            <Flex gap={5} className={scss.images}>
                <RenderImage images={props.photos} />
            </Flex>
            <Flex className={scss.price__and__link} justify="space-between">
                <Flex
                    vertical
                    gap={8}
                    align="flex-start"
                    className={scss.price}
                >
                    <span className={scss.price__number}>
                        {normalizePrice(props.price)}
                    </span>
                    <span className={scss.price__text}>сом</span>
                </Flex>
                <Link to={"/post/" + props.id} className={scss.btn}>
                    {t("lang29")}
                </Link>
            </Flex>
            <Flex gap={7} vertical align="flex-start" className={scss.info}>
                <span className={scss.state}>{props.address}</span>
                <span className={scss.state}>
                    {props.roomCount} {t("lang20")}
                </span>

                <span className={scss.new}>новый</span>

                <span className={scss.date}>
                    {t("lang30")} {props.date}
                </span>
                <Flex justify="space-between" className={scss.bottom}>
                    <a href={"tel:" + props.phone}>
                        <Button className={scss.bottom__btn}>
                            <Flex align="center" gap={8}>
                                <PhoneOutlined />
                                {t("lang31")}
                            </Flex>
                        </Button>
                    </a>
                    <Button className={scss.bottom__btn} onClick={onClickHeart}>
                        <Flex align="center" gap={8}>
                            {isSaved ? <HeartFilled /> : <HeartOutlined />}
                            {t("lang32")}
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </li>
    );
};

export default Card;
