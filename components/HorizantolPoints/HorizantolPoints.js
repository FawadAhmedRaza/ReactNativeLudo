import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {act} from 'react-test-renderer';
import {Peice} from '../Peice/Peice';

export const HorizantolPoints = ({color, position, board}) => {
  const getColor = (row, ind, position, color) => {
    if (
      (row === 0 && position == 'left' && ind == 1) ||
      (row === 1 && position == 'left' && ind) ||
      (row === 2 && position == 'left' && ind == 2) ||
      (row === 0 && position == 'right' && ind == 3) ||
      (row === 1 && position == 'right' && ind < 5) ||
      (row === 2 && position == 'right' && ind == 4)
    ) {
      return color;
    } else {
      return 'whitesmoke';
    }
  };

  return (
    <View style={{flex: 2, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        <View style={styles.pointWrapper}>
          {board?.map((arr, ind) => (
            <View style={styles.pointMain} key={ind}>
              {arr.map((el, index) => (
                <Animated.View
                  key={index}
                  style={{
                    ...styles.point,
                    borderColor: color,
                    borderWidth: 1,
                    backgroundColor: getColor(ind, index, position, color),
                  }}>
                  {el ? (
                    <Peice
                      color={
                        el === 1
                          ? 'green'
                          : el === 2
                          ? 'yellow'
                          : el === 3
                          ? 'red'
                          : el === 4
                          ? 'blue'
                          : null
                      }
                    />
                  ) : null}
                </Animated.View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  peice: {
    height: 16,
    width: 16,
    borderRadius: 50,
    borderWidth: 2,
    elevation: 2,
  },
  pointWrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  pointMain: {
    flex: 1,
    flexDirection: 'row',
  },
  point: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
