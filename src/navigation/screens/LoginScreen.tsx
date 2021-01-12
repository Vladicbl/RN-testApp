import React, {ReactNode,useState} from 'react';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import {
  Button,
  Image,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';

import { connect, useDispatch } from 'react-redux'
import {asynkThunk, changeName, changePassword, store} from '../../toolkitRedux/index'
import INavPageProps from './index'

import {SCREEN} from '../../constants'

import InputArea from '../../components/InputArea'
import ButtonComp from '../../components/ButtonComp'



const LoginScreen = (props : any, {route, navigation} : INavPageProps) => {
    const dispatch = useDispatch()
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

    return (
      <KeyboardAvoidingView style = {{ flex: 1, height: '100%' }}>
      <View style = {styles.container}>
        <InputArea placeholder = 'Account Name' onChangeText = {(value: string ) => {setEmail(value)}}/>
        <InputArea placeholder = 'Password' onChangeText = {(value: string ) => {setPassword(value)}}/>
        <View style = {styles.touchablesContainer}>
          <ButtonComp title = 'Sign In' onPress= {() => { dispatch(asynkThunk()) }}/>
          <ButtonComp title = 'Sign Up' onPress = {() => navigation.navigate('SignUp Screen')}/>
        </View>
        {/* <View style={{alignItems: 'center'}}>
          <Text style = {{color: '#4F6569'}}>Forgot password?</Text>
        </View> */}
      </View>
      </KeyboardAvoidingView>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: .15 * SCREEN.WIDNOW_WIDTH,
    paddingVertical: .20 * SCREEN.WIDNOW_HEIGHT,
    backgroundColor: '#5FC0CE'
  },


    // container : {
    //   flex : 1,
    //   justifyContent : 'center',
    //   alignItems : 'center',
    //   backgroundColor : '#5FC0CE'//'#C5EBF7'
    // },
    touchablesContainer: {
      flex: 0.4,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    touchableView:{
      borderRadius: 30,
      borderColor: '#AAA',
      color: '#A32'
    }
});  

const mapStateToProps = (state : any, ownProps? : any) : any => {
    return {}
}

export default connect(mapStateToProps)(LoginScreen)