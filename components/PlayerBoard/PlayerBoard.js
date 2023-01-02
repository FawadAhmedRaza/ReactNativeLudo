import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Peice} from '../Peice/Peice';

const redPeice = require('../../assets/red.png');
const greenPeice = require('../../assets/green.png');
const bluePeice = require('../../assets/blue.png');
const yellowPeice = require('../../assets/yellow.png');

const PlayerBoard = ({color, style, board}) => {
  return (
    <View style={{backgroundColor: color, flex: 3, ...style}}>
      <View style={styles.piecesWrapper}>
        <View style={styles.playerRow}>
          <View style={{...styles.pieces, backgroundColor: color}}>
            <Peice color={color} />
          </View>
          <View style={{...styles.pieces, backgroundColor: color}}>
            <Peice color={color} />
          </View>
        </View>
        <View style={styles.playerRow}>
          <View style={{...styles.pieces, backgroundColor: color}}>
            <Peice color={color} />
          </View>
          <View style={{...styles.pieces, backgroundColor: color}}>
            <Peice color={color} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  piecesWrapper: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  playerRow: {
    flexDirection: 'row',
    display: 'flex',
    padding: 10,
    justifyContent: 'space-between',
  },
  pieces: {
    height: 30,
    width: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayerBoard;
