/**
 * 闪屏入口
 */
'use strict'
import React,{
    Component,
    View,
    Text,
    StyleSheet,
    InteractionManager,
    PropTypes
} from  'react-native';
let style = StyleSheet.create({})
export default class Splash extends Component {
    componentDidMount() {
        const {actions} = this.props;
        //设置三秒后，闪屏消失
        setTimeout(()=> {
            //在所有交互结束后进行
            InteractionManager.runAfterInteractions(()=> {
                actions.closeSplashScreen();
            });
        }, 1000);
    }

    render() {
        return (
            <View>
                <Text>1秒后，这个闪屏将会消失</Text>
            </View>
        )
    }
}
Splash.propTypes = {
    actions: PropTypes.object.isRequired
}
