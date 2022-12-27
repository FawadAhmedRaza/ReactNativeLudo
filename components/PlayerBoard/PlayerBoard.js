import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlayerBoard = ({color, style}) => {
  return (
    <View style={{backgroundColor: color, flex: 3, ...style}}>
      <View style={styles.piecesWrapper}>
        <View style={styles.playerRow}>
          <View style={{...styles.pieces, backgroundColor: color}}></View>
          <View style={{...styles.pieces, backgroundColor: color}}></View>
        </View>
        <View style={styles.playerRow}>
          <View style={{...styles.pieces, backgroundColor: color}}></View>
          <View style={{...styles.pieces, backgroundColor: color}}></View>
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
  },
});

export default PlayerBoard;
