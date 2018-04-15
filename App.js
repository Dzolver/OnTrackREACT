
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
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

  render() {
    if (this.state.ready === false){
      return <Cover />
    }
    return (
      <View style = {styles.backgroundcontainer}>
        <Text style = {styles.welcome}>
          Welcome
        </Text>
        <Text style = {styles.userlabel}>
          Are you a User?
        </Text>
        <Text style = {styles.userlabel}>
          Are you a Driver?
        </Text>
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
    fontSize: 20,
    justifyContent: 'flex-start',
    textAlign: 'center',
    color : '#05c46b',
  },
  userlabel:{
    justifyContent: 'center',
    textAlign: 'center',
  }
});
