import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Peice} from '../Peice/Peice';
export const VerticalPoints = ({color, position, board}) => {
  const getColor = (row, ind, position, color) => {
    if (
      (row === 0 && position == 'top' && ind == 2) ||
      (row === 1 && position == 'top') ||
      (row === 2 && position == 'top' && ind == 1) ||
      (row === 0 && position == 'bottom' && ind == 4) ||
      (row === 1 && position == 'bottom') ||
      (row === 2 && position == 'bottom' && ind == 3)
    ) {
      return color;
    } else {
      return 'whitesmoke';
    }
  };
  return (
    <View
      style={{
        flex: 2,
        backgroundColor: 'whitesmoke',
        flexDirection: 'row',
      }}>
      {board?.map((arr, ind) => (
        <View style={styles.pointsRow}>
          {arr?.map((el, index) => (
            <View
              key={index}
              style={{
                ...styles.points,
                borderColor: color,
                borderWidth: 1,
                backgroundColor:
                  el === 1
                    ? 'whitesmoke'
                    : getColor(ind, index, position, color),

                // borderColor: el === 1 ? color : 'whitesmoke',
              }}>
              {el === 1 ? <Peice color={color} /> : null}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  points: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  pointsRow: {
    backgroundColor: 'white',
    flex: 1,
    // borderColor: 'black',
  },

  peice: {
    height: 16,
    width: 16,
    borderRadius: 50,
    // borderColor: 'black',
    borderWidth: 2,
    elevation: 2,
  },
});
