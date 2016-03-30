/**
 * 关于模块入口
 */
'use strict'
import React,{
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
} from 'react-native';
let styles = StyleSheet.create({})
export default class About extends Component {
    render() {
        return (
            <View>
                <Text>关于</Text>
            </View>
        )
    }
}
About.propTypes = {}
