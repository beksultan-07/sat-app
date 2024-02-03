import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { UserInfo } from "../../../api/type";

interface RegisterData {
    email: string;
    name: string;
    lastName: string;
    password: string;
}
export const registerUser = (data: RegisterData) => {
    const auth = getAuth();
    const db = getDatabase();

    return createUserWithEmailAndPassword(auth, data.email, data.password).then(
        () => {
            const newUserId = uuidv4();

            const dataToStore = {
                auth: true,
                email: data.email,
                firstName: data.name,
                lastName: data.lastName,
                id: newUserId,
            };

            const dataToDB: UserInfo = {
                ...dataToStore,
                profile_picture: "",
                subscription: false,
            };

            set(ref(db, "users/" + newUserId), dataToDB);
            return dataToStore;
        }
    );
};
