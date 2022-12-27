import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {HorizantolPoints} from '../../components/HorizantolPoints/HorizantolPoints';
import PlayerBoard from '../../components/PlayerBoard/PlayerBoard';
import {VerticalPoints} from '../../components/VerticalPoints/VerticalPoints';
import {colors} from '../../conatants/colors';

const GameBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gameBoard}>
        <View style={{...styles.playersBorad, borderTopLeftRadius: 30}}>
          <PlayerBoard color={colors.green} style={{borderTopLeftRadius: 15}} />
          <VerticalPoints color={colors.yellow} position={'top'} />
          <PlayerBoard
            color={colors.yellow}
            style={{borderTopRightRadius: 15}}
          />
        </View>
        <View style={styles.middlelayer}>
          <HorizantolPoints position={'left'} color={colors.green} />
          <View style={{flex: 1.3, borderWidth: 2, borderColor: 'grey'}}>
            <Image
              source={require('../../assets/Mid.png')}
              style={{resizeMode: 'contain', height: 90, width: 90}}
            />
          </View>
          <HorizantolPoints position={'right'} color={colors.blue} />
        </View>
        <View style={styles.playersBorad}>
          <PlayerBoard
            style={{borderBottomLeftRadius: 15}}
            color={colors.red}
          />
          <VerticalPoints color={colors.red} position={'bottom'} />

          <PlayerBoard
            style={{borderBottomRightRadius: 15}}
            color={colors.blue}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  gameBoard: {
    // borderWidth: 5,
    borderColor: 'red',
    width: Dimensions.get('screen').width - 20,
    height: Dimensions.get('screen').width - 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  playersBorad: {
    flex: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  middlelayer: {
    flex: 2,
    flexDirection: 'row',
  },
});
export default GameBoard;
