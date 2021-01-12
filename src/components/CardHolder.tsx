import React, { Fragment, useEffect, useState } from 'react'
import Card from './Card'
import {CardsData} from '../constants'
import { useDispatch } from 'react-redux'
import { store, setCards, unshiftCard } from '../toolkitRedux'
import { Animated, PanResponder, PanResponderInstance, View } from 'react-native'

const CardHolder = () => {

    const dispatch = useDispatch()
    let content = new Array(CardsData.length)
    
    const [contentStore, setContentSrore] = useState(new Array(CardsData.length))
    const [animsVal, getAnims] = useState(new Array(CardsData.length).fill(new Animated.ValueXY()))


    let panResponders : PanResponderInstance[] =
     animsVal.map((item: Animated.ValueXY) => PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {dx: item.x, dy: item.y}
        ],{useNativeDriver: false}),
        onPanResponderRelease: () => {
            if (!(Number.parseInt(JSON.stringify(item.y)) > (260))) {
                Animated.spring(
                    item, 
                    { 
                        toValue: { x: 0, y: 0 },
                        delay: 100,
                        useNativeDriver: false
                    }
                ).start();
            } else {
                Animated.timing(
                    item,
                    {
                        toValue: {x: 0, y: 0},
                        useNativeDriver: false,
                        duration: 0
                    }
                ).start()
                
                //props.dispatchStore(setIsUpper(!isUpper))
            }
          },
    }))

    useEffect(()=>{
        dispatch(setCards(contentStore))
    },[])

    content = CardsData.map((item) => {

        return <Card
            {...item}
        />
    })

    return(
        <Fragment>
            {content}
        </Fragment>
    )
}

export default CardHolder