import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../api/type";

export interface PostsState {
    posts: Post[];
}

const initialState: PostsState = {
    posts: [],
};

export const postsSlice = createSlice({
    name: "All posts",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload);
        },
        deletePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter((el) => el.id !== action.payload);
        },
        changePost: (state, action: PayloadAction<Post>) => {
            state.posts = state.posts.map((el) =>
                el.id === action.payload.id ? action.payload : el
            );
        },
    },
});

export const { addPost, changePost, deletePost, setPosts } = postsSlice.actions;

export default postsSlice.reducer;
