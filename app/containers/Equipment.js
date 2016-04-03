/**
 * 装备库页面
 */
'use strict'

import React,{
    Component,
    PropTypes,
    StyleSheet,
    View,
    Text,
    Navigator
} from 'react-native';

import Navigation from '../components/commons/Navigation';//顶部导航
import Index from '../components/equipment/Index';//首页

let styles = StyleSheet.create({});

export default class Equipment extends Component {
    render() {
        return (
            <Navigation
                initialRoute={{component:Index,params:{...this.props}}}
                />
        )
    }
}

Equipment.PropTypes = {
    actions: PropTypes.object.isRequired,
    tabSelect: PropTypes.object.isRequired
};

