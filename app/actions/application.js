/**
 * 应用全局的action
 */
'use strict';

//导入 APP 变量
import { APP } from '../config/actionType';

/**
 * 关闭闪屏
 * 异步Action Creator
 * 通过指定的middleware，action creator除了返回action对象外还可以返回函数。
 * 这时 这个action creater 就是Thunk。
 */
export function closeSplashScreen() {
    // Thunk middleware 知道如何处理函数
    // 这里把 dispatch 方法通过参数的形式传给函数，让它也能 dispatch action。
    return (dispatch) => {
        return Promise.resolve(dispatch({
            type: APP.SPLASH,//将要执行的行为
            data: false
        }));
    }
}
/**
 * 选择底部栏
 */
export function selectTab(tab) {
    return (dispatch)=> {
        return Promise.resolve(dispatch({
            type: APP.TAB_SELECT,
            data: tab
        }));
    }
}