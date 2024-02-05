import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export async function changeNameFromDB(
    userId: string,
    firstName: string,
    lastName: string
) {
    const db = getDatabase();

    await set(ref(db, "users/" + userId + "/firstName"), firstName);
    await set(ref(db, "users/" + userId + "/lastName"), lastName);

    return {
        userId,
        lastName,
        firstName,
    };
}

export async function updateEmailFromDB(
    email: string,
    newEmail: string,
    password: string,
    userId: string
) {
    const auth = getAuth();
    const db = getDatabase();

    const user = auth.currentUser;

    return signInWithEmailAndPassword(auth, email, password).then(async () => {
        if (user) {
            await set(ref(db, "users/" + userId + "/email"), newEmail);

            await updateEmail(user, newEmail);
        }
        return newEmail;
    });
}

export async function updatePasswordFromDB(
    email: string,
    password: string,
    newPassword: string
) {
    const auth = getAuth();
    const user = auth.currentUser;

    return signInWithEmailAndPassword(auth, email, password).then(async () => {
        if (user) {
            await updatePassword(user, newPassword);
        }
        return newPassword;
    });
}

export function signOutFromFB() {
    const auth = getAuth();
    return signOut(auth);
}
