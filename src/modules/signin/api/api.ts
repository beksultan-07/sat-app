import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { Database, Post, User, UserInfo } from "../../../api/type";
import { AuthState } from "../../../store/slices/auth";

export interface AllData {
    user: AuthState;
    myPosts: Post[];
    favorites: Post[];
}

export const signin = (email: string, password: string) => {
    const auth = getAuth();
    const needData: AllData = {
        user: {
            auth: true,
            email: "",
            lastName: "",
            name: "",
        },
        myPosts: [],
        favorites: [],
    };
    return signInWithEmailAndPassword(auth, email, password).then(() => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `users/`)).then((snapshot) => {
            const dbData: Database = snapshot.val();

            const postsArr: Post[] = Object.values(dbData).flatMap(
                (user: User) => Object.values(user.posts || {})
            );

            const currentUser: User = Object.values(dbData).find(
                (el: User) => el.email === email
            );

            const myPosts: Post[] = Object.keys(currentUser.posts).map(
                (el) => currentUser.posts[el]
            );
            const favoritePosts: Post[] = postsArr.filter((el) =>
                currentUser.favorites.includes(el.id)
            );

            needData.myPosts = myPosts;
            needData.favorites = favoritePosts;
            needData.user.email = currentUser.email;
            needData.user.lastName = currentUser.lastName;
            needData.user.name = currentUser.firstName;
            needData.user.auth = true;
        });

        return needData;
    });
};
