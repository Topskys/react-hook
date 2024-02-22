import { AnyAction } from "redux"

const initState = {
    token: "",
    username: ""
}

const global = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case "SET_TOKEN":
            return { ...state, token: action.payload }
        case "SET_USERNAME":
            return { ...state, username: action.payload }
        default:
            return state
    }
}

export default global;