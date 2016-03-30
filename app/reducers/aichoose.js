/**
 * 智能选装的reducers
 */
'use strict';
//引入reducer合成器
import createReducer from '../utils/create-reducer';
//引入常量
import {AICHOOSE} from '../config/actionType';

//初始化状态
const initialState = {
    hasLastResult: true,
    fetchState: '',
    lastResult: {
        id: '',
        time: '',
        match_tag: '',
        similar_tag: [],
        equip_word: [],
        person_slogan: '',
        person_word: [],
    },
    equips: {
        match: [],
        similar: []
    },
    chooseItem: {
        feeling_type: '',
        sex: '',
        weight: '',
        amount: '',
        arch: '',
        spin: '',
        track_type: '',
        price: ''
    }
}

const actionHandle = {}

export default createReducer(initialState, actionHandle);