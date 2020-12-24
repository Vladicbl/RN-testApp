import React, {useState, useRef, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    Button,
    Alert,
    Keyboard
} from 'react-native'
import auth from '@react-native-firebase/auth';
import { ScrollView, TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDNOW_HEIGHT = Dimensions.get('window').height
const WIDNOW_WIDTH = Dimensions.get('window').width

//import styled from 'styled-components/native'

const SignUpScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
    
  const signUp = () => {
    createUserWithEmailAndPassword()
  }

  const createUserWithEmailAndPassword = () => auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    auth().sendSignInLinkToEmail(email, actionCodeSettings).then(function() {
        AsyncStorage.setItem('emailForSignIn', email);
        console.log('signInWithCheck done AsyncStorage')
        console.log(AsyncStorage.getItem('emailForSignIn'))
      })
      .catch(function(error) {
          console.log(error)
          console.log('signInWithCheck error')
    });

    console.log(user)

    //auth().onAuthStateChanged()
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

  const validateEmail = (email : string) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }

  const animationsValues : any[] = []
  const TextValues: string[] = [ 'E-mail', 'Passwod', 'Confirm Password', 'Sign Up' ]

  for (let index = 0; index < 4; index++) {
    animationsValues.push(new Animated.Value(0))
  }

  const staggerAnimation = () =>{ 
    const animations = animationsValues.map((value) => {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false
        }
      )
    })
    Animated.stagger(100, animations).start()
  }

  useEffect(() =>{
    staggerAnimation()
  }, [])

  const content = animationsValues.map((value, index) => {
    return index != 3 ?
    (<Animated.View key = {index} 
    style = {{ paddingHorizontal: 15, marginVertical: 10, borderRadius: 20, backgroundColor: '#ADDCE3', opacity :  value}}>
      <TextInput
          placeholder = {TextValues[index]}
          onChangeText = {(value) =>{ index == 0 ? setEmail(value) : index == 1 ? setPassword(value) : setConfirmPassword(value)}}
      />
    </Animated.View>)
    :
    (<Animated.View key = {index} style= {{backgroundColor: '#ADDCE3', borderRadius: 20, marginTop: 10,
      height: WIDNOW_HEIGHT * .05, justifyContent: 'center', alignItems: 'center', marginHorizontal: .15 * WIDNOW_WIDTH, opacity :  value}}>
      <TouchableHighlight onPress = {() => {
        validateEmail(email) && password == confirmPassword ? signUp() : Alert.alert('Try again!','E-mail address doesn\'t allowed.\nOr password doesn\'t match confirm password.')
        }}>
              <Text>{TextValues[index]}</Text>
      </TouchableHighlight>
    </Animated.View>)
  })

  return(
    <View style = {styles.container}>
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: .15 * WIDNOW_WIDTH,
      paddingVertical: .20 * WIDNOW_HEIGHT,
      backgroundColor: '#5FC0CE'
  },
})

export default SignUpScreen