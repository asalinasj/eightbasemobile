import React from 'react';
import { StyleSheet, Text, Image, View, Platform, TouchableOpacity } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './Login/Login';
import Home from './Home/Home';

const MainNavigator = createStackNavigator({
    Login: { screen: Login},
    Home: {screen: Home},
    }, {
      headerMode: 'none',
      initialRouteName: 'Login',
  
})

const Main = createAppContainer(MainNavigator);

export default Main;


// const Drawer = createDrawerNavigator({
//     Login: {
//       screen: Login,
//       navigationOptions: () => ({
//         title: 'Sign Out'
//       }),
//     },
//     Home: {
//       screen: Home,
//       navigationOptions: () => ({
//         title: 'Home'
//       }), 
//     },
//   }, {
//       drawerPosition: 'right',
//      }
//   );