import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    email: string;
    fullName: string;
    auth: boolean;
}

const initialState: AuthState = {
    auth: false,
    fullName: "",
    email: "",
};

export const authSlice = createSlice({
    name: "Authorization",
    initialState,
    reducers: {
        changeFullName: (state, action: PayloadAction<string>) => {
            state.fullName = action.payload;
        },
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setAuth: (state, action: PayloadAction<AuthState>) => {
            state.auth = action.payload.auth;
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
        },
    },
});

export const { changeEmail, changeFullName, setAuth } = authSlice.actions;

export default authSlice.reducer;
