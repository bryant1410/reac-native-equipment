/**
 * 自定义导航，
 * 封装导航后，通过 Router 管理所有页面。
 * router.toXXX(params);
 */
import React,{
    Component,
    StyleSheet,
    PropTypes,
    View,
    Navigator
} from 'react-native';

import BackPress from './BackPress';
import Router from './Router';

export default class Navigation extends Component {
    componentDidMount() {
        //安卓返回键事件监听
        this.backPress = new BackPress(this.navigation);
    }
    componentWillUnmount(){
        //解除安卓返回键监听事件
        this.backPress.removeListener();
    }
    /**
     * 路由转跳的效果，默认是FadeAndroid
     */
    configureScene(route, routeStact) {
        //如果路由有传 切换方式，则使用
        if (route.configureScene) {
            return route.configureScene;
        } else {
            return Navigator.SceneConfigs.FadeAndroid;
        }
    }

    /**
     * 渲染视图，传递props
     */
    renderScene(route, navigator) {
        this.router = this.router || new Router(navigator);
        //把actions直接传递给每个通过路由转跳的页面，其他参数则通过  route.params传递，它可覆盖actions
        this.actions = this.actions || route.params.actions;
        if (route.component) {
            const MyComponent = route.component;
            return (
                <MyComponent
                    router={this.router}
                    actions={this.actions}
                    {...route.params}
                    />
            )
        }
    }

    render() {
        const {initialRoute} = this.props;
        return (
            <Navigator
                ref={view => this.navigation = view}
                initialRoute={initialRoute}
                navigationBar={<View></View>}
                configureScene={this.configureScene.bind(this)}
                renderScene={this.renderScene.bind(this)}
                />
        )
    }
}

Navigator.propTypes = {
    initialRoute:PropTypes.object.isRequired
}