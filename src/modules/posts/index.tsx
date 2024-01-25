import React, { useState } from "react";
import Head from "./components/head";
import Card from "./components/card";
import scss from "./style.module.scss";
import GrayBG from "../../components/gray_bg";

const data = [
    {
        images: [
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
        ],
        price: "4000000",
        address: "Бишкек, Парк Ататюрк, Масануева 58",
        rooms: 3,
        date: "11.12.2023",
        phone: "+996500000000",
    },
];

const PostsModule: React.FC = () => {
    const [searchData, setSearchData] = useState("");

    return (
        <>
            <Head
                inputData={searchData}
                onChange={(value) => setSearchData(value)}
                results={data.length}
            />
            <GrayBG>
                <ul className={scss.list}>
                    {data.map((el, idx) => (
                        <Card {...el} key={idx} />
                    ))}
                </ul>
            </GrayBG>
        </>
    );
};

export default PostsModule;
