import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Dice from '../../components/Dice/Dice';
import {HorizantolPoints} from '../../components/HorizantolPoints/HorizantolPoints';
import PlayerBoard from '../../components/PlayerBoard/PlayerBoard';
import {VerticalPoints} from '../../components/VerticalPoints/VerticalPoints';
import {colors} from '../../conatants/colors';

const INITIAL_STATE = [
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
];

const GameBoard = () => {
  const [diesCount, setDiesCount] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState([...INITIAL_STATE]);

  const [players, setPlayers] = useState([
    {
      name: 'player1',
      boardIndex: 0,
      startingPoint: 1,
      currentPossition: 1,
      winPieces: [],
    },
    {
      name: 'player2',
      boardIndex: 1,
      startingPoint: 31,
      currentPossition: 31,
      winPieces: [],
    },
    {
      name: 'player3',
      boardIndex: 2,
      startingPoint: 51,
      currentPossition: 1,
      winPieces: [],
    },
    {
      name: 'player4',
      boardIndex: 3,
      startingPoint: 71,
      currentPossition: 1,
      winPieces: [],
    },
  ]);

  const movePiece = () => {
    let temp = [...board];
  };

  useEffect(() => {
    movePiece();
  }, [diesCount]);

  const changeTurn = current => {
    if (current < 4) {
      setCurrentPlayer(current + 1);
    } else {
      setCurrentPlayer(1);
    }
  };

  const randomIntFromInterval = (min, max) => {
    if (diesCount[diesCount.length - 1] === 6) {
      setDiesCount(prev => [
        ...prev,
        Math.floor(Math.random() * (max - min + 1) + min),
      ]);
    } else {
      setDiesCount([Math.floor(Math.random() * (max - min + 1) + min)]);
    }
    let ind = players;
    ind[currentPlayer - 1]['currentPossition'] += diesCount?.reduce(
      (a, n) => a + n,
      0,
    );
    setPlayers(ind);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          // backgroundColor: 'white',
        }}>
        <View
          style={{
            backgroundColor: currentPlayer === 1 ? 'green' : 'white',
            borderRadius: 20,
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: currentPlayer === 1 ? 'white' : 'green',
            }}>
            Player 1
          </Text>
        </View>
        <View
          style={{
            backgroundColor: currentPlayer === 2 ? 'yellow' : 'white',
            borderRadius: 20,
            borderColor: 'gold',
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: currentPlayer === 2 ? 'white' : 'yellow',
            }}>
            Player 2
          </Text>
        </View>
      </View>
      <View style={styles.gameBoard}>
        <View style={{...styles.playersBorad, borderTopLeftRadius: 30}}>
          <PlayerBoard
            position="topLeft"
            color={colors.green}
            style={{borderTopLeftRadius: 15}}
          />
          <VerticalPoints
            board={board[1]}
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
            board={board[0]}
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
            board={board[3]}
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
            board={board[2]}
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: currentPlayer === 3 ? 'red' : 'white',
            borderRadius: 20,
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: currentPlayer === 3 ? 'white' : 'red',
            }}>
            Player 3
          </Text>
        </View>
        <View
          style={{
            backgroundColor: currentPlayer === 4 ? 'blue' : 'white',
            borderRadius: 20,
            borderWidth: 2,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: currentPlayer === 4 ? 'white' : 'blue',
            }}>
            Player 4
          </Text>
        </View>
      </View>
      <TouchableOpacity
        disabled={diesCount.length > 1 && diesCount[diesCount.length - 1] !== 6}
        // style={styles.diseBtn}
        onPress={() => {
          randomIntFromInterval(1, 6);
          changeTurn(currentPlayer);
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Dice num={diesCount[diesCount.length - 1]} />
        </View>
      </TouchableOpacity>

      <View>
        <Text style={{alignSelf: 'center', fontSize: 40, color: 'white'}}>
          Player {currentPlayer}
        </Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {diesCount?.map(dise => (
            <Dice num={dise} />
          ))}
        </View>
      </View>
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
