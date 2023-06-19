import React, {Component} from"react"
import {View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet} from"react-native"

export default class HomeScreen extends Component{
  render(){
    return(<View style={styles.quadroPrincipal}><ImageBackground source={require("../assets/teladefundobrawl.png")} style={styles.background}>
        <TouchableOpacity style={styles.stylebutton}><Text>Brawlers</Text></TouchableOpacity></ImageBackground></View>);
  }
} const styles=StyleSheet.create({quadroPrincipal:{
    flex: 1
}, background:{
    flex: 1,
    width: 400
}, stylebutton:{
    alignSelf: "center",
    backgroundColor: "#FFFFFF"
}})