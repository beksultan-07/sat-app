import React, { useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Modal, Progress, Typography, Upload } from "antd";
import scss from "./style.module.scss";
import { deleteImageFromStorage, uploadImageToStorage } from "../../api/api";

const { Title } = Typography;

interface Props {
    photos: string[];
    setPhotos: (arr: Array<string>) => void;
    title: string;
    postId: string;
}

const MyUpload: React.FC<Props> = ({ setPhotos, title, photos, postId }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [progress, setProgress] = useState(0);
    const [showProgress, setShowProgress] = useState(false);

    const onProgress = (progress: number) => {
        setProgress(progress);
    };

    const uploadToDb = (file: File) => {
        setShowProgress(true);
        if (!file) {
            console.error("Файл не выбран");
            return;
        }

        uploadImageToStorage({
            file,
            postId,
            onProgressCallback: onProgress,
        }).then((downloadURL) => {
            if (typeof downloadURL === "string") {
                setPhotos([...photos, downloadURL]);
                setShowProgress(false);
            }
        });
    };

    const handlePreview = async (fileUrl: string) => {
        setPreviewImage(fileUrl);
        setPreviewOpen(true);
    };

    const deleteImage = (fileUrl: string) => {
        deleteImageFromStorage(fileUrl).then(() => {
            const updatedPhotos = photos.filter((el) => el !== fileUrl);
            setPhotos(updatedPhotos);
            setPreviewOpen(false);
        });
    };
    return (
        <Flex vertical gap={15}>
            <Title level={5}>{title}</Title>
            <Flex gap={10}>
                {photos.map((el, idx) => (
                    <img
                        src={el}
                        onClick={() => handlePreview(el)}
                        key={idx}
                        className={scss.image}
                    />
                ))}
                {showProgress ? (
                    <Card>
                        <Progress percent={progress} type="circle" width={40} />
                    </Card>
                ) : null}
                <Upload beforeUpload={uploadToDb} fileList={[]}>
                    <Button
                        style={{
                            height: "100%",
                            borderRadius: 8,
                        }}
                    >
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </Button>
                </Upload>
            </Flex>

            <Modal
                open={previewOpen}
                footer={null}
                onCancel={() => setPreviewOpen(false)}
            >
                <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                />

                <Button
                    icon={<DeleteOutlined />}
                    type="primary"
                    danger
                    onClick={() => deleteImage(previewImage)}
                >
                    Delete
                </Button>
            </Modal>
        </Flex>
    );
};

export default MyUpload;
