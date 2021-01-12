import 'react-native-gesture-handler'

import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler';

import { Provider } from 'react-redux'
import { store } from '../toolkitRedux/index'

import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import AccountScreen from './screens/AccountScreen'
import MainScreen from './screens/MainScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootDrawerParamListType } from './types'


const DrawerNavigator = createDrawerNavigator<RootDrawerParamListType>()
const StackNavigator = createStackNavigator()
const TabNavigator = createBottomTabNavigator()

const AccountScreenStack = () => (
    <StackNavigator.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#7AD8F5',
            headerStyle: {
                backgroundColor: '#396175',
            }
        }}
    >
        <StackNavigator.Screen
            name='AccountScreen'
            component={AccountScreen}
            options={{
                headerRight: () => (
                    <TouchableHighlight
                        onPress={() => { console.log('TH Pressed') }}
                    >
                        {/* <Image 
                style = {{width: 40, height : 40}} 
                source = {require('./resouces/gear.png')}
              /> */}
                    </TouchableHighlight>
                ),
            }}
        />
    </StackNavigator.Navigator>
)

const LoginScreenStack = () => (
    <StackNavigator.Navigator
        initialRouteName='Login Screen'
        screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#7AD8F5',
            headerStyle: {
                backgroundColor: '#396175',
            }
        }}>
        <StackNavigator.Screen
            name='Login Screen'
            component={LoginScreen}
        />
        <StackNavigator.Screen
            name='SignUp Screen'
            component={SignUpScreen}
        />
    </StackNavigator.Navigator>
)

const MainScreenStack = () => (
    <TabNavigator.Navigator>
        <TabNavigator.Screen name='MainScreen' component={MainScreen} />
        <TabNavigator.Screen name='MainScreen1' component={MainScreen} />
    </TabNavigator.Navigator>
)

const AppNavigator = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                {store.getState().account.token != '' ? (
                    <LoginScreenStack />
                ) : (
                        <DrawerNavigator.Navigator initialRouteName="MainScreen">
                            <DrawerNavigator.Screen name="MainScreen" component={MainScreenStack} />
                            <DrawerNavigator.Screen name="AccountScreen" component={AccountScreenStack} />
                        </DrawerNavigator.Navigator>
                    )}
            </NavigationContainer>
        </Provider>
    )
}

export default AppNavigator