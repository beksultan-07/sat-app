import { getDatabase, ref, set } from "firebase/database";

export async function addToFavoriteDB(
    favorites: string[],
    userId: string,
    postId: string
) {
    const db = getDatabase();

    favorites = favorites.length > 0 ? [...favorites, postId] : [postId];
    return set(ref(db, `users/${userId}/favorites`), favorites).then(() => {
        return postId;
    });
}

export async function deleteFromFavoriteDB(
    favorites: string[],
    userId: string,
    postId: string
) {
    const db = getDatabase();

    favorites = favorites ? favorites.filter((id) => id !== postId) : [];

    return set(ref(db, `users/${userId}/favorites`), favorites).then(
        () => postId
    );
}
