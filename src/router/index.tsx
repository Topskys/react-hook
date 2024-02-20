import Layout from "../layout";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/user";
import Login from "../pages/login";


export const routes = [
    {
        path: "/",
        element: <Navigate to="/layout/home" />,
        label: "主页",
        icon: "",
        key: "/",
        hidden: true,
    },
    {
        path: "/login",
        element: <Login/>,
        label: "登录",
        icon: "",
        key: "login",
        hidden: true,
    },
    {
        path: "/layout",
        element: <Layout />,
        label: "控制台",
        icon: "",
        key: 'layout',
        children: [
            {
                path: "home",
                element: <Home />,
                label: "首页",
                icon: "",
                key: "home",
            },
            {
                path: "user",
                element: <User />,
                label: "用户",
                icon: "",
                key: "user"
            }
        ]
    }
]

const GetRoutes = () => useRoutes(routes);

export default GetRoutes;