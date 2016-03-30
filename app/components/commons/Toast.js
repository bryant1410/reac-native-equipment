/**
 * 安卓的简短提示
 */
'use strict'
import React ,{
    ToastAndroid
} from 'react-native';

const Toast = {
    showLong(text){
        ToastAndroid.show(text, ToastAndroid.LONG);
    },
    showShort(text){
        ToastAndroid.show(text, ToastAndroid.SHORT);
    }
}
export default Toast;