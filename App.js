import React, { Component, PropTypes } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
  Image
} from 'react-native';

import Cover from './components/Cover'
import Googlemap from './components/Googlemap';
import LoginFormWrapper from './components/loginform';
import signupForm from './components/signupForm';

//keep this code for reference
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = StackNavigator(
  {
    Cover: {
      screen: Cover
    },
    LoginForm: {
      screen: LoginFormWrapper
    },
    Maps: {
      screen: Googlemap
    },
    signupForm: {
      screen: signupForm
    }
  },
  {//Hiding the nav bar
    initialRouteName: 'LoginForm',
    headerMode: 'none',
    navigationOptions:{
      headerVisible: false,
    }
  }
);

export default class App extends React.Component {

  state = {
    ready: false,
  }

  componentDidMount() {
    //Splashscreen will disappear after 2 seconds
    setTimeout(() => {
      this.setState({ ready: true })
    }, 2000)
  }
  render() {
    if (this.state.ready === false) {
      return <Cover />
    }
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
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
  loginButton: {
    margin: 60,
    color: '#05c46b'
  },
  loginText: {
    fontSize: 20,
    color: '#1e272e',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200
  }
});
