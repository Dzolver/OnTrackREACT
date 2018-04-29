import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default class Googlemap extends Component<Props> {
  state = {
    //insert state variables here
  }
  render(){
    return(
      <View style = {styles.backgroundcontainer}>
        <MapView style={styles.map}
          region={{
            latitude:6.894774,
            longitude:79.890663,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}>
          <MapView.Marker
            coordinate={{
              latitude:6.894774,
              longitude:79.890663
            }}
            title={'Your Location'}
            description={'This is your latest location'}
            />

        </MapView>
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
  },
  map:{
    position: 'absolute',
    top :0,
    left:0,
    right:0,
    bottom:0
  }
});
