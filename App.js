import React, {Component} from"react"
import {View, Text} from"react-native"
import HomeScreen from "./screens/home";

export default class BrawlApp extends Component{
  render(){
    return(<View><HomeScreen/></View>);
  }
}