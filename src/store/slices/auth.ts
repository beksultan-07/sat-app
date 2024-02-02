import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    email: string;
    firstName: string;
    lastName: string;
    auth: boolean;
}

const initialState: AuthState = {
    auth: false,
    firstName: "",
    lastName: "",
    email: "",
};

export const authSlice = createSlice({
    name: "Authorization",
    initialState,
    reducers: {
        changeFullName: (
            state,
            action: PayloadAction<{
                name: string;
                lastName: string;
            }>
        ) => {
            state.firstName = action.payload.name;
            state.lastName = action.payload.lastName;
        },
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setAuth: (state, action: PayloadAction<AuthState>) => {
            state.auth = action.payload.auth;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },
});

export const { changeEmail, changeFullName, setAuth } = authSlice.actions;

export default authSlice.reducer;
