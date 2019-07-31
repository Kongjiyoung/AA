import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet} from 'react-native';
import { Icon } from 'native-base';
import MapView from 'react-native-maps';

export default class HomeTab extends Component {

   constructor(props)
  {
    super(props);
    this.state={
      latitude:null,
      logitude:null,
    };
  }

  componentDidMount()
  {
    navigator.geolocation.getCurrentPosition((position)=> {this.setState({latitude : position.coords.latitude, logitude : position.coords.longitude});});
  }


  static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
          <View style={style.container}>
            <View style={{flexGrow : 1, alignItems:'center',justifyContent:'center'}}>
              <Text>Latitude : {this.state.latitude}</Text>
              <Text>Longitude  : {this.state.logitude}</Text>
              <Text style={style.containerlist}>일정등록</Text>
          </View>
              <MapView style={style.map}
                region={{
                    latitude :35.1793969,//{this.state.latitude},
                    longitude: 128.5561975,
                    latitudeDelta:0.1,
                    longitudeDelta:0.1
                }}>
            </MapView>
          </View>
      );
    }
}

const style = StyleSheet.create({
    containerlist: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container:{
    position : 'absolute',
    idth: 500, height: 300,
    marginTop : 100
  },
  map:{
    position:'absolute',
    marginTop : 100
  }
});
