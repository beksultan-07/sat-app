import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Signin from "./pages/signin";
import Filter from "./pages/filter";
import Posts from "./pages/posts";
import CreatePost from "./pages/create_post";
import Post from "./pages/post";
import Profile from "./pages/profile";
import Favorite from "./pages/favorite";
import MyPosts from "./pages/myPosts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "./store/slices/posts";
import { getAllPosts } from "./api/api";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/signin",
        element: <Signin />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/filter",
        element: <Filter />,
    },
    {
        path: "/posts",
        element: <Posts />,
    },
    {
        path: "/post/:id",
        element: <Post />,
    },
    {
        path: "/favorite",
        element: <Favorite />,
    },
    {
        path: "/myposts",
        element: <MyPosts />,
    },
    {
        path: "/post/create",
        element: <CreatePost />,
    },
]);

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getAllPosts().then((res) => {
            dispatch(setPosts(res));
        });
    }, []);

    return <RouterProvider router={router} />;
};

export default App;
