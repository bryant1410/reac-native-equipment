/**
 * 应用全局的redux
 */
'use strict'

//引用reducer生成器
import createReducer from '../utils/create-reducer';
import {APP} from '../config/actionType';

//初始化状态
const initialState = {
    isShowSplash: true,//是否展示闪屏
    tabSelect: 'aichoose',//默认底部栏选中装备库
}

const actionHandle = {
    //设置闪屏状态
    [APP.SPLASH]: (state, action)=> {
        return Object.assign({}, state, {
            isShowSplash: action.data
        });
    },
    //设置底部栏选中值
    [APP.TAB_SELECT]: (state, action)=> {
        return Object.assign({}, state, {
            tabSelect: action.data
        });
    }
}

export default createReducer(initialState, actionHandle);