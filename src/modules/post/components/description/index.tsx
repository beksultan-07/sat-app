import { Flex, Typography } from "antd";
import React, { useEffect, useState } from "react";

const { Title } = Typography;

interface Props {
    text: string;
}

const getNormalizedTextWithBr = (text: string) => {
    let word = "";
    const arr: Array<string | React.ReactNode> = [];
    for (let i = 0; i < text.length; i++) {
        word += text[i];

        if (word === "\n") {
            arr.push(<br key={i} />);
            word = "";
        }
        if (text[i] === " " && text[i - 1] === " ") {
            word = word.slice(-1);
            continue;
        }
        if (text[i] === " " || i === text.length - 1) {
            arr.push(word);
            word = "";
        }
    }
    return arr;
};

const Description: React.FC<Props> = ({ text }) => {
    const [words, setWords] = useState<Array<string | React.ReactNode>>([]);

    useEffect(() => {
        setWords(getNormalizedTextWithBr(text));
    }, [text]);

    return (
        <>
            <Flex vertical gap={16}>
                <Title level={5}>Общая информация</Title>

                <Flex vertical gap={12}>
                    {words.map((word) => word)}
                </Flex>
            </Flex>
        </>
    );
};

export default Description;
