/**
 * 智能选装首页
 */
'use strict';
import React,{
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    Image,
    TouchableOpacity,
    Navigator
} from 'react-native';

import CSS_VALUE from '../../config/globalCssValue';
import STYLE_SHEET from '../../config/globalStyleSheet';
import {AICHOOSE_IMG} from '../../config/image';

import Tabbar from '../../components/commons/Tabbar';//底部栏
import Feeling from './Feeling';//跑步目的

import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');

let styles = StyleSheet.create({
    bg: {
        width: width,
        height: height - CSS_VALUE.HEIGHT.TARBAR
    },
    //开始按钮
    btnStart: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStartInner: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: CSS_VALUE.RADIUS,
        backgroundColor: CSS_VALUE.COLORS.MAIN,
    },
    btnStartText: {
        color: CSS_VALUE.COLORS.WHITE,
        fontSize: CSS_VALUE.FONT.H2
    }
});

export default class Index extends Component {

    onStartPress() {
        const {actions,navigator} =this.props;
        navigator.push({
            component: Feeling,
        });
    }

    render() {
        const {actions,tabSelect} =this.props;
        return (
            <View style={STYLE_SHEET.COLUMN_CONTAINER}>
                <View style={{flex:1}}>
                    <Image
                        style={styles.bg}
                        source={AICHOOSE_IMG.BG}
                        resizeMode="cover"
                        />
                    <View style={styles.btnStart}>
                        <TouchableOpacity
                            underlayColor='rgba(0,0,0,0.1)'
                            onPress={()=>{this.onStartPress()}}
                            style={styles.btnStartInner}
                            >
                            <View>
                                <Text style={styles.btnStartText}>马上开始</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Tabbar selected={tabSelect} actions={actions}/>
                </View>
            </View>
        )
    }
}

Index.propTypes = {
    actions: PropTypes.object.isRequired,
    tabSelect: PropTypes.string.isRequired
}