/**
 * 路由配置类
 */
'use strict';

import Feeling from '../aichoose/ChooseFeeling';//跑步目的
import Result from '../aichoose/Result';//选装结果页


export default class Router {
    constructor(navigator) {
        this.navigator = navigator;
    }

    /**
     * 弹出
     */
    pop() {
        this.navigator.pop();
    }

    //params是个对象
    toChooseFeeling(params) {
        this.navigator.push({
            component: Feeling,
            params: params
        })
    }

    toResult(params) {
        this.navigator.push({
            component: Result,
            params: params
        })
    }
}