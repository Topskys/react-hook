import React from "react";
import Layout from "../layout";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/user";
import Login from "../pages/login";
import NotFound from "../pages/404";
import lazyLoad from "./lazyLoad";


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
        element: lazyLoad(React.lazy(() => import("../pages/login"))), // 路由懒加载
        label: "登录",
        icon: "",
        key: "login",
        hidden: true,
        // unWantedAuth: true,
    },
    {
        path: "/404",
        element: <NotFound />,
        label: "登录",
        icon: "",
        key: "404",
        hidden: true,
        // unWantedAuth: true,
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
    },
    {
        path: "*",
        element: <Navigate to="/404" />,
    }
]

const GetRoutes = () => useRoutes(routes);

export default GetRoutes;