import { getDatabase, ref, set } from "firebase/database";
import { Post } from "../../../api/type";
import {
    getDownloadURL,
    getStorage,
    uploadBytesResumable,
    ref as storageRef,
    deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export function addNewPost(userId: string, post: Post) {
    const db = getDatabase();

    return set(ref(db, `users/${userId}/posts/${post.id}`), post).then(() => {
        return post;
    });
}

interface UploadImageOptions {
    file: File;
    postId: string;
    onProgressCallback?: (progress: number) => void;
}

export async function uploadImageToStorage({
    file,
    postId,
    onProgressCallback,
}: UploadImageOptions) {
    const storage = getStorage();
    const metadata = {
        contentType: "image/jpeg",
    };

    const fileId = uuidv4();
    const fileRef = storageRef(storage, `posts/${postId}/${fileId}`);
    const uploadTask = uploadBytesResumable(fileRef, file, metadata);

    await new Promise<void>((resolve, reject) => {
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
                if (onProgressCallback) {
                    onProgressCallback(progress);
                }
            },
            (error) => {
                console.error("Error during upload:", error);
                reject(error);
            },
            () => {
                resolve();
            }
        );
    });

    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    return downloadURL;
}

export function deleteImageFromStorage(fileUrl: string) {
    const storage = getStorage();

    const desertRef = storageRef(storage, fileUrl);

    return deleteObject(desertRef).then((res) => {
        return res;
    });
}
