import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsState } from "./posts";

const initialState: PostsState = {
    posts: [],
};

export const myPosts = createSlice({
    name: "My Posts",
    initialState,
    reducers: {
        setMyPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        addMyPost: (state, action: PayloadAction<Post>) => {
            state.posts = [...state.posts, action.payload];
        },
        deleteMyPost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter((el) => el.id !== action.payload);
        },
        changeMyPost: (state, action: PayloadAction<Post>) => {
            state.posts = state.posts.map((el) =>
                el.id === action.payload.id ? action.payload : el
            );
        },
    },
});

export const { addMyPost, changeMyPost, deleteMyPost, setMyPosts } =
    myPosts.actions;

export default myPosts.reducer;
