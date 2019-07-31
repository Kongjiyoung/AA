import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer,createStackNavigator } from 'react-navigation';

import HomeTab from './HomeTap';
import SearchTab from './SearchTap';
import Diary from './Diary';

const AppTabNavigator = createBottomTabNavigator({
  Home: { screen: HomeTab },
  Search: { screen: SearchTab },
  Diary: { screen: Diary },
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
     render() {
    return <AppTabContainet/>;
  }
}
