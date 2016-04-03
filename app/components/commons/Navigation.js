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

import BackPress from '../../utils/BackPress';
import Router from './Router';

export default class Navigation extends Component {
    componentDidMount() {
        BackPress.addListener(this.navigation);
    }

    configureScene(route, routeStact) {
        //如果路由有传 切换方式，则使用
        if (route.configureScene) {
            return route.configureScene;
        } else {
            return Navigator.SceneConfigs.FadeAndroid;
        }
    }

    renderScene(route, navigator) {
        this.router = this.router || new Router(navigator);
        //通过 params传递props
        if (route.component) {
            const MyComponent = route.component;
            return (
                <MyComponent
                    router={this.router}
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

Navigator.propTypes = {}