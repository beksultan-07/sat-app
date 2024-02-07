import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostsState } from "./posts";
import { Post } from "../../api/type";

const initialState: PostsState = {
    posts: [],
};

export const filteredPosts = createSlice({
    name: "filtered posts",
    initialState,
    reducers: {
        setFilteredPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
    },
});

export const { setFilteredPosts } = filteredPosts.actions;

export default filteredPosts.reducer;
