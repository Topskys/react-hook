import { AnyAction } from "redux";

/**
 * 初始化数据
 */
const initState = {
    list: 'list',
    detailed: ''
}

/** 
 * 关联action
 * @param state 
 * @param action 
 */
const info = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return state
        case 'UPDATE_NAME':
            return state
        default:
            return state;
    }
}

export default info;