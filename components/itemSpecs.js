import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ToastAndroid,
  Image,
  Keyboard
} from 'react-native';

export default class itemSpecs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: '',
      cost: 0,
      deliverAddress: '',
      pickupTime: '',
      paymentType:0
    };
  }
  render(){
    return(
      <View style={styles.maincontainer}>
        <View style={styles.row1}>
          <TextInput placeholder='Item Description'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  row1: {
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)'
  }
});
