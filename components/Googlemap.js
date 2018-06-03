import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, Button, TextInput, Select, Picker,TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { StackNavigator } from 'react-navigation';
import Geocoder from 'react-native-geocoding';

import MapOverlay from "./mapOverlay";

export default class Googlemap extends Component {
  constructor(props) {
    super(props);
    this.orderCar = this.orderCar.bind(this);
    this.state = {
      track:true,
      mapRegion: null,
      lastLat: 0,
      lastLong: 0,
      deliveryLat: 0,
      deliveryLng: 0,
      formattedAddress: 'Please Wait',

      pickupItem: null,
      cost: 0,
      deliveryAddress: null,
      pickupTime: null,
      paymentMethod: null
    };
  }

  orderCar() {
    this.props.navigation.navigate('summary',{pickup:this.state.formattedAddress,delivery:this.state.deliveryAddress});
  }

  componentDidMount() {
    if(this.state.track === true){
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    this.setState({
              deliveryLat:this.state.lastLat,
              deliveryLng:this.state.lastLong
            });
      Geocoder.init('AIzaSyBENmQq52QW2sdc19lv7tDTpVGkeYz23ks');
      
      if(this.state.track === true){
        this.onRegionChange(region, region.latitude, region.longitude);
      }
      this.reverseLocation(region.latitude, region.longitude);
      this.setState({
        track : false
      });
      //this.reverseAddress(this.state.formattedAddress);
    } , (error) => {
      ToastAndroid.show('Please turn on your GPS and mobile data!', ToastAndroid.SHORT);
      this.props.navigation.navigate('LoginForm');
    });
    }
  } 
  
  onRegionChange(region, lastLatitude, lastLongitude) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLatitude || this.state.lastLat,
      lastLong: lastLongitude || this.state.lastLong
    });
    ToastAndroid.show('Location Update!', ToastAndroid.SHORT);
  }
  reverseAddress(address) {
    if (Geocoder) {
      Geocoder.from(address)
        .then(json => {
          console.log(json.results[0].geometry.location);
          this.state.lastLat = json.results[0].geometry.location.lat;
          this.state.lastLong = json.results[0].geometry.location.lng;
          let region = {
            latitude: this.state.lastLat,
            longitude: this.state.lastLong,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          };
          this.setState({ mapRegion: region });
        })
        .catch(error => console.log(error));
    }
  }
  reverseAddressDelivery(address) {
    if (Geocoder) {
      Geocoder.from(address)
        .then(json => {
          console.log(json.results[0].geometry.location);
          this.state.deliveryLat = json.results[0].geometry.location.lat;
          this.state.deliveryLng = json.results[0].geometry.location.lng;
          let region = {
            latitude: this.state.lastLat,
            longitude: this.state.lastLong,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          };
          this.setState({ mapRegion: region });
        })
        .catch(error => console.log(error));
    }
  }
  reverseLocation(latitude, longitude) {
    Geocoder.from(latitude, longitude)
      .then(json => {
        this.setState({ formattedAddress: json.results[0].formatted_address});
      })
      .catch(error => console.warn(error));
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    return (
      <View style={styles.backgroundcontainer}>
        
        <Image style={styles.pickUpSymbol} source={require('./images/pickup.png')} />
        <Image style={styles.deliverySymbol} source={require('./images/shipping.png')} />
        <View style={styles.TOPoverlay} >
            <TextInput
              autoCorrect={false}
              placeholder="Pickup Address"
              placeholderTextColor='#ffffff'
              underlineColorAndroid="transparent"
              onChangeText={(formattedAddress) => {
                this.setState({ formattedAddress});
                this.setState({ track:false });
                this.reverseAddress(formattedAddress);
                }}
              value={this.state.formattedAddress}
              style={styles.input} />
            <TextInput
              placeholder="Delivery Address"
              placeholderTextColor="#ffffff"
              underlineColorAndroid="transparent"
              onChangeText={(deliveryAddress) => {
                this.reverseAddressDelivery(deliveryAddress);
                this.setState({deliveryAddress});
                this.setState({ track : false });
              }}
              style={styles.input} />
          </View >
           
          <View style={styles.mapContainer}>
          {/* MapView */}
          <MapView style={styles.map}
            region={this.state.mapRegion}
            showsUserLocation={true}
            followUserLocation={false}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.lastLat,
                longitude: this.state.lastLong
              }}
              title={'Pickup Address'}
              description={'This is where the package will be received'}
            />
            <MapView.Marker
              coordinate={{
                latitude: this.state.deliveryLat,
                longitude: this.state.deliveryLng
              }}
              title={'Delivery Address'}
              description={'This is where the package will be delivered'}
            />
            <MapViewDirections
            origin={{latitude:this.state.lastLat,longitude:this.state.lastLong}}
            destination={{latitude:this.state.deliveryLat,longitude:this.state.deliveryLng}}
            apikey={"AIzaSyBENmQq52QW2sdc19lv7tDTpVGkeYz23ks"}
            strokeColor="hotpink"
            />
          </MapView>
        </View>
     
              
        < View style={styles.BOToverlay} >
        <TouchableOpacity
              style={{justifyContent:'center',borderRadius:30,height:60,padding:5,alignItems:'center',backgroundColor:'#1e272eBF'}}
              onPress={
                this.orderCar
              }
            >
              <Text style={{color:'#ffffff',textAlign:'center',fontFamily:'Quicksand-Bold',fontSize:20}}> Start Order </Text>
            </TouchableOpacity>
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
  mapContainer:{
    position:'absolute',
    flex:1,
    zIndex:1,
    height:'100%',
    width:'100%'
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
  pickUpSymbol: {
    width:35,
    height:35,
    zIndex:3,
    top:20,
    left:10,
    position:'absolute',
  },
  deliverySymbol:{
    width:35,
    height:35,
    zIndex:4,
    top:85,
    left:10,
    position:'absolute'
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
  TOPoverlay:{
    zIndex:2,
    position:'absolute',
    top:40,
    left:10,
    right:10
  },
  BOToverlay:{
    zIndex:2,
    position:'absolute',
    bottom:10
  },
  pickupIcon:{
    zIndex:3,
    position:'absolute',
    top:40,
    left:0
  },
  overlayText: {
    color: 'white',
    textAlign: 'center'
  },
  input: {
    height: 40,
    backgroundColor:'#1e272eBF',
    color: '#ffffff',
    borderRadius: 20,
    // width: '100%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 20,
    //paddingHorizontal: 10,
    textAlign: 'center',
    fontFamily: 'Quicksand-Light'
  }
});
