import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class Cover extends Component<Props> {
  render(){
    return (
      <View style = {styles.container}>
        <Text style = {styles.welcome}>
          THIS IS THE COVERSCREEN FOR ONTRACK!
        </Text>
        <Text style ={styles.instructions}>
          Sorry for shouting...
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b182d',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
