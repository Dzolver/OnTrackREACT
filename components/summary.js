import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, Button, TextInput, Select, Picker,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
export default class summary extends Component {
  constructor(props) {
    super(props);
    this._cancel = this._cancel.bind(this);
    //this._order = this._order.bind(this);
    this.state = {
      mapRegion: null,
      lastLat: 0,
      lastLong: 0,
      //Default values
      pickupItem: 'Cell Phone',
      itemDescription: 'No Item Description',
      cost: 0,
      pickupaddress: "default",
      deliveryAddress: "default",
      pickupTime: 'ASAP',
      paymentMethod: 'VIPPS'
    };
  }

  _cancel() {
    this.props.navigation.navigate('Maps');
   }

  _order(){
    ToastAndroid.show('Order made!', ToastAndroid.SHORT);
  }

  render() {
    let pickupItem = this.state.pickupItem;
    let itemDescription = this.state.itemDescription;
    let pickupTime = this.state.pickupTime;
    let paymentMethod = this.state.paymentMethod;

    return (
      <View style={styles.gifBackLayout}>
        <View style={styles.overlay}>
          
          <View style={styles.innerRow}>
            <View style={{ width: '100%',overflow:'hidden'}}>
              <Text style={{textAlign:'center',fontSize:20, fontFamily:'Quicksand-Light',fontWeight:'normal',color:'#ffffff'}}>Customize Your Delivery</Text>
            </View>
          </View>
          
          <View style={styles.innerRow}>
            <View style={{ width: '100%',overflow:'hidden',paddingTop:20,paddingBottom:5}}>
              <Text style={{color:'#ffffff',fontFamily:'Quicksand-Light'}}>    Select Item Type</Text>
            </View>
          </View>

          <View style={styles.innerRow}>
            <View style={{ width: '15%',overflow:'hidden',paddingTop:20,paddingBottom:5,backgroundColor:"#1e272e"}}>
              <Image style={styles.symbols} source={require('./images/item.png')} />
            </View>
        
            <View style={{ width: '85%', borderWidth: 1, borderColor: '#ffffff40', borderRadius: 20,overflow:'hidden'}}>
              <Picker
                selectedValue={this.state.pickupItem}
                style={{ width: '100%', height:40,backgroundColor: '#07070740', color:'#ffffff'}}
                onValueChange={(itemValue, itemIndex) => this.setState({ pickupItem: itemValue })}
                underlineColorAndroid="black">
                <Picker.Item label="  Cell Phone" value="Cell Phone" />
                <Picker.Item label="  Item 1" value="Item 1" />
                <Picker.Item label="  Item 2" value="Item 2" />
                <Picker.Item label="  Item 3" value="Item 3" />
                <Picker.Item label="  Item 4" value="Item 4" />
              </Picker>
            </View>
          </View>
        
        <View style={styles.innerRow}>
          <View style={{width: '100%',overflow:'hidden', paddingTop:10, paddingLeft:5,paddingRight:5,borderRadius:20  }}>
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
            <Text style={{color:'#ffffff',fontFamily:'Quicksand-Light'}}>    Select Pickup Time</Text>
          </View>
        </View>
        <View style={styles.innerRow}>
        <View style={{ width: '15%',overflow:'hidden',paddingTop:20,paddingBottom:5,backgroundColor:"#1e272e"}}>
            <Image style={styles.symbols} source={require('./images/time.png')} />
          </View>
          <View style={{ width: '85%', borderWidth: 1, borderColor: '#ffffff40',borderRadius: 20,overflow:'hidden' }}>
            <Picker
              selectedValue={this.state.pickupTime}
              style={{ width: '100%', height:40,backgroundColor: '#07070740', color:'#ffffff'}}
              onValueChange={(itemValue, itemIndex) => this.setState({ pickupTime: itemValue })}
              underlineColorAndroid="black">
              <Picker.Item label="  ASAP" value="ASAP" />
              <Picker.Item label="  Time 1" value="Time 1" />
              <Picker.Item label="  Time 2" value="Time 2" />
              <Picker.Item label="  Time 3" value="Time 3" />
              <Picker.Item label="  Time 4" value="Time 4" />
            </Picker>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '100%',overflow:'hidden', paddingTop:10,paddingBottom:5}}>
            <Text style={{color:'#ffffff',fontFamily:'Quicksand-Light'}}>    Select Payment Method</Text>
          </View>
        </View>
        <View style={styles.innerRow}>
        <View style={{ width: '15%',overflow:'hidden',paddingTop:20,paddingBottom:5,backgroundColor:"#1e272e"}}>
            <Image style={styles.symbols} source={require('./images/payment.png')} />
          </View>
          <View style={{ width: '85%',borderWidth: 1, borderColor: '#ffffff40',borderRadius:20,overflow:'hidden' }}>
            <Picker
              selectedValue={this.state.paymentMethod}
              style={{ width: '100%', height:40,backgroundColor: '#07070740', color:'#ffffff'}}
              onValueChange={(itemValue, itemIndex) => this.setState({ paymentMethod: itemValue })}
              underlineColorAndroid="black">
              <Picker.Item label="  VIPPS" value="VIPPS" />
              <Picker.Item label="  Payment Method 1" value="Payment Method 1" />
              <Picker.Item label="  Payment Method 2" value="Payment Method 2" />
              <Picker.Item label="  Payment Method 3" value="Payment Method 3" />
              <Picker.Item label="  Payment Method 4" value="Payment Method 4" />
            </Picker>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '100%',overflow:'hidden', paddingTop:40}}>
          </View>
        </View>
        <View style={styles.innerRow}>
          <View style={{ width: '25%', paddingLeft:10}}>
            <TouchableOpacity
              style={{justifyContent:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20,height:60,width:'100%',padding:5,alignItems:'center',backgroundColor:'#ff5e57'}}
              onPress={this._cancel}
            >
              
              <Image style={{width:25,height:25}} source={require('./images/back.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '75%',paddingRight:10}}>
            <TouchableOpacity
              style={{justifyContent:'center',borderTopRightRadius:20,borderBottomRightRadius:20,height:60,width:'100%',padding:5,alignItems:'center',backgroundColor:'#0be881'}}
              onPress={()=>{
                this.popupDialog.show();
              }}
            >
              <Text style={{color:'#ffffff',textAlign:'center',fontFamily:'Quicksand-Bold',fontSize:20}}> Send Order </Text>
            </TouchableOpacity>
          </View>
        </View>
        <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog;}} dialogAnimation={slideAnimation}>
          <View>
            <Text>{pickupItem}</Text>
            <Text>{itemDescription}</Text>
            <Text>{pickupTime}</Text>
            <Text>{paymentMethod}</Text>
            <Text>{this.props.navigation.state.params.pickup}</Text>
            <Text>{this.props.navigation.state.params.delivery}</Text>
            <TouchableOpacity
              style={{justifyContent:'center',borderTopRightRadius:20,borderBottomRightRadius:20,height:60,padding:5,alignItems:'center',backgroundColor:'#0be881'}}
              onPress={()=>{
                this._order();
              }}
            >
              <Text style={{color:'#ffffff',textAlign:'center',fontFamily:'Quicksand-Bold',fontSize:20}}> Confirm Order </Text>
            </TouchableOpacity>
          </View>
        </PopupDialog>
       </View>  
      </View> 
    );
  }
}
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});
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