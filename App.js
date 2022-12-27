/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './screen/Home/Home';
import GameBoard from './screen/GameBoard/GameBoard';

const App = () => {
  return (
    <>
      <Home></Home>
      {/* <GameBoard /> */}
    </>
  );
};

export default App;
