import React, { useEffect, useState } from "react";
import Head from "./components/head";
import Card from "../../components/card";
import scss from "./style.module.scss";
import GrayBG from "../../components/gray_bg";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Post, setPosts } from "../../store/slices/posts";

const data: Post[] = [
    {
        id: "1",
        photos: [
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
        ],
        sketchs: [
            "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
            "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
            "https://s3-alpha-sig.figma.com/img/ad3d/da8f/5813c53ff190bf4e734dda53512662a7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUIEhbseAk-KncxEp5v7OgwAbGS7jaUwuiCThKP80uMv1mGVGK9xAnIN4kGvuH5pa3qTpTOkmj0g0yFLR-qEGwtDc10oiwAcoCsMaWPEI7D90L5HnK23zVp8-rSo9TLyg4UbSSrygKq54HwWd42PPWVi5wQNrmHcBVgIr~cfufHbstx-L9VhW~TNUVeVZcgowHPF4hid0M8Df8OV5yV~i~bjsSeAHACPupL2-6pLE3CkCzDnIyIWRCHeZ0sMOlf4r2woKoLyXJHMu6J~BMEPTzty4bNk-GrwylZpVseRxmDv39iKeqHi5OB6LiR0uOQd1CD8fVIzn70WH1Jh8nwo9Q__",
            "https://s3-alpha-sig.figma.com/img/ad3d/da8f/5813c53ff190bf4e734dda53512662a7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUIEhbseAk-KncxEp5v7OgwAbGS7jaUwuiCThKP80uMv1mGVGK9xAnIN4kGvuH5pa3qTpTOkmj0g0yFLR-qEGwtDc10oiwAcoCsMaWPEI7D90L5HnK23zVp8-rSo9TLyg4UbSSrygKq54HwWd42PPWVi5wQNrmHcBVgIr~cfufHbstx-L9VhW~TNUVeVZcgowHPF4hid0M8Df8OV5yV~i~bjsSeAHACPupL2-6pLE3CkCzDnIyIWRCHeZ0sMOlf4r2woKoLyXJHMu6J~BMEPTzty4bNk-GrwylZpVseRxmDv39iKeqHi5OB6LiR0uOQd1CD8fVIzn70WH1Jh8nwo9Q__",
            "https://s3-alpha-sig.figma.com/img/ad3d/da8f/5813c53ff190bf4e734dda53512662a7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUIEhbseAk-KncxEp5v7OgwAbGS7jaUwuiCThKP80uMv1mGVGK9xAnIN4kGvuH5pa3qTpTOkmj0g0yFLR-qEGwtDc10oiwAcoCsMaWPEI7D90L5HnK23zVp8-rSo9TLyg4UbSSrygKq54HwWd42PPWVi5wQNrmHcBVgIr~cfufHbstx-L9VhW~TNUVeVZcgowHPF4hid0M8Df8OV5yV~i~bjsSeAHACPupL2-6pLE3CkCzDnIyIWRCHeZ0sMOlf4r2woKoLyXJHMu6J~BMEPTzty4bNk-GrwylZpVseRxmDv39iKeqHi5OB6LiR0uOQd1CD8fVIzn70WH1Jh8nwo9Q__",
            "https://s3-alpha-sig.figma.com/img/ad3d/da8f/5813c53ff190bf4e734dda53512662a7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUIEhbseAk-KncxEp5v7OgwAbGS7jaUwuiCThKP80uMv1mGVGK9xAnIN4kGvuH5pa3qTpTOkmj0g0yFLR-qEGwtDc10oiwAcoCsMaWPEI7D90L5HnK23zVp8-rSo9TLyg4UbSSrygKq54HwWd42PPWVi5wQNrmHcBVgIr~cfufHbstx-L9VhW~TNUVeVZcgowHPF4hid0M8Df8OV5yV~i~bjsSeAHACPupL2-6pLE3CkCzDnIyIWRCHeZ0sMOlf4r2woKoLyXJHMu6J~BMEPTzty4bNk-GrwylZpVseRxmDv39iKeqHi5OB6LiR0uOQd1CD8fVIzn70WH1Jh8nwo9Q__",
        ],
        price: "4000000",
        address: "Бишкек, Парк Ататюрк, Масануева 58",
        region: "Чуй",
        area: 64,
        roomCount: 3,
        date: "11.12.2023",
        phone: "+996500000000",
        bathroomCount: 1,
        bedroomCount: 3,
        ownership: "Квартира",
        location: {
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
    },
    {
        id: "2",
        photos: [
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
            "https://s3-alpha-sig.figma.com/img/4901/bf97/af5f5e100910bde4f11fea38968975a6?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gJ7ZjmdrdJVatCDXW31hBFiu4OYSZo2hsl~Ox5nR7~~poeDT23D9l40TCxaCWTbFPt0HRMImJtesoaaLplPtAJIiB1BDVBBJO4TPkOEWfqw4rL6K6Aos~Fb6lglWjgQI39qszr6~ZjGZB8aZVkiI3~EC30jrDIK2LBhHW3CDFUQwl0cULkHkmvEffGHtLp1cOKFHIowhylEU8R5Jvn6NoXa2hpnrPpBnoZvv2h7BrIbLIOUAF7youtCtxGbWDDT9PO~BFMVGyaxcd-0cM4Sk28mggsiDqMQUzh9zfpjYQKqMq-A~hGuL8UeJb2f~sH-Ivx9Udfl2sXDUU1W9p9Db5w__",
        ],
        sketchs: [
            "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
            "https://s3-alpha-sig.figma.com/img/5035/0041/7b1907a10e2975c89a861a06e3087901?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWDXMnan~QwUvu1wEyYc72PXlc77qYJ7qY3M-LStWFiq2lDgCW4yc88ktaddMG4QU2y~QcslnqWDvvBCT8URQWWI2alrF-T~ejg3morcA5FWKNCYImSQPimkT-ALgw0j~2YYxdzoEGyICIW1cMmv~rDFypsTFdpF75f1QF6y-9CsISearRqnqtAw-EjFkGVlyBzCW7ivo5kDTur5wdIdCHWNf50i3aFEnYbe3PwAMWhXRQNge3XBpDavZ1EmDt6fCmCfe-hPQqNahiwH4wPV2zzkCX-h9Donylzpf77VRQFTYNLAtQkRbhSHSGBaT1D0o2j04ysHeqA8kygz046eIw__",
            "https://s3-alpha-sig.figma.com/img/ad3d/da8f/5813c53ff190bf4e734dda53512662a7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUIEhbseAk-KncxEp5v7OgwAbGS7jaUwuiCThKP80uMv1mGVGK9xAnIN4kGvuH5pa3qTpTOkmj0g0yFLR-qEGwtDc10oiwAcoCsMaWPEI7D90L5HnK23zVp8-rSo9TLyg4UbSSrygKq54HwWd42PPWVi5wQNrmHcBVgIr~cfufHbstx-L9VhW~TNUVeVZcgowHPF4hid0M8Df8OV5yV~i~bjsSeAHACPupL2-6pLE3CkCzDnIyIWRCHeZ0sMOlf4r2woKoLyXJHMu6J~BMEPTzty4bNk-GrwylZpVseRxmDv39iKeqHi5OB6LiR0uOQd1CD8fVIzn70WH1Jh8nwo9Q__",
            "https://s3-alpha-sig.figma.com/img/ad3d/da8f/5813c53ff190bf4e734dda53512662a7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUIEhbseAk-KncxEp5v7OgwAbGS7jaUwuiCThKP80uMv1mGVGK9xAnIN4kGvuH5pa3qTpTOkmj0g0yFLR-qEGwtDc10oiwAcoCsMaWPEI7D90L5HnK23zVp8-rSo9TLyg4UbSSrygKq54HwWd42PPWVi5wQNrmHcBVgIr~cfufHbstx-L9VhW~TNUVeVZcgowHPF4hid0M8Df8OV5yV~i~bjsSeAHACPupL2-6pLE3CkCzDnIyIWRCHeZ0sMOlf4r2woKoLyXJHMu6J~BMEPTzty4bNk-GrwylZpVseRxmDv39iKeqHi5OB6LiR0uOQd1CD8fVIzn70WH1Jh8nwo9Q__",
            "https://s3-alpha-sig.figma.com/img/ad3d/da8f/5813c53ff190bf4e734dda53512662a7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUIEhbseAk-KncxEp5v7OgwAbGS7jaUwuiCThKP80uMv1mGVGK9xAnIN4kGvuH5pa3qTpTOkmj0g0yFLR-qEGwtDc10oiwAcoCsMaWPEI7D90L5HnK23zVp8-rSo9TLyg4UbSSrygKq54HwWd42PPWVi5wQNrmHcBVgIr~cfufHbstx-L9VhW~TNUVeVZcgowHPF4hid0M8Df8OV5yV~i~bjsSeAHACPupL2-6pLE3CkCzDnIyIWRCHeZ0sMOlf4r2woKoLyXJHMu6J~BMEPTzty4bNk-GrwylZpVseRxmDv39iKeqHi5OB6LiR0uOQd1CD8fVIzn70WH1Jh8nwo9Q__",
            "https://s3-alpha-sig.figma.com/img/ad3d/da8f/5813c53ff190bf4e734dda53512662a7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mUIEhbseAk-KncxEp5v7OgwAbGS7jaUwuiCThKP80uMv1mGVGK9xAnIN4kGvuH5pa3qTpTOkmj0g0yFLR-qEGwtDc10oiwAcoCsMaWPEI7D90L5HnK23zVp8-rSo9TLyg4UbSSrygKq54HwWd42PPWVi5wQNrmHcBVgIr~cfufHbstx-L9VhW~TNUVeVZcgowHPF4hid0M8Df8OV5yV~i~bjsSeAHACPupL2-6pLE3CkCzDnIyIWRCHeZ0sMOlf4r2woKoLyXJHMu6J~BMEPTzty4bNk-GrwylZpVseRxmDv39iKeqHi5OB6LiR0uOQd1CD8fVIzn70WH1Jh8nwo9Q__",
        ],
        price: "4000000",
        address: "Бишкек, Парк Ататюрк, Масануева 58",
        region: "Чуй",
        area: 64,
        roomCount: 3,
        date: "11.12.2023",
        phone: "+996500000000",
        bathroomCount: 1,
        bedroomCount: 3,
        ownership: "Квартира",
        location: {
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
    },
];

const PostsModule: React.FC = () => {
    const [searchData, setSearchData] = useState("");
    const [postsState, setPostsState] = useState<Post[]>([]);

    const allPosts = useSelector((state: RootState) => state.posts.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPosts([...allPosts, ...data]));
        setPostsState([...allPosts, ...data]);
    }, []);

    const onClickSearchHandler = () => {
        const info = searchData.trim().toLowerCase();
        const foundPosts = allPosts.filter((post) =>
            post.address.toLowerCase().includes(info)
        );

        if (foundPosts.length > 0) {
            setPostsState(foundPosts);
        } else {
            setPostsState([]);
        }
    };

    return (
        <>
            <Head
                inputData={searchData}
                onChange={(value) => setSearchData(value)}
                results={postsState.length}
                onClickBtn={onClickSearchHandler}
            />

            <GrayBG>
                {postsState.length > 0 ? (
                    <ul className={scss.list}>
                        {postsState.map((el) => (
                            <Card {...el} key={el.id} />
                        ))}
                    </ul>
                ) : (
                    <Typography.Text>No data . .</Typography.Text>
                )}
            </GrayBG>
        </>
    );
};

export default PostsModule;
