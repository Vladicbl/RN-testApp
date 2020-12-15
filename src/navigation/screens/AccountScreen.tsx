import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

import INavPageProps from './index'

const AccountScreen = ({navigation} : INavPageProps) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.accountName}>
                <Text style = {styles.textUserName && styles.textColor}>User Name</Text>
            </View>
            <View style = {styles.mainTextContainer}>
                <Text style = {styles.textColor}>text</Text>
            </View>
            <View style = {styles.buttonContainer}>
                <Button
                    title = 'Go to Main Screen'
                    onPress = {() =>{ navigation.navigate('Main Screen')}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent : 'center',

        backgroundColor: '#C3E5F7'
    },
    textColor: {
        color: '#1D6980'
    },
    textUserName: {
        fontSize: 24,
    },
    pageName: {
        flex: 0.15,
        marginTop : 30
    },
    accountName: {
        flex: 0.15
    },
    mainTextContainer: {
        flex: 0.6
    },
    buttonContainer: {
        flex: 0.1
    }
})

export default AccountScreen