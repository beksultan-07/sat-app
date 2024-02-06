import {
    getAuth,
    sendEmailVerification,
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

export async function updateEmailFromDB(email: string, userId: string) {
    const auth = getAuth();
    const db = getDatabase();

    const user = auth.currentUser;

    if (user?.email !== email && user) {
        return updateEmail(user, email).then(() => {
            return set(ref(db, "users/" + userId + "/email"), email).then(
                () => email
            );
        });
    }
    return new Error("Update Error");
}

export async function updatePasswordFromDB(password: string) {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        return updatePassword(user, password);
    }
    return new Error("Password is not available");
}

export function signOutFromFB() {
    const auth = getAuth();
    return signOut(auth);
}
