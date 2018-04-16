
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
  Image
} from 'react-native';
import Cover from './Cover'
import LoginForm from './loginform'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    ready:false,
  }

  componentDidMount(){
    //Splashscreen will dissapear after 2 seconds
    setTimeout(()=>{
      this.setState({ ready : true })
    },2000)
  }
  toastUser(){
    ToastAndroid.show('You are a user !', ToastAndroid.SHORT);
  }
  toastDriver(){
    ToastAndroid.show('You are a driver !', ToastAndroid.SHORT);
  }
  render() {
    if (this.state.ready === false){
      return <Cover />
    }
    return (
      <View style = {styles.maincontainer}>
        <View style = {styles.backgroundcontainer}>
        </View>
        <View style = {styles.logocontainer}>
          <Image style = {styles.logo} source = {require('./images/trucking.png')}/>
        </View>
          <LoginForm />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1e272e',
  },
  userlabel:{
    justifyContent: 'center',
    textAlign: 'center',
  },
  logocontainer:{
    flex: 2.5,
    alignItems: 'center',
    marginBottom : 60,
    marginLeft : 20,
    marginRight : 20,
    flexGrow :1,
    justifyContent : 'center'
  },
  maincontainer:{
    flex:1,
    backgroundColor : '#1e272e',
  },
  loginButton:{
    margin : 60,
    color : '#05c46b'
  },
  loginText:{
    fontSize : 20,
    color : '#1e272e',
    fontWeight : 'bold',
  },
  logo:{
    width:200,
    height:200
  }
});
