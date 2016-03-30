/**
 * 工具模块的reducers
 */
'use strict';
import createReducer from '../utils/create-reducer';
import {UTILS} from '../config/actionType';
//初始化状态
const initialState = {}

const actionsHandle = {}
export default createReducer(initialState, actionsHandle);

