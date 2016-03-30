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

import NavigatorBar from '../components/commons/NavigatorBar';//顶部导航
import BackPress from '../utils/BackPress';//返回键监听

import Index from '../components/equipment/Index';//首页

let styles = StyleSheet.create({});

var _navigator;//导航栏
export default class Equipment extends Component {
    componentDidMount() {
        BackPress.addListener(_navigator);
    }

    //渲染首页
    renderScene(route, navigator) {
        _navigator = navigator;
        if (route.component) {
            const MyComponent = route.component;
            return (
                <MyComponent
                    navigator={navigator}
                    route={route}
                    {...this.props}
                    {...route.params}/>
            )
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{component:Index}}
                navigationBar={<NavigatorBar/>}
                configureScene={(route,routeStack)=>Navigator.SceneConfigs.FadeAndroid}
                renderScene={ this.renderScene.bind(this)}
                />
        )
    }
}

Equipment.PropTypes = {
    actions: PropTypes.object.isRequired,
    tabSelect: PropTypes.object.isRequired
};

