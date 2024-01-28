import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Post {
    id: string;
    photos: string[];
    sketchs: string[];
    price: string;
    address: string;
    rooms: number;
    date: string;
    phone: string;
    bathroomCount: number;
    bedroomCount: number;
    ownership: string;
    addressLocation: {
        lat: number;
        lng: number;
    };
    propertyType: string;
    description: string;
    generalInfo: string;
}

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
    },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
