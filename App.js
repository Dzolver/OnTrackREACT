
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
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Hi there! Welcome to OnTrack, your best delivery friend!</Text>
        <Text style={styles.instructions}>
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
