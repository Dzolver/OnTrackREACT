import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, Button, TextInput, Select, Picker } from 'react-native';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';

import MapOverlay from "./mapOverlay";

export default class Googlemap extends Component {
  constructor(props) {
    super(props);
    this._navigate = this._navigate.bind(this);
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

  _navigate(screen) {
    this.props.navigation.navigate(screen);
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
      this.onRegionChange(region, region.latitude, region.longitude);
    }, (error) => {
      ToastAndroid.show('Please turn on your GPS and mobile data!', ToastAndroid.SHORT);
      this._navigate('LoginForm');
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
            <Text style={styles.overlayText} >The item will be picked up from this address: Inndalsveien 28</Text>
          </View>
        </View>

        {/* Overlay */}
        <MapOverlay />

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
