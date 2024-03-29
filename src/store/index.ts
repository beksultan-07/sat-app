import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/auth";
import favoritePostsReducer from "./slices/favoritePosts";
import myPostsReducer from "./slices/myPosts";
import postsReducer from "./slices/posts";
import filteredPosts from "./slices/filteredPosts";

export const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        favorite: favoritePostsReducer,
        myPosts: myPostsReducer,
        posts: postsReducer,
        filteredPosts: filteredPosts,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
