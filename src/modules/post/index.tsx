import React from "react";
import ImagesSlider from "./components/images_slider";
import Head from "./components/head";
import Info from "./components/info";
import GeneralInfo from "./components/general__info";
import Description from "./components/description";
import MyMap from "../../components/map";
import scss from "./style.module.scss";
import Sketch from "./components/sketch";

const post = {
    photos: [
        "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
        "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
        "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
        "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
    ],
    sketch: [
        "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
        "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
        "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
        "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
        "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
        "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
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

const PostModule: React.FC = () => {
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
            <Sketch images={post.sketch} />
            <Description text={post.description} />
            <GeneralInfo text={post.generalInfo} />
            <MyMap
                locationVariants={[]}
                cameraLocation={{ lat: 41.2044, lng: 74.7661 }}
                location={{
                    lat: 42.85570724725795,
                    lng: 74.58515167236328,
                }}
                clickedPlace={() => console.log()}
            />
        </div>
    );
};

export default PostModule;
