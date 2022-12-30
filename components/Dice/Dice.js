import React from 'react';
import {Image, Text} from 'react-native';

const diceOne = require('../../assets/DICE-01.png');
const diceTwo = require('../../assets/DICE-02.png');
const diceThree = require('../../assets/DICE-03.png');
const diceFour = require('../../assets/DICE-04.png');
const diceFive = require('../../assets/DICE-05.png');
const diceSix = require('../../assets/DICE-06.png');

const Dice = ({num}) => {
  return num ? (
    <Image
      style={{resizeMode: 'contain', height: 50, width: 50}}
      source={
        num === 1
          ? diceOne
          : num === 2
          ? diceTwo
          : num === 3
          ? diceThree
          : num === 4
          ? diceFour
          : num === 5
          ? diceFive
          : num === 6
          ? diceSix
          : null
      }
    />
  ) : (
    <Text>Roll The Dice</Text>
  );
};

export default Dice;
