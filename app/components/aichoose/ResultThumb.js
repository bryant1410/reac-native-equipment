/**
 * 选装结果缩略图
 * 用于展示上一次选装结果
 */
import React,{
    Component,
    View,
    StyleSheet,
    PropTypes,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import CSS_VALUE from '../../config/globalCssValue';
import STYLE_SHEET from '../../config/globalStyleSheet';

import Result from './Result';//选装结果页

let styles = StyleSheet.create({
    container: {
        height: 120,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: CSS_VALUE.GB_COLORS.RGBA_WHITE
    },
    //图片
    thumbImage: {
        width: 100,
        height: 100,
        backgroundColor: CSS_VALUE.COLORS.SECOND
    },
    tz: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    }
});


export default class ResultThumb extends Component {
    //渲染特征标签
    renderTag(tag) {
        return (
            <View key={tag}
                  style={{height:20,marginRight:10}}>
                <Text style={{fontSize:CSS_VALUE.FONT.H4,color:CSS_VALUE.COLORS.H4}}>
                    {tag}
                </Text>
            </View>
        )
    }

    onPress() {
        const {navigator} = this.props;
        navigator.push({
            component:Result
        })
    }

    //获取第一出线的跑鞋的信息
    getFirstEquip() {
        const {equips} = this.props;
        const {match , similar} = equips;
        let equip;
        if (match.length > 0) {
            equip = match[0];//匹配的鞋
        } else if (similar.length > 0) {
            equip = similar[0];//模糊的鞋
        } else if (match.length == 0 && similar.length == 0) {
            //这里表示没有匹配的鞋，应该是数据出错了
            //fixme
            console.log('getFirstEquip');
        }
        return equip;
    }

    render() {
        const {lastResult} = this.props;
        const {id,time,equip_word , person_word} = lastResult;
        let suit_word = equip_word[0] + equip_word[1];//中级缓震型
        let equip = this.getFirstEquip();//装备

        return (
            <View>
                <View>
                    <Text>上一次选装结果</Text>
                </View>
                <TouchableOpacity
                    onPress={()=>this.onPress(id)}
                    style={[STYLE_SHEET.ROW_CONTAINER,styles.container]}>
                    <View style={[STYLE_SHEET.CENTER_CONTAINER,styles.thumbImage]}>
                        <Text>图</Text>
                    </View>
                    <View style={[STYLE_SHEET.COLUMN_CONTAINER,styles.tz]}>

                        <View style={{marginBottom:10}}>
                            <Text style={{fontSize:CSS_VALUE.FONT.h2}}>您的特征是</Text>
                        </View>

                        <View style={[{flexDirection: 'row',flexWrap:'wrap'}]}>
                            {person_word.map(tag=>this.renderTag(tag))}
                        </View>

                        <View style={[{marginTop:10,flexDirection: 'row'}]}>
                            <View>
                                <Text>{suit_word}</Text>
                            </View>
                            <View style={{position:'absolute',bottom:0,right:0}}>
                                <Text>{time}</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

ResultThumb.propTypes = {
    lastResult: PropTypes.object.isRequired,
    equips: PropTypes.object.isRequired
}
