/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet, View} from 'react-native';

import StartScreen from './screens/StartScreen';

import {React} from 'react-native'

export default function App() {
  return <View style = {styles.rootScreen}>
    <StartScreen/>
  </View>
}

const styles = StyleSheet.create({
   rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f"
   }
});
