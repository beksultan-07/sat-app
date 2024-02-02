import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PostsState } from "./posts";
import { Post } from "../../api/type";

const initialState: PostsState = {
    posts: [],
};

export const favoritePosts = createSlice({
    name: "My favorite Posts",
    initialState,
    reducers: {
        addFavoritePost: (state, action: PayloadAction<Post>) => {
            state.posts = [...state.posts, action.payload];
        },
        deleteFavoritePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter((el) => el.id !== action.payload);
        },
        setFavoritePosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
    },
});

export const { addFavoritePost, deleteFavoritePost, setFavoritePosts } =
    favoritePosts.actions;

export default favoritePosts.reducer;
