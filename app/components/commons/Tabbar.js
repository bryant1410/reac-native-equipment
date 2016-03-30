/**
 * 底部切换栏
 */
'use strict'
import React,{
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import STYLE_SHEET from '../../config/globalStyleSheet';
import CSS_VALUE from '../../config/globalCssValue';

let styles = StyleSheet.create({
    container: {},
    items: {
        borderTopWidth: 1,
        borderColor: CSS_VALUE.COLORS.LINE,
        height: CSS_VALUE.HEIGHT.TARBAR,
        backgroundColor: CSS_VALUE.COLORS.WHITE
    },
    item_text: {
        color: CSS_VALUE.COLORS.H3,
        fontSize: CSS_VALUE.FONT.H3
    },
    //激活的面板
    active: {
        //borderColor: CSS_VALUE.COLORS.MAIN,
        //backgroundColor: CSS_VALUE.COLORS.MAIN,
    },
    //激活的文字
    active_text: {
        color: CSS_VALUE.COLORS.MAIN
    }
});

export default class Tabbar extends Component {
    //面板选中事件
    onItemPress(selected) {
        const {actions} =this.props;
        actions.selectTab(selected);
    }

    render() {
        const {selected} = this.props;//选中的面板
        return (
            <View style={[STYLE_SHEET.ROW_CENTER_CONTAINER,styles.container]}>
                <TouchableHighlight
                    underlayColor='rgba(0,0,0,0.1)'
                    onPress={()=>{this.onItemPress('aichoose')}}
                    style={[STYLE_SHEET.COLUMN_CENTER_CONTAINER,styles.items,selected =='aichoose' ?styles.active:'']}>
                    <View>
                        <Text style={[styles.item_text,selected =='aichoose'?styles.active_text:'']}>
                            智能选装
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='rgba(0,0,0,0.1)'
                    onPress={()=>{this.onItemPress('equipment')}}
                    style={[STYLE_SHEET.COLUMN_CENTER_CONTAINER,styles.items,selected =='equipment' ?styles.active:'']}>
                    <View>
                        <Text style={[styles.item_text,selected =='equipment'?styles.active_text:'']}>
                            装备库
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='rgba(0,0,0,0.1)'
                    onPress={()=>{this.onItemPress('utils')}}
                    style={[STYLE_SHEET.COLUMN_CENTER_CONTAINER,styles.items,selected =='utils' ?styles.active:'']}>
                    <View>
                        <Text style={[styles.item_text,selected =='utils'?styles.active_text:'']}>
                            工具
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='rgba(0,0,0,0.1)'
                    onPress={()=>{this.onItemPress('about')}}
                    style={[STYLE_SHEET.COLUMN_CENTER_CONTAINER,styles.items,selected =='about' ?styles.active:'']}>
                    <View>
                        <Text style={[styles.item_text,selected =='about'?styles.active_text:'']}>
                            关于
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

Tabbar.propTypes = {
    'actions': PropTypes.object.isRequired,
    'selected': PropTypes.oneOf(['aichoose', 'equipment', 'utils', 'about']).isRequired//选择的面板
}
