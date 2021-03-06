import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Cover extends Component<Props> {
  render(){
    return (
      <View style = {styles.container}>
        <Text style = {styles.welcome}>
          ONTRACK
        </Text>
        <Text style ={styles.instructions}>
          Your Best Delivery Pal!
        </Text>
        <View style = {styles.activity}>
          <ActivityIndicator size="large" color="#0be881" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
      backgroundColor : '#1e272e',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    welcome : {
      fontSize : 60,
      color : '#0be881',
      fontFamily:'Quicksand-Regular'
    },
    instructions : {
      fontSize : 20,
      fontFamily:'Quicksand-Light',
      color : '#05c46b',
    },
    activity : {
      padding : 20
    }
});
