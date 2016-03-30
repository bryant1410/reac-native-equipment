/**
 * 装备分类
 */
'use strict';
import React,{
    Component,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import CSS_VALUE from '../../config/globalCssValue';
import STYLE_SHEET from '../../config/globalStyleSheet';
import {EQUIP_IMG} from '../../config/image';

import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');

const itemWidth = width / 3;
const cHeight = itemWidth * 2;

let styles = StyleSheet.create({
    shoesC: {
        width: itemWidth,
        height: cHeight,
        borderTopWidth: 1,
        borderTopColor: CSS_VALUE.COLORS.WHITE
    },
    shoes: {
        width: itemWidth,
        height: cHeight,
    },
    otherC: {
        width: cHeight,
        height: cHeight,
    },
    itemC: {
        width: itemWidth,
        height: itemWidth,
        borderLeftWidth: 1,
        borderLeftColor: CSS_VALUE.COLORS.WHITE,
        borderTopWidth: 1,
        borderTopColor: CSS_VALUE.COLORS.WHITE
    },
    item: {
        width: itemWidth,
        height: itemWidth,
    }
});
export default class EquipCate extends Component {
    onPress(cate) {

    }

    render() {
        return (
            <View style={[STYLE_SHEET.ROW_CONTAINER,{height:itemWidth*2}]}>
                <View style={styles.shoesC}>
                    <TouchableOpacity onPress={()=>{this.onPress()}}>
                        <Image
                            source={EQUIP_IMG.SHOES}
                            style={styles.shoes}
                            resizeMode="cover"
                            />
                    </TouchableOpacity>
                </View>
                <View style={[STYLE_SHEET.COLUMN_CONTAINER,styles.otherC]}>
                    <View style={[STYLE_SHEET.ROW_CONTAINER]}>
                        <View style={styles.itemC}>
                            <TouchableOpacity>
                                <Image
                                    source={EQUIP_IMG.CLOTHES}
                                    style={styles.item}
                                    resizeMode="cover"
                                    />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemC}>
                            <TouchableOpacity>
                                <Image
                                    source={EQUIP_IMG.TROUSERS}
                                    style={styles.item}
                                    resizeMode="cover"
                                    />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[STYLE_SHEET.ROW_CONTAINER]}>
                        <View style={styles.itemC}>
                            <TouchableOpacity>
                                <Image
                                    source={EQUIP_IMG.HAT}
                                    style={styles.item}
                                    resizeMode="cover"
                                    />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemC}>
                            <TouchableOpacity>
                                <Image
                                    source={EQUIP_IMG.SOCKS}
                                    style={styles.item}
                                    resizeMode="cover"
                                    />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

EquipCate.propTyps = {}
