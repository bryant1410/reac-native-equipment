/**
 * 跑步目的
 */
'use strict';
import React,{
    Component,
    View,
    Text,
    StyleSheet,
    PropTypes
} from 'react-native';

export default class Feeling extends Component {
    render() {
        console.log('FeelingProps',this.props);
        return (
            <View>
                <Text>HELLO</Text>
            </View>
        )
    }
}
Feeling.propTypes = {}
