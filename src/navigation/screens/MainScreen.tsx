import React, {useState, useEffect, useRef, memo} from 'react'
import {
    View,
    StyleSheet,
    PanResponder,
    Animated,
    PanResponderInstance
} from 'react-native'
import { store } from '../../toolkitRedux'
import styled from 'styled-components/native'

import INavPageProps from './index'

import LinearGradient from 'react-native-linear-gradient'


const MainScreen = ({navigation} : INavPageProps) => {

    let [pan, setPan] = useState(new Animated.ValueXY())
    let panResponder : PanResponderInstance = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {dx: pan.x, dy: pan.y}
        ], undefined),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, 
                { 
                    toValue: { x: 0, y: 0 },
                    delay: 100,
                    useNativeDriver: false
                }
            ).start();
          },
    })

    return (
        <LinearGradient colors={['#fff', '#33CCCC']} style={styles.linearGradient}>
            <Animated.View
                style = {{
                    transform: [
                        {translateX: pan.x},
                        {translateY: pan.y}
                    ]
                }}
                {...panResponder.panHandlers}
            >
               <Container>
                <Title>Card's title</Title>
                <Image source={require('../../../resouces/logo.jpg')}></Image>
                    <Text>
                        The view casts a shadow with rounded corners, 
                        since the background drawable defines the view's outline.
                    </Text>
               </Container>
            </Animated.View>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
})

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
    width: 300px;
    height: 400px;
    border-radius: 14px;
    background-color: white;
    elevation: 10;
    shadow-color: blue
`

export default memo(MainScreen)