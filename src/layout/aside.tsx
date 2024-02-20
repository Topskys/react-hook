import { useState } from "react";
import { routes } from "../router";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

// 获取本地数据
const sessionSelectKeys = JSON.parse(sessionStorage.getItem('selectKeys') || '[]');
const sessionOpenKeys = JSON.parse(sessionStorage.getItem('openKeys') || '[]');

function aside({ location }) {
    const navigate = useNavigate();
    // const location = useLocation();
    const [router] = useState(routes);
    const [selectKeys, setSelectKeys] = useState<[]>(sessionSelectKeys);
    const [openKeys, setOpenKeys] = useState<[]>(sessionOpenKeys);
console.log("lklk----", location)

    /**
     * 点击菜单项事件
     */
    const handlerMenuClick = (e: any) => {
        const keyPath = e.keyPath;
        // 设置默认展开项
        const copyKeyPath = JSON.parse(JSON.stringify(keyPath))
        setOpenKeys(copyKeyPath.slice(1));
        sessionStorage.setItem('openKeys', JSON.stringify(copyKeyPath.slice(1)));
        // 路由跳转
        navigate('/' + keyPath.reverse().join('/'));
        sessionStorage.setItem('selectKeys', JSON.stringify([e.key]));
        setSelectKeys(e.key);   
    }

    return (
        <>
            <Menu
                items={router}
                mode="inline"
                theme="dark"
                defaultOpenKeys={openKeys}
                defaultSelectedKeys={selectKeys}
                onClick={handlerMenuClick} />
        </>
    )
}

export default aside;