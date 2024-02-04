import { getDatabase, ref, remove } from "firebase/database";
import {
    listAll,
    getStorage,
    ref as storageRef,
    deleteObject,
} from "firebase/storage";

export async function deletePostFromDB(userId: string, postId: string) {
    const db = getDatabase();
    const dbPath = `users/${userId}/posts/${postId}`;

    const storage = getStorage();
    const folderRef = storageRef(storage, `/posts/${postId}`);

    const files = await listAll(folderRef);
    await Promise.all(files.items.map((fileRef) => deleteObject(fileRef)));

    await remove(ref(db, dbPath));

    return postId;
}
