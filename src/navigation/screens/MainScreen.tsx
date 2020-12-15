import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'
import { store } from '../../toolkitRedux'

import INavPageProps from './index'


const MainScreen = ({navigation} : INavPageProps) => {
    
    console.log('get')
    console.log(store.getState().token)
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Main Screen</Text>
            <Button title = 'To Account Screen' onPress = {() => navigation.navigate('Account Screen')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34A'
    },
    text: {
        fontSize: 24
    }
})

export default MainScreen