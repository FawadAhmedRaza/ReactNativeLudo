import React from 'react';
import {View, StyleSheet} from 'react-native';

export const VerticalPoints = ({color, position}) => {
  return (
    <View
      style={{
        flex: 2,
        backgroundColor: 'whitesmoke',
        flexDirection: 'row',
      }}>
      <View style={styles.pointsRow}>
        <View style={styles.points}></View>
        <View style={styles.points}></View>
        <View
          style={{
            ...styles.points,
            backgroundColor: position == 'top' ? color : 'white',
          }}></View>
        <View style={styles.points}></View>
        <View
          style={{
            ...styles.points,
            backgroundColor: position == 'bottom' ? color : 'white',
          }}></View>
        <View style={styles.points}></View>
      </View>
      <View style={styles.pointsRow}>
        <View
          style={{
            ...styles.points,
            backgroundColor: color,
          }}></View>
        <View
          style={{
            ...styles.points,
            backgroundColor: color,
          }}></View>
        <View
          style={{
            ...styles.points,
            backgroundColor: color,
          }}></View>
        <View
          style={{
            ...styles.points,
            backgroundColor: color,
          }}></View>
        <View
          style={{
            ...styles.points,
            backgroundColor: color,
          }}></View>
        <View
          style={{
            ...styles.points,
            backgroundColor: color,
          }}></View>
      </View>
      <View style={styles.pointsRow}>
        <View style={styles.points}></View>
        <View
          style={{
            ...styles.points,
            backgroundColor: position == 'top' ? color : 'white',
          }}></View>
        <View style={styles.points}></View>
        <View
          style={{
            ...styles.points,
            backgroundColor: position == 'bottom' ? color : 'white',
          }}></View>
        <View style={styles.points}></View>
        <View style={styles.points}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  points: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'whitesmoke',
  },
  pointsRow: {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 1,
    borderColor: 'whitesmoke',
  },
});
