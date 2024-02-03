import { getDatabase, ref, set } from "firebase/database";
import { Post } from "../../../api/type";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export function addNewPost(userId: string, post: Post) {
    const db = getDatabase();

    return set(ref(db, `users/${userId}/posts/${post.id}`), post).then(() => {
        return post;
    });
}
