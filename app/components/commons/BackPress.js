/**
 * 监听安卓的返回键，连续点击返回可退出
 */

'use strict';
import React,{
    BackAndroid,
    ToastAndroid
} from 'react-native';

export default class BackPress {
    // 构造
    constructor(_navigator) {
        this._navigator = _navigator;
        this.addListener();
    }

    addListener() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }

    removeListener() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid = () => {
        //return false 将会退出应用
        //return ture 则正常操作
        //如果 navigator的route有传ignoreBack，则忽略返回，如果有有传handleBack，则执行handleBack，否则返回上一层
        const nav = this._navigator;
        const routes = nav.getCurrentRoutes();
        if (nav && routes.length > 1) {
            const top = routes[routes.length - 1];
            //忽略返回
            if (top.component.ignoreBack) {
                return true;
            }
            //处理返回键
            const handleBack = top.component.handleBack;
            if (handleBack) {
                return handleBack();
            }
            //正常返回上一层
            nav.pop();
            return true;

        } else {
            //根据当前页面需要决定做什么操作
            if (this.lastBackPressTime && this.lastBackPressTime + 2000 >= Date.now()) {
                BackAndroid.exitApp();
                return false;
            }
            ToastAndroid.show('再次点击返回关闭应用', ToastAndroid.SHORT);
            this.lastBackPressTime = Date.now();
            return true;
        }
    };
}
