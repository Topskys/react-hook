import { Dispatch } from "redux"

/**
 * 同步设置token
 * @param value token值
 * @returns 
 */
export const setTokenSync = (value: string) => {
    return {
        type: 'SET_TOKEN',
        payload: value
    }
}

/**
 * 异步设置token
 * @param value token值
 * @returns 
 */
export const setTokenAsync = (value: string) => {
    return () => {
        setTimeout((dispatch: Dispatch) => {
            dispatch({
                type: 'SET_TOKEN',
                payload: value
            })
        }, 2000)
    }
}

/**
 * 同步修改用户名
 * @param value 
 * @returns 
 */
export const setUsernameSync = (value: string) => ({
    type: "SET_USERNAME",
    payload: value
})


/**
 * 异步设置用户名
 * @param value 值
 * @returns 
 */
export const setUsernameAsync = (value: string) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch({
                type: 'SET_USERNAME',
                payload: value
            })
        }, 4000)
    }
}