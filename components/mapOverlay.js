import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, Button, TextInput, Select, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MapOverlay extends Component {
  constructor(props) {
    super(props);
    this.orderCar = this.orderCar.bind(this);
    this.state = {
      mapRegion: null,
      lastLat: 0,
      lastLong: 0,

      pickupItem: null,
      cost: 0,
      deliveryAddress: null,
      pickupTime: null,
      paymentMethod: null
    };
  }

  orderCar() {
    this.props.navigation.navigate('summary');
   }

  render() {
    return (
      < View style={styles.overlay} >
        <Button onPress={this.orderCar} title='Order car'
          color='#4a8ce2'
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'flex-end',
    zIndex: 0,
    backgroundColor: '#ffffffff',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
