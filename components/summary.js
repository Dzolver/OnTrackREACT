import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, Button, TextInput, Select, Picker,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class summary extends Component {
  constructor(props) {
    super(props);
    this._cancel = this._cancel.bind(this);
    this._order = this._order.bind(this);
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

  _cancel() {
    this.props.navigation.navigate('Maps');
   }

  _order(){
    ToastAndroid.show('Order made!', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.gifBackLayout}>
      <View style={styles.overlay}>
      <View style={styles.innerRow}>
          <View style={{ width: '100%',overflow:'hidden'}}>
            <Text style={{textAlign:'center',fontSize:20, fontFamily:'Open Sans',fontWeight:'bold',color:'#ffffff'}}>Customize Your Delivery</Text>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '100%',overflow:'hidden',paddingTop:20,paddingBottom:5}}>
            <Text style={{color:'#ffffff'}}>    Select Item Type</Text>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '15%',overflow:'hidden',paddingTop:20,paddingBottom:5,backgroundColor:"#1e272e"}}>
            <Image style={styles.symbols} source={require('./images/item.png')} />
          </View>
        
          <View style={{ width: '85%', borderWidth: 1, borderColor: '#ffffff40', borderBottomRightRadius: 150,borderTopRightRadius: 150,overflow:'hidden'}>
            <Picker
              selectedValue={this.state.pickupItem}
              style={{ width: '100%', backgroundColor: '#07070740', color:'#ffffff'}}
              onValueChange={(itemValue, itemIndex) => this.setState({ pickupItem: itemValue })}
              underlineColorAndroid="black">
              <Picker.Item label="  Cell Phone" value="cellPhone" />
              <Picker.Item label="  Item 1" value="item1" />
              <Picker.Item label="  Item 2" value="item2" />
              <Picker.Item label="  Item 3" value="item3" />
              <Picker.Item label="  Item 4" value="item4" />
            </Picker>
          </View>
        </View>
        
        <View style={styles.innerRow}>
          <View style={{width: '100%',overflow:'hidden', paddingTop:10, paddingLeft:5,paddingRight:5,borderRadius:10  }}>
            <TextInput
              multiline={true}
              placeholder=" Enter Item Description ..."
              placeholderTextColor="#ffffff40"
              underlineColorAndroid="transparent"
              style={{color: '#FFF', width: '100%',height:150,backgroundColor: '#0707077F',textAlignVertical:'top'}} />
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '100%',overflow:'hidden', paddingTop:10,paddingBottom:5}}>
            <Text style={{color:'#ffffff'}}>    Select Pickup Time</Text>
          </View>
        </View>
        <View style={styles.innerRow}>
        <View style={{ width: '15%',overflow:'hidden',paddingTop:20,paddingBottom:5,backgroundColor:"#1e272e"}}>
            <Image style={styles.symbols} source={require('./images/time.png')} />
          </View>
          <View style={{ width: '85%', borderWidth: 1, borderColor: '#ffffff40',borderBottomRightRadius: 150,borderTopRightRadius: 150,overflow:'hidden' }}>
            <Picker
              selectedValue={this.state.pickupTime}
              style={{ width: '100%', backgroundColor: '#07070740', color:'#ffffff' }}
              onValueChange={(itemValue, itemIndex) => this.setState({ pickupTime: itemValue })}
              underlineColorAndroid="black">
              <Picker.Item label="  ASAP" value="time0" />
              <Picker.Item label="  Time 1" value="time1" />
              <Picker.Item label="  Time 2" value="time2" />
              <Picker.Item label="  Time 3" value="time3" />
              <Picker.Item label="  Time 4" value="time4" />
            </Picker>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '100%',overflow:'hidden', paddingTop:10,paddingBottom:5}}>
            <Text style={{color:'#ffffff'}}>    Select Payment Method</Text>
          </View>
        </View>
        <View style={styles.innerRow}>
        <View style={{ width: '15%',overflow:'hidden',paddingTop:20,paddingBottom:5,backgroundColor:"#1e272e"}}>
            <Image style={styles.symbols} source={require('./images/payment.png')} />
          </View>
          <View style={{ width: '85%',borderWidth: 1, borderColor: '#ffffff40',borderBottomRightRadius: 150,borderTopRightRadius: 150,overflow:'hidden' }}>
            <Picker
              selectedValue={this.state.paymentMethod}
              style={{ width: '100%', backgroundColor: '#07070740', color:'#ffffff'  }}
              onValueChange={(itemValue, itemIndex) => this.setState({ paymentMethod: itemValue })}
              underlineColorAndroid="black">
              <Picker.Item label="  VIPPS" value="address0" />
              <Picker.Item label="  Payment Method 1" value="payment1" />
              <Picker.Item label="  Payment Method 2" value="payment2" />
              <Picker.Item label="  Payment Method 3" value="payment3" />
              <Picker.Item label="  Payment Method 4" value="payment4" />
            </Picker>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '100%',overflow:'hidden', paddingTop:40}}>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '20%'}}>
            <TouchableOpacity
              style={{justifyContent:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20,height:60,width:'100%',padding:5,alignItems:'center',backgroundColor:'#ff5e57'}}
              onPress={this._cancel}
            >
              <Text style={{color:'#ffffff',textAlign:'center'}}> Back </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '80%'}}>
            <TouchableOpacity
              style={{justifyContent:'center',borderTopRightRadius:20,borderBottomRightRadius:20,height:60,width:'100%',padding:5,alignItems:'center',backgroundColor:'#0be881'}}
              onPress={this._order}
            >
              <Text style={{color:'#ffffff',textAlign:'center'}}> Send Order </Text>
            </TouchableOpacity>
          </View>
        </View>
       </View>  
      </View> 
    );
  }
}
const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: '#1e272e',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  gifBackLayout:{
    flex:1,
    zIndex:0,
    justifyContent:'center',
    zIndex: 0,
    width: '100%',
    backgroundColor:'#1e272e'
  },
  symbols: {
    width:25,
    height:25,
    marginBottom:20,
    marginLeft:10
  }
});