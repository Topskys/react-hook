import { legacy_createStore as createStore } from 'redux'; // redux 数据共享管理器（类似Vuex、Pinia）

/**
 * 初始化数据
 */
const initState = {
    count: 10,
}

/**
 * 关联action
 * @param state 
 * @param action 
 */
function countReducer(state = initState, action: { type: string, payload: any }) {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: state.count + action.payload }
        case 'MINUS':
            return { ...state, count: state.count - action.payload }
        default:
            return state;
    }
}

const store = createStore(countReducer);

export default store;