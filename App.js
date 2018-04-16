
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
} from 'react-native';
import Cover from './Cover'


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
          <Text style = {styles.welcome}>
            Welcome
          </Text>
        </View>
        <View style ={styles.logincontainer}>
            <Text style = {styles.userlabel}>
              Are you a User?
            </Text>
            <Button style = {styles.loginButton} title = 'user'>
              <Text style ={styles.loginText}>
                USER
              </Text>
            </Button>
            <Text style = {styles.userlabel}>
              Are you a Driver?
            </Text>
            <Button style = {styles.loginButton} title = 'driver'>
              <Text style ={styles.loginText}>
                DRIVER
              </Text>
            </Button>
          </View>
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
  welcome: {
    marginTop: 60,
    fontSize: 20,
    justifyContent: 'flex-start',
    textAlign: 'center',
    color : '#05c46b',
  },
  userlabel:{
    justifyContent: 'center',
    textAlign: 'center',
  },
  logincontainer:{
    flex: 2.5,
    alignItems: 'center',
    backgroundColor: '#485460',
    marginBottom : 60,
    marginLeft : 20,
    marginRight : 20,
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
  }
});
