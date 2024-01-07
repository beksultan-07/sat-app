import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Signin from "./pages/signin";
import Filter from "./pages/filter";
import Posts from "./pages/posts";
import CreatePost from "./pages/create_post";
import Post from "./pages/post";
import Profile from "./pages/profile";

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
        path: "/post/create",
        element: <CreatePost />,
    },
]);

const App: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
