import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
  Image
} from 'react-native';

import firebase from 'react-native-firebase';
import login from './loginform'

export default class signupForm extends Component {

  //constructor method, to properly declare all needed variables
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);                                        // grab props from app component, if needed
    this.state = {                                        // declare component state (note use of 'this' keyword)
      username: '',
      password: ''
    };
  }

  signUp(){
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).then(this.props.navigation.navigate('login'))
    console.log(this.state.username);
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.backgroundcontainer}>
        </View>
        <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('./trucking.png')} />
        </View>
        <View style={styles.container}>
          <TextInput
            placeholder="Username or Email"
            placeholderTextColor="rgba(0,0,0,1)"
            //underlineColorAndroid="transparent"
            onChangeText={(username) => this.setState({ username })}
            style={styles.input} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(0,0,0,1)"
            //underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({ password })}
            style={styles.input} />
          <TouchableOpacity onPress={this.signUp} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  backgroundcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  userlabel: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
  logocontainer: {
    flex: 2.5,
    alignItems: 'center',
    marginBottom: 60,
    marginLeft: 20,
    marginRight: 20,
    flexGrow: 1,
    justifyContent: 'center'
  },
  maincontainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 200,
    height: 200
  },
  buttonText:{
       color: '#fff',
       textAlign: 'center',
       fontWeight: '700'
   }
});
