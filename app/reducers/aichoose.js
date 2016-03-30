/**
 * 智能选装的reducers
 */
'use strict';
//引入reducer合成器
import createReducer from '../utils/create-reducer';
//引入常量
import {AICHOOSE} from '../config/actionType';

//初始化状态
const initialState = {}

const actionHandle = {}

export default createReducer(initialState, actionHandle);