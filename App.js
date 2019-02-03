import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import IntroAnimation from './components/introAnimation/IntroAnimation';
import Login from './components/Login/Login';
import Main from './components/routes';

export default class App extends React.Component {

  render() {
    return (
      <Main />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
