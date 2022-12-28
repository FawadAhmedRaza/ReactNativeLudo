import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {HorizantolPoints} from '../../components/HorizantolPoints/HorizantolPoints';
import PlayerBoard from '../../components/PlayerBoard/PlayerBoard';
import {VerticalPoints} from '../../components/VerticalPoints/VerticalPoints';
import {colors} from '../../conatants/colors';

const GameBoard = () => {
  const [diesCount, setDiesCount] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [players, setPlayers] = useState([
    {name: 'player1', turn: 1},
    {name: 'player2', turn: 1},
    {name: 'player3', turn: 1},
    {name: 'player4', turn: 1},
  ]);

  const changeTurn = current => {
    if (currentPlayer < 4) {
      setCurrentPlayer(currentPlayer + 1);
    } else {
      setCurrentPlayer(1);
    }
  };

  const randomIntFromInterval = (min, max) => {
    setDiesCount(Math.floor(Math.random() * (max - min + 1) + min));
  };
  return (
    <View style={styles.container}>
      <View style={styles.gameBoard}>
        <View style={{...styles.playersBorad, borderTopLeftRadius: 30}}>
          <PlayerBoard
            position="topLeft"
            color={colors.green}
            style={{borderTopLeftRadius: 15}}
          />
          <VerticalPoints
            board={[
              [0, 0, 0, 1, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
            ]}
            color={colors.yellow}
            position={'top'}
          />
          <PlayerBoard
            position="topRight"
            color={colors.yellow}
            style={{borderTopRightRadius: 15}}
          />
        </View>
        <View style={styles.middlelayer}>
          <HorizantolPoints
            board={[
              [0, 0, 0, 1, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
            ]}
            position={'left'}
            color={colors.green}
          />
          <View style={{flex: 1.3, borderWidth: 2, borderColor: 'grey'}}>
            <Image
              source={require('../../assets/Mid.png')}
              style={{resizeMode: 'contain', height: 90, width: 90}}
            />
          </View>
          <HorizantolPoints
            board={[
              [0, 0, 0, 1, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
            ]}
            position={'right'}
            color={colors.blue}
          />
        </View>
        <View style={styles.playersBorad}>
          <PlayerBoard
            style={{borderBottomLeftRadius: 15}}
            color={colors.red}
            position="bottomLeft"
          />
          <VerticalPoints
            board={[
              [0, 0, 0, 0, 0, 1],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
            ]}
            color={colors.red}
            position={'bottom'}
          />
          <PlayerBoard
            style={{borderBottomRightRadius: 15}}
            color={colors.blue}
            position="bottomRight"
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.diseBtn}
        onPress={() => {
          randomIntFromInterval(1, 6);
          changeTurn(currentPlayer);
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
          Roll Dise
        </Text>
      </TouchableOpacity>

      <Text style={{alignSelf: 'center', fontSize: 40, color: 'white'}}>
        {diesCount}
      </Text>
      <Text style={{alignSelf: 'center', fontSize: 40, color: 'white'}}>
        Player {currentPlayer}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  diseBtn: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'red',
  },

  gameBoard: {
    // borderWidth: 5,
    borderColor: 'red',
    width: Dimensions.get('screen').width - 20,
    height: Dimensions.get('screen').width - 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'gold',
  },
  playersBorad: {
    flex: 3,
    borderRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  middlelayer: {
    flex: 2,
    flexDirection: 'row',
  },
});
export default GameBoard;
