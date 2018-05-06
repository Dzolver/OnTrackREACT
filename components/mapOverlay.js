import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, Button, TextInput, Select, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class MapOverlay extends Component {
  constructor(props) {
    super(props);
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

  _orderCar() { }

  render() {
    return (
      < View style={styles.overlay} >
        <View style={styles.innerRow}>
          <View style={{ width: '75%' }}>
            <Text>Choose item to be picked up</Text>
            <Picker
              selectedValue={this.state.pickupItem}
              style={{ width: '100%' }}
              onValueChange={(itemValue, itemIndex) => this.setState({ pickupItem: itemValue })}
              underlineColorAndroid="black">
              <Picker.Item label="Cell Phone" value="cellPhone" />
              <Picker.Item label="Item 1" value="item1" />
              <Picker.Item label="Item 2" value="item2" />
              <Picker.Item label="Item 3" value="item3" />
              <Picker.Item label="Item 4" value="item4" />
            </Picker>
          </View>
          <View style={{ width: '25%' }}>
            <Text>Cost</Text>
            <TextInput
              placeholder="Kr"
              placeholderTextColor="#000000ff"
              underlineColorAndroid="black"
              style={{ width: '100%' }}
              onChangeText={(cost) => this.setState({ cost })}
            />
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '75%' }}>
            <Text>Choose delivery address</Text>
            <Picker
              selectedValue={this.state.deliveryAddress}
              style={{ width: '100%' }}
              onValueChange={(itemValue, itemIndex) => this.setState({ deliveryAddress: itemValue })}
              underlineColorAndroid="black">
              <Picker.Item label="PRESTESTIEN 52 - 5118 Ulset" value="address0" />
              <Picker.Item label="Address 1" value="address1" />
              <Picker.Item label="Address 2" value="address2" />
              <Picker.Item label="Address 3" value="address3" />
              <Picker.Item label="Address 4" value="address4" />
            </Picker>
          </View>
          <View style={{ width: '25%' }}>
            <Text>Pickup time</Text>
            <Picker
              selectedValue={this.state.pickupTime}
              style={{ width: '100%' }}
              onValueChange={(itemValue, itemIndex) => this.setState({ pickupTime: itemValue })}
              underlineColorAndroid="black">
              <Picker.Item label="ASAP" value="time0" />
              <Picker.Item label="Time 1" value="time1" />
              <Picker.Item label="Time 2" value="time2" />
              <Picker.Item label="Time 3" value="time3" />
              <Picker.Item label="Time 4" value="time4" />
            </Picker>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '75%' }}>
            <Text>Payment method</Text>
            <Picker
              selectedValue={this.state.paymentMethod}
              style={{ width: '100%' }}
              onValueChange={(itemValue, itemIndex) => this.setState({ paymentMethod: itemValue })}
              underlineColorAndroid="black">
              <Picker.Item label="VIPPS" value="address0" />
              <Picker.Item label="Payment Method 1" value="payment1" />
              <Picker.Item label="Payment Method 2" value="payment2" />
              <Picker.Item label="Payment Method 3" value="payment3" />
              <Picker.Item label="Payment Method 4" value="payment4" />
            </Picker>
          </View>
        </View>
        <Button onPress={this._orderCar} title='Order car'
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
    paddingVertical: 15
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
