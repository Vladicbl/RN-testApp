import React, {useState, memo, JSXElementConstructor, useEffect} from 'react'
import {
    StyleSheet, View,
} from 'react-native'

import INavPageProps from './index'
import LinearGradient from 'react-native-linear-gradient'
import CardHolder from '../../components/CardHolder'
import Card from '../../components/Card'
import { CardsData } from '../../constants'
import { compose } from '@reduxjs/toolkit'


const MainScreen = ({navigation} : INavPageProps) => {


    return (
        <LinearGradient colors={['#fff', '#33CCCC']} style={styles.linearGradient}>
            
        {/* 
            <View style = {{ position: 'absolute', zIndex: 1, backgroundColor: 'red', width: 50, height : 50}}></View>
            <View style = {{backgroundColor: 'blue',  zIndex: 1, width: 50, height : 50}}></View>
            <View style = {{backgroundColor: 'white', width: 50, height : 50}}></View> 
            
                        <Card style = {{position: 'absolute', left: 160}} title= {'test11'} imageSource={CardsData[0].imageSource} cardText={'TEXT'}/>
            <Card title= {'test22'} imageSource={CardsData[0].imageSource} cardText={'TEXT'}/> 
            <Card title= {'test22'} imageSource={CardsData[0].imageSource} cardText={'TEXT'}/> 
            
            */}

            <View style={{flex: 1}}/>
                <View style={{ flex: 1, backgroundColor: 'red'}}></View>

            <View style={{flex: 1}}/>
        </LinearGradient>
        
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
      },
})

export default memo(MainScreen)