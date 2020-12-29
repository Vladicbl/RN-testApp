import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'

import {SCREEN} from '../constants'

const ButtonComp = (props:any) => {
    return(
    <TouchableOpacity style = {[styles.container, props.style]} onPress = {props.onPress}>
        <View style = {styles.titleView}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: .3 * SCREEN.WIDNOW_WIDTH,
        height: SCREEN.WIDNOW_HEIGHT * .05,
        paddingHorizontal: 15,
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: '#ADDCE3',
    },
    titleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ButtonComp