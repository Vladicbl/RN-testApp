import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Button
 } from 'react-native'
import INavPageProps from './index'

const AccountPage = ({navigation} : INavPageProps) => {
    return(
        <View style = {styles.container}>
            <Text>Account page</Text>
            <Button
                title = 'Go to Login'
                onPress = {() =>{ navigation.navigate('Login page')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5AB'
    },
    text: {

    }
})

export default AccountPage