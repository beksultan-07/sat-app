import React from "react";
import { Flex, Image } from "antd";
import scss from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
    images: string[];
}
const SwitcherByImagesCount = ({ images }: Props) => {
    if (images.length > 3) {
        return (
            <Swiper slidesPerView={3} spaceBetween={8}>
                {images.slice(2).map((el, index) => (
                    <SwiperSlide key={index}>
                        <Image src={el} className={scss.image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    } else {
        return (
            <Flex gap={8}>
                {images.slice(2).map((el, index) => (
                    <Image
                        key={index}
                        height={60}
                        src={el}
                        className={scss.image}
                        alt=""
                    />
                ))}
            </Flex>
        );
    }
};
const Sketch: React.FC<Props> = ({ images }) => {
    return (
        <>
            <Flex vertical gap={8} className="sketch">
                <Flex gap={12}>
                    {images.slice(0, 2).map((el, index) => (
                        <Image
                            key={index}
                            // height="120px"
                            width="100%"
                            src={el}
                            className={scss.image}
                            alt=""
                        />
                    ))}
                </Flex>
                <SwitcherByImagesCount images={images} />
            </Flex>
        </>
    );
};

export default Sketch;
