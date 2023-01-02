import React from 'react';
import {Image, StyleSheet} from 'react-native';
const redPeice = require('../../assets/red.png');
const greenPeice = require('../../assets/green.png');
const bluePeice = require('../../assets/blue.png');
const yellowPeice = require('../../assets/yellow.png');

export const Peice = ({color}) => {
  return (
    <Image
      source={
        color === 'red'
          ? redPeice
          : color === 'yellow'
          ? yellowPeice
          : color === 'blue'
          ? bluePeice
          : color === 'green'
          ? greenPeice
          : null
      }
      style={styles.gotPeice}
    />
  );
};

const styles = StyleSheet.create({
  gotPeice: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    
  },
});
