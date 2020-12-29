import React from 'react'
import {View, TextInput, StyleSheet, Dimensions} from 'react-native'

import {SCREEN} from '../constants'

const InputArea = (props:any) => {
    return(
        <View style = {[styles.container, props.style]}>
            <TextInput
                placeholder = {props.placeholder}
                onChangeText = {props.onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: .70 * SCREEN.WIDNOW_WIDTH,
        paddingHorizontal: 15,
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: '#B3E4EC',
    }
})

export default InputArea