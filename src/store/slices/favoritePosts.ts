import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsState } from "./posts";

const initialState: PostsState = {
    posts: [],
};

export const favoritePosts = createSlice({
    name: "My favorite Posts",
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts = [...state.posts, action.payload];
        },
        deletePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter((el) => el.id !== action.payload);
        },
        setPosts: (state, action: PayloadAction<PostsState>) => {
            state.posts = action.payload.posts;
        },
    },
});

export const { addPost, deletePost, setPosts } = favoritePosts.actions;

export default favoritePosts.reducer;
