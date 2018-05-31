import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, Button, TextInput, Select, Picker } from 'react-native';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';
import Geocoder from 'react-native-geocoding';

import MapOverlay from "./mapOverlay";

export default class Googlemap extends Component {
  constructor(props) {
    super(props);
    this.orderCar = this.orderCar.bind(this);
    this.state = {
      mapRegion: null,
      lastLat: 0,
      lastLong: 0,
      formattedAddress: 'Please Wait',

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

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
      Geocoder.init('AIzaSyBENmQq52QW2sdc19lv7tDTpVGkeYz23ks');
      this.onRegionChange(region, region.latitude, region.longitude);
      this.reverseLocation(region.latitude, region.longitude);
    }, (error) => {
      ToastAndroid.show('Please turn on your GPS and mobile data!', ToastAndroid.SHORT);
      this.props.navigation.navigate('LoginForm');
    });
  }
  onRegionChange(region, lastLatitude, lastLongitude) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLatitude || this.state.lastLat,
      lastLong: lastLongitude || this.state.lastLong
    });
  }
  reverseLocation(latitude, longitude) {
    Geocoder.from(latitude, longitude)
      .then(json => {
        this.setState({ formattedAddress: json.results[0].formatted_address });
      })
      .catch(error => console.warn(error));
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style={styles.backgroundcontainer}>
        <View style={styles.innerView}>
          {/* MapView */}
          <MapView style={styles.map}
            region={this.state.mapRegion}
            showsUserLocation={true}
            followUserLocation={true}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.lastLat,
                longitude: this.state.lastLong
              }}
              title={'Your Location'}
              description={'This is your latest location'}
            />
          </MapView>

          <View style={styles.semitransparent} >
            <Text style={styles.overlayText} >The item will be picked up from this address: {this.state.formattedAddress}</Text>
          </View>
        </View>

        {/* Overlay */}
          < View style={styles.overlay} >
            <Button onPress={this.orderCar} title='Order car'
              color='#4a8ce2'
            />
          </View >
        

      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#1e272e'
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
  map: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // zIndex: 0
    width: '100%',
    flex: 1
  },
  semitransparent: {
    // backgroundColor: '#c6c6c6bf',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  innerView: {
    width: '100%',
    flex: 1
  },
  overlayText: {
    color: 'white'
  }
});
