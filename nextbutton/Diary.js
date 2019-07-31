import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppRegistry, AsyncStorage, View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default class HomeTab extends React.Component {
  static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Feather name='book-open' style={{ color: tintColor }} />
        )
    }

    render() {
        const {navigation} = this.props;
    return(
      <View style={styles.outside}>
        <View style={styles.innerside}>
          <TouchableOpacity onPress={()=> {navigation.navigate("Write")}}>
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity onPress={()=> {navigation.navigate("Write")}}>
               <Ionicons name='md-add-circle' size ={55}  color = 'skyblue'/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
    }
}

const styles = StyleSheet.create({
  outside : {
    height:'100%',
    width:'100%',
    backgroundColor: 'skyblue'
  },
  innerside : {
    marginTop : '2.3%',
    marginLeft : '2%',
    height:'97%',
    width:'96%',
    backgroundColor: 'white',
    borderRadius:10
  },
  button : {
    flexDirection: 'row',
    flex : 1,
    alignSelf : 'flex-end',
    alignItems : 'flex-end',
    marginRight : '2%',
  }
});
