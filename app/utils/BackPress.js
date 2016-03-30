/**
 * 监听安卓的返回键，连续点击返回可退出
 */

'use strict';
import React,{
    BackAndroid
} from 'react-native';

const BackPress ={
	//传入 _navigator
    addListener(_navigator){
    	var isSecondPress = false;//是否第二次点击
        BackAndroid.removeEventListener('hardwareBackPress');
        BackAndroid.addEventListener('hardwareBackPress',function(){
        	//如果nav存在且栈长大于1，则返回上一层
        	if(_navigator && _navigator.getCurrentRoutes().length >1){
        		_navigator.pop();
        		return true;
        	}else{
        		if(isSecondPress){
        			BackAndroid.exitApp();
        		}
        		isSecondPress = true;
        		//2秒后把isSecondPress设置回false
        		setTimeout(()=>{
        			isSecondPress = false;
        		}, 2000);
        		return true;
        	}
        });
    }
}

export default BackPress;