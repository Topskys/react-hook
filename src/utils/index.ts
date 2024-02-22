export interface MetaProps {
    keepAlive?: boolean; // 是否保持页面活跃状态
    title: string; // 页面标题
    key?: string; // 页面唯一标识
    requiredAuth?: boolean; // 是否需要登录
}

export interface RouteObject {
    children?: RouteObject[];
    element?: React.ReactNode;
    path?: string;
    meta?: MetaProps;
}

/**
 * 比对路由
 * @param path 当前路由
 * @param routes 路由数组
 * @returns 路由
 */
export const matchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
    let result: RouteObject = {};
    for (const route of routes) {
        if (route.path === path) {
            return route;
        }
        if (route.children && route.children.length) {
            const res = matchRoute(path, route.children);
            if (Object.keys(res).length) {
                result = res;
            }
        }
    }
    return result;
}