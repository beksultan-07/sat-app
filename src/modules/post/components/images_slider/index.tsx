import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import scss from "./style.module.scss";

import "swiper/css";
import { Button, Image } from "antd";
import { CameraOutlined } from "@ant-design/icons";

interface Props {
    images: string[];
}

const ImagesSlider: React.FC<Props> = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(1);

    return (
        <div className={scss.wrap}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={(swiper) =>
                    setCurrentImage(swiper.realIndex + 1)
                }
            >
                {images.map((el, idx) => (
                    <SwiperSlide key={idx}>
                        <Image
                            height={240}
                            width="100%"
                            src={el}
                            className={scss.image}
                        />
                    </SwiperSlide>
                ))}
                <Button type="primary" shape="round" className={scss.btn}>
                    <CameraOutlined />
                    {currentImage}/{images.length}
                </Button>
            </Swiper>
        </div>
    );
};

export default ImagesSlider;
