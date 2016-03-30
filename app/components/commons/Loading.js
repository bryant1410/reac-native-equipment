/**
 * 底部加载loading
 */
'use strict'
import React ,{
    Component,
    View,
    Text,
    StyleSheet,
    ProgressBarAndroid
} from 'react-native';

import STYLE_SHEET from '../../config/globalStyleSheet';
import CSS_VALUE from '../../config/globalCssValue';

let styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:CSS_VALUE.GB_COLORS.MAIN,
    },
    progress:{
      marginRight:10
    },
    text: {
        fontSize: CSS_VALUE.FONT.H3,
        color: CSS_VALUE.COLORS.H4
    }
})

export default class Loading extends Component {
    render() {
        return (
            <View style={[STYLE_SHEET.CENTER_CONTAINER,styles.container]}>
                <ProgressBarAndroid style={styles.progress} color={CSS_VALUE.COLORS.MAIN} styleAttr="Small"/>
                <Text style={styles.text}>加载中...</Text>
            </View>
        )
    }
}
Loading.propTypes = {}
