import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import Googlemap from './components/Googlemap';

type Props = {};
export default class Maps extends Component<Props> {
  state ={
    //insert state variables here
  }
  render(){
    return(
      <View style = {styles.backgroundcontainer}>
        <Googlemap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
    position: 'absolute',
    top :0,
    left:0,
    right:0,
    bottom:0,
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor: '#1e272e'
  }
});
