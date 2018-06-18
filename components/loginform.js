import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import firebase from "firebase";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ToastAndroid,
  Image,
  Keyboard
} from 'react-native';

export default class LoginFormWrapper extends Component {

  //constructor method, to properly declare all needed variables
  constructor(props) {
    super(props);                                         // grab props from app component, if needed
    this._startSignUp = this._startSignUp.bind(this);
    this._checkDetails = this._checkDetails.bind(this);   // bind method 'this' to component 'this', to reference 'this.state' properly
    this.state = {                                        // declare component state (note use of 'this' keyword)
      email: '',
      password: ''
    };

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB_hrKRJIaI1zcFOQxzZk0wvgEMIyvXIuU",
      authDomain: "ontrack-4abe4.firebaseapp.com",
      databaseURL: "https://ontrack-4abe4.firebaseio.com",
      projectId: "ontrack-4abe4",
      storageBucket: "ontrack-4abe4.appspot.com",
      messagingSenderId: "548127757775"
    };
    if (!firebase.apps.length) {                          // if firebase has not already been initialised
      firebase.initializeApp(config);                     // initialise firebase
    }
  }

  _checkDetails() {
    var email = this.state.email;
    var password = this.state.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        Keyboard.dismiss();
        this.props.navigation.navigate('Maps');
      })
      .catch(function (error) {
        // Handle errors here
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log('Firebase Error: ' + errorCode + ": " + errorMessage);
        ToastAndroid.show('Error: ' + errorMessage, ToastAndroid.LONG);
      });
  }

  _startSignUp() {
    this.props.navigation.navigate('signupForm');
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
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({ email })}
            style={styles.input} />
        </View>
        <View style={styles.container}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            style={styles.input} />
        </View>

        <View style={{ marginBottom: 10, marginHorizontal: 40 }}>
          <Button onPress={this._checkDetails} title='login' />
        </View>
        <View style={{ marginBottom: 30, marginHorizontal: 40 }}>
          <Button onPress={this._startSignUp} title='First Time? Sign Up!' color='#05c46b' />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    backgroundColor: '#07070740',
    color: '#FFF',
    borderRadius: 20,
    width: 270,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontFamily: 'Quicksand-Light'
  },
  backgroundcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1e272e',
  },
  userlabel: {
    justifyContent: 'center',
    textAlign: 'center',
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
    backgroundColor: '#1e272e',
  },
  logo: {
    width: 200,
    height: 200
  }
});
