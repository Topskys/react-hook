import { Navigate, useLocation } from "react-router-dom"
import { matchRoute } from "../utils";
import { routes } from "../router";


export default (props: { children: JSX.Element }) => {
    const token = "your_token_here"
    const { pathname } = useLocation();
    const router = matchRoute(pathname, routes)

    if (router.meta?.unWantedAuth) {
        return props.children
    }
    if (!token) {
        return <Navigate to="/login" />
    } else {
        return props.children
    }
}