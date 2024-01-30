import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Post {
    id: string;
    region: string;
    address: string;
    location?: {
        lat: number;
        lng: number;
    };
    price: string;
    roomCount: number;
    area: number;
    bathroomCount: number;
    bedroomCount: number;
    ownership: string;
    propertyType: string;
    description: string;
    generalInfo: string;
    date: string;
    phone: string;
    photos: string[];
    sketchs: string[];
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
