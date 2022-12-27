import React from 'react';
import {View, StyleSheet} from 'react-native';

export const HorizantolPoints = ({color, position}) => {
  return (
    <View style={{flex: 2, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        <View style={styles.pointWrapper}>
          <View style={styles.pointMain}>
            <View
              style={{
                ...styles.point,
              }}></View>
            <View
              style={{
                ...styles.point,
                backgroundColor: position == 'left' ? color : 'white',
              }}></View>
            <View
              style={{
                ...styles.point,
              }}></View>
            <View
              style={{
                ...styles.point,
                backgroundColor: position == 'right' ? color : 'white',
              }}></View>
            <View
              style={{
                ...styles.point,
              }}></View>
            <View
              style={{
                ...styles.point,
              }}></View>
          </View>
          <View style={styles.pointMain}>
            <View
              style={{
                ...styles.point,
                backgroundColor: color,
              }}></View>
            <View
              style={{
                ...styles.point,
                backgroundColor: color,
              }}></View>
            <View
              style={{
                ...styles.point,
                backgroundColor: color,
              }}></View>
            <View
              style={{
                ...styles.point,
                backgroundColor: color,
              }}></View>
            <View
              style={{
                ...styles.point,
                backgroundColor: color,
              }}></View>
            <View
              style={{
                ...styles.point,
                backgroundColor: color,
              }}></View>
          </View>
          <View style={styles.pointMain}>
            <View style={styles.point}></View>
            <View style={styles.point}></View>
            <View
              style={{
                ...styles.point,
                backgroundColor: position == 'left' ? color : 'white',
              }}></View>
            <View style={styles.point}></View>
            <View
              style={{
                ...styles.point,
                backgroundColor: position == 'right' ? color : 'white',
              }}></View>
            <View style={styles.point}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pointWrapper: {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
  },
  pointMain: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
  },
  point: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'whitesmoke',
  },
});
