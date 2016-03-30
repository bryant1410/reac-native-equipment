/**
 * 装备库首页导航栏
 */
'use strict'
import React,{
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import CSS_VALUE from '../../config/globalCssValue';
import STYLE_SHEET from '../../config/globalStyleSheet';

let styles = StyleSheet.create({
    container: {
        flex: 1,
        height:CSS_VALUE.HEIGHT.NAV,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:CSS_VALUE.GB_COLORS.MAIN,
        borderBottomWidth:1,
        borderBottomColor:CSS_VALUE.COLORS.LINE
    },
    searchInput: {
        borderWidth: 1,
        borderColor: CSS_VALUE.COLORS.LINE,
        borderRadius: 16,
        height:30,
        justifyContent:'center'
    },
    text:{
        marginLeft:10,

    }
})

export default class EquipNav extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchInput}>
                    <Text style={styles.text}>万能的搜索</Text>
                </View>
            </View>
        )
    }
}

EquipNav.propTypes = {}
