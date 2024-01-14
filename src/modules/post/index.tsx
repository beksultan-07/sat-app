import React from "react";
import ImagesSlider from "./components/images_slider";
import Head from "./components/head";
import Info from "./components/info";
import GeneralInfo from "./components/general__info";
import Description from "./components/description";
import MyMap from "../../components/map";
import scss from "./style.module.scss";

const post = {
    photos: [
        "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJTLkSlMsmCMZB5yRmE1AqAKcLvMc-HRMB6KMt-RxK7n4Vi36jTgXGnYJklQSAIGySt0FB-S~B3UGPeuW0-pghGQtgSf1D0~0nKl8kFGSbO3oyqMhhTyx9UNWTRXUsTrq~RR3ovrYRVHfp7JfT-a5q1zg~sBQfYWtPNAiTELnweIdM70uH6fNLbTy2FFYHKX-ykIXDe-SC9Ux7TycyRNfZFyZn9ww7YvEIbuKvR-X2X6~J1S8AoR0hySQ65hzoSUWrE7~yHiNODcNy0Pgfi8HTwe5kRyZpcIEMueaUDrVr81d1hPmDU2VtcWAUqf9FEECJtrxtIXFxlUzqey3X2cNA__",
        "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJTLkSlMsmCMZB5yRmE1AqAKcLvMc-HRMB6KMt-RxK7n4Vi36jTgXGnYJklQSAIGySt0FB-S~B3UGPeuW0-pghGQtgSf1D0~0nKl8kFGSbO3oyqMhhTyx9UNWTRXUsTrq~RR3ovrYRVHfp7JfT-a5q1zg~sBQfYWtPNAiTELnweIdM70uH6fNLbTy2FFYHKX-ykIXDe-SC9Ux7TycyRNfZFyZn9ww7YvEIbuKvR-X2X6~J1S8AoR0hySQ65hzoSUWrE7~yHiNODcNy0Pgfi8HTwe5kRyZpcIEMueaUDrVr81d1hPmDU2VtcWAUqf9FEECJtrxtIXFxlUzqey3X2cNA__",
        "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJTLkSlMsmCMZB5yRmE1AqAKcLvMc-HRMB6KMt-RxK7n4Vi36jTgXGnYJklQSAIGySt0FB-S~B3UGPeuW0-pghGQtgSf1D0~0nKl8kFGSbO3oyqMhhTyx9UNWTRXUsTrq~RR3ovrYRVHfp7JfT-a5q1zg~sBQfYWtPNAiTELnweIdM70uH6fNLbTy2FFYHKX-ykIXDe-SC9Ux7TycyRNfZFyZn9ww7YvEIbuKvR-X2X6~J1S8AoR0hySQ65hzoSUWrE7~yHiNODcNy0Pgfi8HTwe5kRyZpcIEMueaUDrVr81d1hPmDU2VtcWAUqf9FEECJtrxtIXFxlUzqey3X2cNA__",
        "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QJTLkSlMsmCMZB5yRmE1AqAKcLvMc-HRMB6KMt-RxK7n4Vi36jTgXGnYJklQSAIGySt0FB-S~B3UGPeuW0-pghGQtgSf1D0~0nKl8kFGSbO3oyqMhhTyx9UNWTRXUsTrq~RR3ovrYRVHfp7JfT-a5q1zg~sBQfYWtPNAiTELnweIdM70uH6fNLbTy2FFYHKX-ykIXDe-SC9Ux7TycyRNfZFyZn9ww7YvEIbuKvR-X2X6~J1S8AoR0hySQ65hzoSUWrE7~yHiNODcNy0Pgfi8HTwe5kRyZpcIEMueaUDrVr81d1hPmDU2VtcWAUqf9FEECJtrxtIXFxlUzqey3X2cNA__",
    ],
    price: "4000000",
    address: "Бишкек, Парк Ататюрк, Масануева 58",
    rooms: 3,
    date: "11.12.2023",
    phone: "+996500000000",
    bathroomCount: 1,
    bedroomCount: 3,
    ownership: "Квартира",
    addressLocation: {
        lat: 41.2044,
        lng: 74.7661,
    },
    propertyType: "Право собственности",
    description: `
        8 кроватей \n
        8 залов для приемов \n
        9 ванных комнат \n
        `,
    generalInfo:
        "Букингемские ворота №6 — это элегантный дом с белым фасадом, внесенный в список памятников архитектуры II степени, расположенный сбоку от Букингемского дворца. Здание имеет впечатляющую ширину 10,3 метра (около 34 футов) и занимает площадь 15 845 кв. футов (1 472 кв. м), расположено на семи этажах и предлагает восемь спален (шесть основных спален плюс две для персонала). Дом был тщательно отремонтирован в 2014 году и отличается величественными пропорциями и впечатляющим объемом.",
};

const PostModule = () => {
    return (
        <div className={scss.wrap}>
            <ImagesSlider images={post.photos} />

            <Head
                mapLink="#"
                paymentLink="#"
                date={post.date}
                price={post.price}
                title={post.address}
            />

            <Info
                bathroomCount={post.bathroomCount}
                bedroomCount={post.bedroomCount}
                ownership={post.ownership}
                property={post.propertyType}
            />
            <Description text={post.description} />
            <GeneralInfo text={post.generalInfo} />
            <MyMap
                clickedPlace={(lat, lng) => console.log(lat, lng)}
                lat={post.addressLocation.lat}
                lng={post.addressLocation.lng}
            />
        </div>
    );
};

export default PostModule;
