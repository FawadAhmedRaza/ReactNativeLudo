import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  ImageBackground,
} from 'react-native';
import Dice from '../../components/Dice/Dice';
import {HorizantolPoints} from '../../components/HorizantolPoints/HorizantolPoints';
import PlayerBoard from '../../components/PlayerBoard/PlayerBoard';
import {VerticalPoints} from '../../components/VerticalPoints/VerticalPoints';
import {colors} from '../../conatants/colors';
import {routes} from '../../constants';

import bgImage from '../../assets/boardBackground.jpeg';

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
  const [diesCount, setDiesCount] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState([...INITIAL_STATE]);

  const [players, setPlayers] = useState([
    {
      name: 'player1',
      currentPossition: 0,
      winPieces: [],
      lossPieces: [],
    },
    {
      name: 'player2',
      currentPossition: 0,
      winPieces: [],
      lossPieces: [],
    },
    {
      name: 'player3',
      currentPossition: 0,
      winPieces: [],
      lossPieces: [],
    },
    {
      name: 'player4',
      currentPossition: 0,
      winPieces: [],
      lossPieces: [],
    },
  ]);

  const movePiece = address => {
    let temp = [...board];

    for (let i in temp) {
      for (let j in temp[i]) {
        for (let e in temp[i][j]) {
          if (temp[i][j][e] == currentPlayer) {
            temp[i][j][e] = 0;
          }
        }
      }
    }
    let allPlayers = [...players];
    let place = temp[address[0]][address[1]][address[2]];
    if (place) {
      allPlayers[currentPlayer - 1].lossPieces.push(place);
    }
    temp[address[0]][address[1]][address[2]] = currentPlayer;
  };

  useEffect(() => {
    movePiece(
      routes[currentPlayer - 1][players[currentPlayer - 1]['currentPossition']],
    );
  }, [players[currentPlayer - 1]?.currentPossition]);

  useEffect(() => {
    console.log(players, 'players');
  }, [players]);

  useEffect(() => {
    let temp = [...players];
    if (
      temp[currentPlayer - 1]['currentPossition'] + diesCount <
      routes[currentPlayer - 1].length
    ) {
      temp[currentPlayer - 1]['currentPossition'] =
        temp[currentPlayer - 1]['currentPossition'] + diesCount;
      setPlayers(temp);
    }
  }, [diesCount]);

  const changeTurn = current => {
    if (current < 4) {
      setCurrentPlayer(current + 1);
    } else {
      setCurrentPlayer(1);
    }
  };

  const randomIntFromInterval = (min, max) => {
    setDiesCount(Math.floor(Math.random() * (max - min + 1) + min));
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          // height: '100%',
          // width: '100%',
        }}>
        <View style={styles.container}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: currentPlayer === 1 ? 'green' : 'white',
                borderRadius: 20,
                borderWidth: 2,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 8,
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
                  fontSize: 20,
                  padding: 8,
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
              marginTop: 20,
            }}>
            <View
              style={{
                backgroundColor: currentPlayer === 3 ? 'red' : 'white',
                borderRadius: 20,
                borderWidth: 2,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: currentPlayer === 3 ? 'white' : 'red',
                  padding: 8,
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
                  fontSize: 20,
                  padding: 8,
                  fontWeight: 'bold',
                  color: currentPlayer === 4 ? 'white' : 'blue',
                }}>
                Player 4
              </Text>
            </View>
          </View>
          <TouchableOpacity
            // disabled={diesCount.length > 1 && diesCount[diesCount.length - 1] !== 6}
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
              <Dice num={diesCount} />
            </View>
          </TouchableOpacity>

          {/* <View>
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
          <Dice num={diesCount} />
        </View>
      </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
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
    backgroundColor: 'red',
    // backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'gold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
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
