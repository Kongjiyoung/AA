import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import FirstPage from './FirstPage';
import Write from './nextbutton/Write';
import Main from './nextbutton/Main';




const App = createStackNavigator(
    {
        Home: {screen:FirstPage},
        Main: {screen:Main},
        Write: {screen : Write}
    },
    {initialRouteName: 'Home',headerMode: 'none'}

);



export default createAppContainer(App);
