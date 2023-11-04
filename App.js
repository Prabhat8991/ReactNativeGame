/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StyleSheet, View, ImageBackground, React} from 'react-native';

import StartScreen from './screens/StartScreen';


export default function App() {
  return <View style = {styles.rootScreen}>
    <ImageBackground 
    style = {styles.rootScreen} 
    source={require('./assets/images/background.png')} 
    resizeMode='cover'
    imageStyle={styles.backgroundImage}>
    <StartScreen/>
    </ImageBackground>
  </View>
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
