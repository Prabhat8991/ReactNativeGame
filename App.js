/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartScreen from './screens/StartScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
   
  const [userNumber, setUserNumber] = useState()
  const[gameIsOver, setGameIsOver] = useState(true)

  function onPickedNumber(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  let screen = <StartScreen onPickedNumber = {onPickedNumber}/>

  function gameOverHandler() {
    setGameIsOver(true)
  }

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(userNumber && gameIsOver) {
    screen = <GameOverScreen/>
  }
  return (
    <ImageBackground
      source={require('./assets/images/background.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
   rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f"
   },
   backgroundImage: {
      opacity: 0.15
   }
});
