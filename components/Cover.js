import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Cover extends Component<Props> {
  render(){
    return (
      <View style = {styles.container}>
        <Text style = {styles.welcome}>
          OnTrack
        </Text>
        <Text style ={styles.instructions}>
          Your Best Delivery Pal!
        </Text>
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
      fontWeight : 'bold',
    },
    instructions : {
      fontSize : 20,
      color : '#05c46b',
    }
});
