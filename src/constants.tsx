import {
    Dimensions,
} from 'react-native'

export const SCREEN = {
    WIDNOW_HEIGHT: Dimensions.get('window').height,
    WIDNOW_WIDTH: Dimensions.get('window').width
}

export const CardsData = [
    {
        title: '0',
        imageSource: require('RTRA/resources/logo.jpg'),
        cardText: '000000'
    },
    {
        title: '1',
        imageSource: require('RTRA/resources/logo.jpg'),
        cardText: '111111'
    }
]


// cardText: 'Jellyfish is the informal common names given to the medusa-phase ' +
// 'of certain gelatinous members of the subphylum Medusozoa, ' + 
// 'a major part of the phylum Cnidaria'