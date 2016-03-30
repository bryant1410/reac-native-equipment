/**
 * style_sheet
 */
import React,{
    StyleSheet
} from 'react-native';

const STYLE_SHEET = StyleSheet.create({
    //水平容器
    ROW_CONTAINER: {
        flex: 1,
        flexDirection: 'row'
    },
    //垂直容器
    COLUMN_CONTAINER: {
        flex: 1,
        flexDirection: 'column'
    },
    //居中容器
    CENTER_CONTAINER: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    //水平居中容器
    ROW_CENTER_CONTAINER: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //垂直居中容器
    COLUMN_CENTER_CONTAINER: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default  STYLE_SHEET;