import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import './src/navigation/stackNavigator'

import React from 'react';
import Stack from './src/navigation/stackNavigator';
import { Provider } from 'react-redux'
import { store } from './src/toolkitRedux/index'

import LoginPage from './src/navigation/pages/LoginPage'
import AccountPage from './src/navigation/pages/AccountPage'

const App = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = 'AccountPage'>
          <Stack.Screen name='Login page' component = {LoginPage} />
          <Stack.Screen name='Account page' component = {AccountPage} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

