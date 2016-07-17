'use strict';
import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  DeviceEventEmitter,
  NavigatorIOS,
  ScrollView,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Utils from './view/utils';

import Day1 from './view/day1';

class MainView extends Component{
    constructor(){
        super();
        this.state={
            days:[
                {
                    key : 0,
                    title : 'A stopwatch',
                    component : Day1,
                    color : '#ff856c',
                    hideNav : false
                }
            ]
        }
    }
    componentDidMount(){

    }
    _jumpToDay(index){
        this.props.navigator.push({
            title : this.state.days[index].title,
            component : this.state.days[index].component,
            navigationBarHidden : this.state.days[index].hideNav,
        });
    }
    render(){
        const that = this;
        const boxs = that.state.days.map( (elem , index)=>{
            return(
                <TouchableHighlight key={elem.key}
                    style={[styles.touchBox],index%3 ==2?styles.touchBox2 : styles.touchBox1 }
                    underlayColor='#eee'
                    onPress={()=>that._jumpToDay(index)}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxText}>
                            Day{index + 1}
                        </Text>
                    </View>
                </TouchableHighlight>
            )
        });

        return (
            <View>
                <StatusBar hidden={true} />
                <ScrollView>
                    <Swiper height={150}
                        showsButtons={false}
                        autoplay={true}>
                        <TouchableHighlight onPress={()=> that._jumpToDay(0)}>
                            <View style={styles.slide}>
                                <Text style={styles.slideText}>测试</Text>
                            </View>
                        </TouchableHighlight>
                    </Swiper>
                    <View style={styles.touchBoxContainer}>
                        {boxs}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

class ThirtyDaysOfReactNative extends Component{
    componentDidMount(){
    }
    render(){
        return (
            <NavigatorIOS
                ref ='nav'
                style ={styles.container}
                initialRoute ={
                    {
                        title : "30 Days of RN",
                        component :  MainView,
                        backgroundColor : 'back',
                        shadowHidden : true,
                    }
                }
                itemWrapperStyle = {styles.itemWrapper}
                tintColor = "#777"
            />
        )
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchBox:{
      width : Utils.size.width / 3 - Utils.size.pixel,
      height : Utils.size.width / 3,
      backgroundColor : "red",
      borderBottomWidth : Utils.pixel,
      borderBottomColor : '#ccc',
  },
  touchBox1:{
      borderRightWidth : Utils.pixel,
      borderRightColor : '#ccc',
  },
  touchBox2 : {
      borderLeftWidth : Utils.pixel,
      borderLeftColor : '#ccc',
  },
  boxContainer:{
      alignItems :'center',
      justifyContent : 'center',
      width : Utils.size.width / 3,
      height : Utils.size.width /3
  },
  boxText:{
      position : "absolute",
      bottom : 15 ,
      width : Utils.size.width / 3,
      textAlign : "center",
      left : 0 ,
      backgroundColor : "transparent"
  },
  slide :{
      flex:1,
      height : 150,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor :'#eee'
  },
  slideText :{
      position :'absolute',
      bottom : 0,
      paddingTop : 5,
      paddingBottom : 5,
      backgroundColor : "rgba(255,255,255,0.5)",
      width : Utils.size.width ,
      textAlign : 'center',
      fontSize :12
  },
  itemWrapper:{
      backgroundColor : '#f3f3f3'
  }
});

AppRegistry.registerComponent('equipment', () => ThirtyDaysOfReactNative);
