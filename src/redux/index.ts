import { legacy_createStore as createStore, applyMiddleware, combineReducers, } from 'redux'; // redux 数据共享管理器（类似Vuex、Pinia）

/**
 * 中间件可做异步操作
 * redux-thunk √、redux-promise、redux-sage
 * pnpm i redux-devtools-extension -D √ 用于了浏览器调试
 */
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// 导入模块
import Global from "./modules/global/reducer";
import Info from "./modules/info/reducer";


// 合并模块
const reducer = combineReducers({
    Global,
    Info
})

// 注册store和分析插件
const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk)))


export default store;