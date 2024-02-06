import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { Database, Post, User } from "../../../api/type";
import { AuthState } from "../../../store/slices/auth";

export interface AllData {
    user: AuthState;
    myPosts: Post[];
    favorites: Post[];
    allPosts: Post[];
}

export function signin(email: string, password: string) {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password).then(async () => {
        return getAllNeedDataFromDB(email);
    });
}

export function getAllNeedDataFromDB(email: string) {
    const dbRef = ref(getDatabase());
    const needData: AllData = {
        user: {
            id: "",
            auth: true,
            email: "",
            lastName: "",
            firstName: "",
        },
        myPosts: [],
        favorites: [],
        allPosts: [],
    };

    return get(child(dbRef, `users/`)).then((snapshot) => {
        const dbData: Database = snapshot.val();

        const postsArr: Post[] = Object.values(dbData).flatMap((user: User) =>
            Object.values(user.posts || {})
        );

        const currentUser: User = Object.values(dbData).find(
            (el: User) => el.email === email
        );

        if (currentUser.posts) {
            const myPosts: Post[] = Object.keys(currentUser.posts).map(
                (el) => currentUser.posts[el]
            );
            needData.myPosts = myPosts;
        }

        if (currentUser.favorites) {
            const favoritePosts: Post[] = postsArr.filter((el) =>
                currentUser.favorites.includes(el.id)
            );
            needData.favorites = favoritePosts;
        }

        needData.user.email = currentUser.email;
        needData.user.lastName = currentUser.lastName;
        needData.user.firstName = currentUser.firstName;
        needData.user.id = currentUser.id;
        needData.user.auth = true;
        needData.allPosts = postsArr;

        return needData;
    });
}
