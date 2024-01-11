import React, { useState } from "react";
import Head from "./components/head";
import Card from "./components/card";
import scss from "./style.module.scss";
import GrayBG from "../../components/gray_bg";

const data = [
    {
        images: [
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
