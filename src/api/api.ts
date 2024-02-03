import { Database, child, get, getDatabase, ref } from "firebase/database";
import { Post, User } from "./type";

export function getAllPosts() {
    const dbRef = ref(getDatabase());

    return get(child(dbRef, `users/`)).then((snapshot) => {
        const dbData: Database = snapshot.val();
        if (dbData) {
            const postsArr: Post[] = Object.values(dbData).flatMap(
                (user: User) => Object.values(user.posts || {})
            );
            return postsArr;
        }
        return [];
    });
}
