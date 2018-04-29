import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ToastAndroid,
  Image
} from 'react-native';

export default class LoginFormWrapper extends Component {

  //constructor method, to properly declare all needed variables
  constructor(props) {
    super(props);                                         // grab props from app component, if needed
    this._startSignUp = this._startSignUp.bind(this);
    this._checkDetails = this._checkDetails.bind(this);   // bind method 'this' to component 'this', to reference 'this.state' properly
    this.state = {                                        // declare component state (note use of 'this' keyword)
      username: '',
      password: ''
    };
  }

  _checkDetails() {
    if (String(this.state.username) === 'user' && String(this.state.password) === '123') {          //reference state variable (note use of 'this.state.password', as opposed to 'this.state')
      ToastAndroid.show('Success!', ToastAndroid.SHORT);
      this.props.navigation.navigate('Maps');
    } else {
      ToastAndroid.show('Failed!', ToastAndroid.SHORT);
    }
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
            placeholder="Username or Email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid="transparent"
            onChangeText={(username) => this.setState({ username })}
            style={styles.input} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({ password })}
            style={styles.input} />
          <Button onPress={this._checkDetails} title='login' />
          <Button onPress={this._startSignUp} title='First Time? Sign Up!'
          color = '#05c46b'
          />
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
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
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
