import React, {ReactNode,useState} from 'react';
import { TextInput } from 'react-native-gesture-handler';
import {
  Button,
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { connect, useDispatch } from 'react-redux'
import {changeName, changePassword} from '../../toolkitRedux/index'
import INavPageProps from './index'


const LoginPage = ({route, navigation} : INavPageProps) => {
    const dispatch = useDispatch()

    return (
      <View style = {styles.container}>
        <View style = {styles.logoView}>
          <Image source = {require('../../../resouces/logo.jpg')} style = {styles.logo}/>
        </View>
        <View style = {styles.textInputContainer}>
          <TextInput 
            placeholder = 'Account Name'
            onChangeText = {(value) => {dispatch(changeName(value))}}
          />
        </View>
        <View style = {styles.textInputContainer}>
          <TextInput 
            placeholder = 'Password'
            onSubmitEditing = {(value) => {dispatch(changePassword(value))}}
          />
        </View>
        <View>
          <Button
            title = 'Go to Account'
            onPress = {() => {
              console.log(typeof route, typeof navigation )
              navigation.navigate('Account page')
            }}
          />
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : '#112'
    },
    textInputContainer : {
      alignItems : 'center',
      width : 250,
      marginBottom : 15,
      borderRadius : 50,
      backgroundColor : '#1191AA'
    },
    logoView : {
      paddingBottom : 100,
    },
    logo : {
      width : 120,
      height : 120,
      borderRadius : 80
    },
});  

const mapStateToProps = (state : any, ownProps? : any) : any => {
    console.log(state)
    console.log('ge')
    console.log(ownProps)

    return {}
}

export default connect(mapStateToProps)(LoginPage)