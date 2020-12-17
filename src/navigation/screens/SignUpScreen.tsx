import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import auth from '@react-native-firebase/auth';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDNOW_HEIGHT = Dimensions.get('window').height
const WIDNOW_WIDTH = Dimensions.get('window').width

const SignUpScreen = () => {

    const [email, setEmail] = useState('')

    const actionCodeSettings = {
        url: 'https://testrn-8e29f.firebaseapp.com/finishSignUp?cartId=1234',
        handleCodeInApp: true,
        // iOS: {
        //   bundleId: 'com.example.ios'
        // },
        android: {
          packageName: 'com.rtra',
          installApp: true,
          minimumVersion: '12'
        },
        dynamicLinkDomain: 'rtra.page.link'
    };
    
    const signInWithCheck = () => auth().sendSignInLinkToEmail('Vladicbl@yandex.ru', actionCodeSettings).then(function() {
    //auth().sendSignInLinkToEmail(email, actionCodeSettings).then(function() {
        AsyncStorage.setItem('emailForSignIn', email);
        console.log('signInWithCheck done AsyncStorage')
        console.log(AsyncStorage.getItem('emailForSignIn'))
      })
      .catch(function(error) {
          console.log(error)
          console.log('signInWithCheck error')
    });

    return(
        <View style = {styles.container}>
            <View style = {styles.emAr}>
                <Text>E-mail</Text>
                <TextInput
                    placeholder = {'E-mail'}
                    onChangeText = {(value)=>{setEmail(value)}}
                />
            </View>
            
            <View style = {styles.pasAr}>
                <Text>Password</Text>
                <TextInput
                    placeholder = {'Password'}
                />
            </View>

            <View style = {styles.confAr}>
                <Text>Confirm Password</Text>
                <TextInput
                    placeholder = {'Password'}
                />
            </View>

            <View style= {styles.touchableView}>
                <TouchableHighlight onPress = {() => signInWithCheck()}>
                    <View style={styles.touchableView}>
                        <Text>Sign Up</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: .15 * WIDNOW_WIDTH,
        paddingVertical:  .4 * WIDNOW_HEIGHT,
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#477'
    },
    touchableView: {
        backgroundColor: '#A1A'
    },
    emAr: {
        flexDirection: 'row',
        backgroundColor: '#A11'
    },
    pasAr: {
        flexDirection: 'row',
        backgroundColor: '#1A1'
    },
    confAr: {
        flexDirection: 'row',
        backgroundColor: '#11A'
    },
    
})

export default SignUpScreen