import "./layout.scss";
import { Outlet } from "react-router-dom";
import { Button } from "antd";
import Aside from "./aside";

export default () => {
    return (
        <section id="container">
            <aside>
                <Aside />
            </aside>
            <section>
                <header>header <Button type="primary">Click me</Button></header>
                <main>
                    <Outlet />
                </main>
            </section>
        </section>
    )
}