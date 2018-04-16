import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ToastAndroid
} from 'react-native';

export default class LoginForm extends Component {
  state = {
    username:'',
    password:'',
  }
  //checkDetails password or username check DOESNT WORK!! FIX
  _checkDetails() {
    if(String(this.password) === '123'){
      ToastAndroid.show('Success!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Failed!', ToastAndroid.SHORT);
    }
  }
  //////////////////////////////////////////////////////////////
  render(){
    return(
      <View style={styles.container}>
        <TextInput
        placeholder="Username or Email"
        placeholderTextColor="rgba(255,255,255,0.7)"
        underlineColorAndroid = "transparent"
        onChangeText={(username) => this.setState({username})}
        style={styles.input}/>
        <TextInput
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        underlineColorAndroid = "transparent"
        onChangeText={(password) => this.setState({password})}
        style={styles.input}/>
        <Button onPress={this._checkDetails} title='login'/>
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
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom:20,
    color : '#FFF',
    paddingHorizontal: 10
  }
});
