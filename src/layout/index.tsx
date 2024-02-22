import "./layout.scss";
import { Outlet } from "react-router-dom";
import { Button } from "antd";
import Aside from "./aside";
import store from "../redux";

export default () => {

    const handleClick = () => {
        store.dispatch({
            type: "ADD",
            payload: 1,
        }); // 修改store数据
    }

    return (
        <section id="container">
            <aside>
                <Aside />
            </aside>
            <section>
                <header>header <Button type="primary" onClick={handleClick}>Click me</Button></header>
                <main>
                    <Outlet />
                </main>
            </section>
        </section>
    )
}