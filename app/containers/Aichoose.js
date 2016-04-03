/**
 * 智能选装入口
 */
'use strict'
import React,{
    Component,
    StyleSheet,
    PropTypes,
    Navigator
} from 'react-native';

import Navigation from '../components/commons/Navigation';//顶部导航

import Index from '../components/aichoose/Index';//首页

export default class Aichoose extends Component {

    render() {
        return (
            <Navigation
                initialRoute={{component:Index,params:{...this.props}}}
                />
        )
    }
}

Aichoose.propTypes = {
    actions: PropTypes.object.isRequired
}
