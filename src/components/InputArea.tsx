import React from 'react'
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'
import {View, TextInput, StyleSheet} from 'react-native'

import {SCREEN} from '../constants'

const handleFocus = (e : NativeSyntheticEvent<TextInputFocusEventData>) : void => { // delete this func. It's can't be in presentational component
    console.log(e.currentTarget)
}


interface Props {
    placeholder: string,
    onChangeText: (value: string) => any,
    style?: any
}

const InputArea = (props:Props) => {
    return(
        <View style = {[styles.container, props.style]}>
            <TextInput
                placeholder = {props.placeholder}
                onChangeText = {props.onChangeText}
                onFocus= {handleFocus}
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