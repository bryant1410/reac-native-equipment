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

import NavigatorBar from '../components/commons/NavigatorBar';//顶部导航
import BackPress from '../utils/BackPress';//返回键监听

import Index from '../components/aichoose/Index';//首页

var _navigator;//导航栏
export default class Aichoose extends Component {

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

Aichoose.propTypes = {
    actions: PropTypes.object.isRequired
}
