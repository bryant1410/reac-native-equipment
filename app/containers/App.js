/**
 * App进入总逻辑
 */

'use strict'
import React ,{
    Component,
    View,
    Text,
    PropTypes,
} from 'react-native';
/**
 * 通过 react-redux 提供的 connect() 方法，将包装好的组件连接到Redux
 * 任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法作为组件的props,
 * 以及得到全局 state 中所需要的任何内容
 *
 * connect 的唯一参数是 selector。
 *
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
 * 加载所有action.
 * Action 是把数据从应用传送到 store 的载体。它是store数据的唯一来源。
 * 一般来说会通过 store.dispatch() 将 action 传送到 store。
 */
import allActions from '../actions';

import STYLE_SHEET from '../config/globalStyleSheet';
import CSS_VALUE from '../config/globalCssValue';

import Splash from './Splash';//闪屏
import Aichoose from './Aichoose';//智能选装
import Equipment from './Equipment';//装备库
import Utils from './Utils';//工具
import About from './About';//关于

//热更新
import codePush from 'react-native-code-push';

class App extends Component {
    constructor(props) {
        super(props);
    }

    //在这里判断是否第一次进来，是则展示 Intro
    componentDidMount() {
        codePush.checkForUpdate()
            .then((update) => {
                if (!update) {
                    console.log("The app is up to date!");
                } else {
                    console.log("An update is available! Should we download it?");
                    codePush.sync();
                }
            });
    }

    render() {
        //从reducer中获取应用的状态
        const {application,actions,aichoose} = this.props;
        const {isShowSplash,tabSelect} =application;
        //是否显示闪屏
        if (isShowSplash) {
            return (
                <Splash actions={actions}></Splash>
            );
        }

        return (
            <View style={{flex:1}}>
                {tabSelect == 'aichoose' &&
                <Aichoose {...aichoose} actions={actions} tabSelect={tabSelect}/>
                }
                {tabSelect == 'equipment' &&
                <Equipment actions={actions} tabSelect={tabSelect}/>
                }
                {tabSelect == 'utils' &&
                <Utils actions={actions}/>
                }
                {tabSelect == 'about' &&
                <About actions={actions}/>
                }
            </View>
        )
    }
}
App.propTypes = {
    application: PropTypes.object.isRequired,//系统的公共装备
    actions: PropTypes.object.isRequired,//行为
}
/**
 *  connect 的第一个参数，返回一个纯对象
 * 这里其实就是把整个应用的state都列出来
 */
function mapStateToProps(state) {
    return {
        application: {
            isShowSplash: state.application.isShowSplash,
            tabSelect: state.application.tabSelect
        },
        aichoose:state.aichoose
    }
}

function mapDispatchToProps(dispatch) {
    return {
        /**
         * bindActionCreators 把 action creators 转成拥有同名Keys的对象，
         * 但使用 dispatch把每个action 包围起来，这样可以直接使用他们。
         * 唯一使用 bindActionCreators的场景是
         * 当需要把action creator往下传到一个组件上，缺不想让这个组件觉察到Redux的存在，
         * 即是不希望把redux store 和 dispatch 传给它。
         */
        actions: bindActionCreators(allActions, dispatch)
    }
}
/**
 * connect 函数将会调用两次，第一次是设置参数，第二次是组件与 redux store 连接。
 * connect 不会修改过传入的React组件，返回的是一个新的与redux store 连接的组件。
 *
 * connect的第一个参数，组件将会监听 Redux store的变化。
 * 任何时候，只要 redux store 发生变化，该函数就会被用，
 * 该回调函数必须返回一个纯对象，这个对象就与组件的props合并。
 *
 * connect的第二个参数，如果传递的是一个函数，
 * 该函数将会接受一个 dispatch 函数，然后自行放回一个对象。
 * 这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起 （ bindActionCreators）
 * 如果忽略了这个参数，dispatch会注入到组件的props中。
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)