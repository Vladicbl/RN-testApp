/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
  <View style = {styles.mainView}>
    <Text style = {styles.text}>Hello</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  mainView : {
    backgroundColor : '#78F'
  },
  text:{
    fontSize : 132
  },
});

export default App;
