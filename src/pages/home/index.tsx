import { useState } from "react";
import store from "../../redux"
import { Button } from "antd";
import { setTokenSync, setUsernameAsync } from "../../redux/modules/global/action";


export default () => {

    const [count, setCount] = useState<number>(0);
    const [token, setToken] = useState<string>('sdghbsh')
    const [username, setUsername] = useState<string>('美美')

    // console.log("订阅，查看数据变化", store.getState())

    store.subscribe(() => {
        const store_data = store.getState()
        // setCount(store_data)
        setToken(store_data.Global.token)
        setUsername(store_data.Global.username)
        console.log("订阅，查看数据变化", store.getState())
    })

    return (
        <div>Home
            <p>--{count}--{token}--{username}</p>
            <Button type="primary" onClick={() => {
                store.dispatch(setTokenSync("token81098098"))
            }}>setTokenSync</Button>
            <Button type="primary" onClick={() => {
                setUsernameAsync("李华")(store.dispatch)
            }}>setUsernameAsync</Button>
        </div>
    )
}
