import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Coverage from "../pages/coverage/Coverage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
    path: "coverage",
    element: <Coverage />,
    loader: async () => {
    console.log("Loader is running...");

    const res = await fetch("/serviceCenteres.json");

    console.log("Response:", res);

    const data = await res.json();

    console.log("Data:", data);

    return data;
  },
},
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "signin",
                element: <SignIn />,
            },
        ],
    },
]);

export default router;