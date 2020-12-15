import 'react-native-gesture-handler'

import React from 'react'
import { Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import { Provider } from 'react-redux'
import { store } from './src/toolkitRedux/index'

import LoginScreen from './src/navigation/screens/LoginScreen'
import AccountScreen from './src/navigation/screens/AccountScreen'
import MainScreen from './src/navigation/screens/MainScreen'

import {NavigationContainer} from '@react-navigation/native'
import { StackNavigator } from './src/navigation/index'
import { DrawerNavigator } from './src/navigation/index'

const AccountScreenStack = () => (
  <StackNavigator.Navigator 
    screenOptions = {{
      headerTitleAlign: 'center',
      headerTintColor: '#7AD8F5',
      headerStyle: {
        backgroundColor: '#396175',
      }
    }}
  >
    <StackNavigator.Screen 
      name='Account Screen' 
      component = {AccountScreen}
      options = {{
        headerRight : () => (
          <TouchableHighlight
            onPress = {() => {console.log('TH Pressed')}}
          >
            <Image 
              style = {{width: 40, height : 40}} 
              source = {require('./resouces/gear.png')}
            />
          </TouchableHighlight>
        ),
      }}
    /> 
  </StackNavigator.Navigator>
)

const LoginScreenStack = () => (
  <StackNavigator.Navigator 
    initialRouteName = 'Login Screen'
    screenOptions = {{
      headerTitleAlign: 'center',
      headerTintColor: '#7AD8F5',
      headerStyle: {
        backgroundColor: '#396175',
      }
    }}
  >
    <StackNavigator.Screen 
      name='Login Screen' 
      component = {LoginScreen} 
    />
  </StackNavigator.Navigator>
)

const MainScreenStack = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen name = 'Main Screen' component = {MainScreen} />
  </StackNavigator.Navigator>
)


const App = () => {
  return(
    <Provider store = {store}>
    <NavigationContainer>
      { store.getState().token == '' ? (
        <StackNavigator.Navigator>
          <StackNavigator.Screen name = 'Login Screen' component = {LoginScreenStack}/>
        </StackNavigator.Navigator>
      ) : (
        <DrawerNavigator.Navigator initialRouteName="Main Screen">
          <DrawerNavigator.Screen name="Main Screen" component={MainScreenStack} />
          <DrawerNavigator.Screen name="Account Screen" component={AccountScreenStack} />
        </DrawerNavigator.Navigator> 
      )}
    </NavigationContainer>
  </Provider>
  )
}

export default App