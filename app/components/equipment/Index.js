/**
 * 装备库首页
 */
'use strict';
import React,{
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text
} from 'react-native';
import CSS_VALUE from '../../config/globalCssValue';
import STYLE_SHEET from '../../config/globalStyleSheet';

import Tabbar from '../commons/Tabbar';//底部
import EquipNav from './EquipNav';//顶部导航

let styles = StyleSheet.create({});
export default class Index extends Component {
    render() {
        const {tabSelect,actions} = this.props;
        return (
            <View style={[STYLE_SHEET.COLUMN_CONTAINER]}>
                <View style={{height:CSS_VALUE.HEIGHT.NAV}}>
                    <EquipNav actions={actions}/>
                </View>
                <View style={{flex:1}}>
                </View>
                <View>
                    <Tabbar selected={tabSelect} actions={actions}/>
                </View>
            </View>
        )
    }
}
Index.propTypes = {}