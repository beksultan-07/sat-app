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

export function uploadImageToStorage(file: File, postId: string) {
    const storage = getStorage();

    const metadata = {
        contentType: "image/jpeg",
    };

    const fileId = uuidv4();
    const fileRef = storageRef(storage, `posts/${postId}/${fileId}`);

    return uploadBytesResumable(fileRef, file, metadata).then((snapshot) => {
        return getDownloadURL(snapshot.ref);
    });
}

export function deleteImageFromStorage(fileUrl: string) {
    const storage = getStorage();

    const desertRef = storageRef(storage, fileUrl);

    return deleteObject(desertRef).then((res) => {
        return res;
    });
}
