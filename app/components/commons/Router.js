/**
 * 路由配置类
 */
'use strict';
import {Navigator} from 'react-native';
//智能选装
import Feeling from '../aichoose/ChooseFeeling';//跑步目的
import Result from '../aichoose/Result';//选装结果页
//装备库
//工具
//关于

export default class Router {
    constructor(navigator) {
        this.navigator = navigator;
    }

    /**
     * 弹出当前
     */
    pop() {
        this.navigator.pop();
    }

    /**
     * 弹到最初
     */
    popToTop(){
        this.navigator.popToTop();
    }
    //params是个对象
    toChooseFeeling(params) {
        this.navigator.push({
            component: Feeling,
            params: params,
            sceneConfig: Navigator.SceneConfigs.FadeAndroid
        })
    }

    toResult(params) {
        this.navigator.push({
            component: Result,
            params: params
        });
    }
}