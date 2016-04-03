/**
 * 智能选装结果
 */
'use strict';
import React,{
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text
} from 'react-native';

let styles = StyleSheet.create({});

export default class Result extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <Text>这就是结果</Text>
            </View>
        )
    }
}

Result.propTypes = {}