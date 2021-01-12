import { configureStore } from '@reduxjs/toolkit'
import React, {useRef, useState} from 'react'
import {
    Animated,
    PanResponder,
    PanResponderInstance,
    Platform,
    StyleProp,
    ViewStyle
} from 'react-native'
import styled from 'styled-components/native'

interface PropsType {
    title: string,
    imageSource: any,
    cardText: string,
    style?: StyleProp<ViewStyle>,
}

const Card : React.FC<PropsType> = (props)=>{

    let [pan, setPan] = useState(new Animated.ValueXY())
    pan.flattenOffset()
    let panResponder : PanResponderInstance = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {dx: pan.x, dy: pan.y}
        ],{useNativeDriver: false}),
        onPanResponderRelease: () => {
            if (!(Number.parseInt(JSON.stringify(pan.y)) > (260))) {
                Animated.spring(
                    pan, 
                    { 
                        toValue: { x: 0, y: 0 },
                        delay: 500,
                        useNativeDriver: false
                    }
                ).start()
            } else {
                Animated.timing(
                    pan,
                    {
                        toValue: {x: 0, y: 0},
                        useNativeDriver: false,
                        duration: 0
                    }
                ).start()
            }
          },
    })


    return (
        <Animated.View
            style = { [props.style, {
                transform: [
                    {translateX: pan.x},
                    {translateY: pan.y}
                ]
            }]}
            {...panResponder.panHandlers}
        >
            <Container>
            <Title>{props.title}</Title>
            <Image source={props.imageSource}></Image>
                <Text>
                    {props.cardText}
                </Text>
            </Container>
        </Animated.View>
    )
}

const Title = styled.Text`
    position: absolute;
    z-index: 1;
    font-size: 40px;
    font-weight: bold;
    color: white;
`

const Image = styled.Image`
    width: 100%;
    height: 70%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`

const Text = styled.Text`
    font-size: 17px;
    margin: 10px;
    line-height: 24px;
    color: #3c4560
`

const Container = styled.View`
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 250px;
    border-radius: 14px;
    background-color: white;
    ${Platform.OS ===  'android' ? 'elevation: 10' : ' TODO: SHADOW' };
`

export default Card