export interface Post {
    id: string;
    region: string;
    address: string;
    location?: {
        lat: number;
        lng: number;
    };
    price: number;
    roomCount: number;
    area: number;
    bathroomCount: number;
    bedroomCount: number;
    ownership: string;
    propertyType: string;
    description: string;
    generalInfo: string;
    date: number;
    phone: number;
    author: string;
    photos: string[];
    sketchs: string[];
}

export interface UserInfo {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    subscription: boolean;
    profile_picture: string;
}

export interface User extends UserInfo {
    posts: Record<string, Post>;
    favorites: string[];
}

export interface Database {
    users: Record<string, User>;
}
