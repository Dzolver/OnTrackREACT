import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default class LoginForm extends Component {
  render(){
    return(
      <View style={styles.container}>
        <TextInput
        placeholder="Username or Email"
        placeholderTextColor="rgba(255,255,255,0.7)"
        underlineColorAndroid = "transparent"
        style={styles.input}/>
        <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        underlineColorAndroid = "transparent"
        style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    padding: 20
  },
  input: {
    height : 40,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginBottom:20,
    color : '#FFF',
    paddingHorizontal: 10
  }
});
