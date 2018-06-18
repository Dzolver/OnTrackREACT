import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import firebase from "firebase";
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

export default class signupForm extends Component {

  //constructor method, to properly declare all needed variables
  constructor(props) {
    super(props);                                         // grab props from app component, if needed
    this._signUpUser = this._signUpUser.bind(this);
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

  _signUpUser() {
    var email = this.state.email;
    var password = this.state.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        Keyboard.dismiss();
        this.props.navigation.navigate('Maps');
      })
      .catch((error) => {
        // Handle errors here
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log('Firebase Error: ' + errorCode + ": " + errorMessage);
        ToastAndroid.show('Error: ' + errorMessage, ToastAndroid.LONG);
      });
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
            placeholderTextColor="rgba(0,0,0,1)"
            //underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({ email })}
            style={styles.input} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(0,0,0,1)"
            //underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({ password })}
            style={styles.input} />
          <TouchableOpacity style={styles.buttonContainer} onPress={this._signUpUser}>
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
  buttonContainer: {
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});
