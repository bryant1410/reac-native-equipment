
'use strict';

import React ,{ Component } from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import Utils from './utils';


class WatchFace extends Component {
    static propTypes ={
        sectionTime : React.PropTypes.string.isRequired,
        totalTime : React.PropTypes.string.isRequired,
    }

    render(){
        const sectionTime = this.props.sectionTime;
        const totalTime = this.props.totalTime;
        return(
            <View>
                <Text>{sectionTime}</Text>
                <Text>{totalTime}</Text>
            </View>
        )
    }
}

class WatchControl extends Component{
    static propTypes ={
        stopWatch : React.PropTypes.func.isRequired,
        clearRecord : React.PropTypes.func.isRequired,
        startWatch : React.PropTypes.func.isRequired,
        addRecord : React.PropTypes.func.isRequired,
    }
    constructor(props){
        super(props);
        this.state={
            watchOn : false,
            startBtnText :"start",
            startBtnColor : "#60b644",
            stopBtnText : "count",
            underlayColor : "#fff",
        }
    }
    _startWatch(){
        console.log("_startWatch");
    }
    _addRecord(){
        console.log("_addRecord");
    }
    render(){
        const {
            watchOn,
            startBtnText,
            startBtnColor,
            stopBtnText,
            underlayColor,
        } = this.state;
        return(
            <View>
                <View>
                    <TouchableHighlight onPress={ ()=>this._addRecord()}>
                        <Text>
                            {stopBtnText}
                        </Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight onPress={ ()=>this._startWatch()}>
                        <Text>
                            {startBtnText}
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

class WatchRecord extends Component {
    static propTypes ={
        record :React.PropTypes.array.isRequired,
    }
    _renderRow(row) {
        return (
            <View>
                <Text>{row.title}</Text>
                <View>
                    <Text>{row.time}</Text>
                </View>
            </View>
        )
    }
    render() {
        let ds = new ListView.DataSource({rowHasChanged : (r1 ,r2) => r1 !== r2});
        let  theDataSource=ds.cloneWithRows(this.props.record);

        return (
            <ListView
                dataSource={theDataSource}
                renderRow={this._renderRow}/>
        )
    }
}

export default class extends Component{
    constructor(){
        super();
        this.state = {
            stopWatch : false,
            resetWatch : true,
            intialTime : 0,
            currentTime : 0 ,
            recordTime : 0,
            timeAccumulation : 0,
            totalTime : "00:00.00",
            sectionTime : "00:00.00",
            recordCounter : 0,
            record :[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
            ]
        }
    }

    componentWillUnmount(){
        this._stopWatch();
        this._clearRecord();
    }

    _startWatch(){
        if(this.state.resetWatch){
            this.setState({
                stopWatch : false,
                resetWatch : false,
                timeAccumulation : 0,
                initialTime : (new Date()).getTime()
            });
        }else{
            this.setState({
                stopWatch : false,
                initialTime : (new Date()).getTime()
            });
        }
    }

    _stopWatch(){

    }

    _addRecord(){

    }
    _clearRecord(){
        this.setState({
            stopWatch : false,
            resetWatch : true,
            intialTime : 0,
            currentTime : 0 ,
            recordTime : 0,
            timeAccumulation : 0,
            totalTime : "00:00.00",
            sectionTime : "00:00.00",
            recordCounter : 0,
            record :[
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
                {title:"",time:""},
            ]
        });
    }

    render(){
        const {
            totalTime ,
            sectionTime,
            record
        } = this.state;

        return (
            <View>
                <WatchFace totalTime={totalTime} sectionTime={sectionTime}></WatchFace>
                <WatchControl addRecord={()=>this._addRecord()}
                    clearRecord={()=>this._clearRecord()}
                    startWatch={()=>this._startWatch()}>
                </WatchControl>
                <WatchRecord record={record}></WatchRecord>
            </View>
        )
    }
}
