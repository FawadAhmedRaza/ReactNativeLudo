import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

const Home = () => {
  const [players, setPlayers] = useState({
    player1: '',
    player2: '',
    player3: '',
    player4: '',
  });

  const startGame = () => {
    if (Object.values(players)?.filter(e => e !== '').length < 2) {
      Alert.alert(
        'At least Two Players',
        'Please add at least two player to start the game.',
        ['ok'],
      );
    } else {
      Alert.alert('Welcome', 'Welcome to ludo star', ['ok']);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>Ludo Star</Text>
      {/* <Image
        source={require('../../assets/LUDO.png')}
        style={styles.boardImage}
      /> */}
      <View style={styles.playerInputWrapper}>
        <TextInput
          name="player1"
          placeholder="Player 1"
          style={{...styles.playerInput, borderColor: 'green'}}
          onChangeText={e => setPlayers(prev => ({...prev, player1: e}))}
        />
      </View>
      <View style={styles.playerInputWrapper}>
        <TextInput
          placeholder="Player 2"
          style={{...styles.playerInput, borderColor: 'yellow'}}
          onChangeText={e => setPlayers(prev => ({...prev, player2: e}))}
        />
      </View>
      <View style={styles.playerInputWrapper}>
        <TextInput
          placeholder="Player 3"
          style={{...styles.playerInput, borderColor: 'red'}}
          onChangeText={e => setPlayers(prev => ({...prev, player3: e}))}
        />
      </View>
      <View style={styles.playerInputWrapper}>
        <TextInput
          placeholder="Player 4"
          style={{...styles.playerInput, borderColor: 'blue'}}
          onChangeText={e => setPlayers(prev => ({...prev, player4: e}))}
        />
      </View>

      <TouchableOpacity style={styles.startBtn} onPress={startGame}>
        <Text style={styles.startBtnText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
  },
  //   boardImage: {
  //     marginHorizontal: 10,
  //     resizeMode: 'contain',
  //     alignSelf: 'center',
  //     height: Dimensions.get('screen').width - 10,
  //     width: Dimensions.get('screen').width - 10,
  //   },
  startBtn: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 10,
    elevation: 0,
    backgroundColor: 'green',
    marginTop: 20,
  },
  startBtnText: {
    fontSize: 20,
    color: 'white',
  },
  gameTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: 'white',
    marginBottom: 10,
  },
  playerInput: {
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderWidth: 2,
    borderColor: 'yellow',
    fontSize: 20,
    borderRadius: 20,
    padding: 10,
  },
  playerInputWrapper: {
    width: '80%',
    marginVertical: 8,
    // backgroundColor: 'white',
    // borderRadius: 10,
  },
});

export default Home;
