import React, {ReactNode,useState} from 'react';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import {
  Button,
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connect, useDispatch } from 'react-redux'
import {changeName, changePassword} from '../../toolkitRedux/index'
import INavPageProps from './index'



const LoginScreen = ({route, navigation} : INavPageProps) => {
    const dispatch = useDispatch()

    const [email, setEmail ] = useState<string>('')
    const [password, setPassword ] = useState<string>('')

    return (
      <View style = {styles.container}>
        <View style = {styles.textInputContainer}>
          <TextInput 
            placeholder = 'Account Name'
            onChangeText = {(value) => {setEmail(value)}}
            onSubmitEditing = {() => {dispatch(changeName(email))}}
          />
        </View>
        <View style = {styles.textInputContainer}>
          <TextInput 
            placeholder = 'Password'
            onSubmitEditing = {(value) => {dispatch(changePassword(value))}}
          />
        </View>
        <View style = {styles.touchablesContainer}>
        <TouchableHighlight onPress = {() => {}}>
            <View style={styles.touchableView}>
              <Text>Sign In</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress = {() => navigation.navigate('SignUp Screen')}>
            <View style={styles.touchableView}>
              <Text>Sign Up</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : '#C5EBF7'
    },
    textInputContainer : {
      alignItems : 'center',
      width : 250,
      marginBottom : 15,
      borderRadius : 50,
      backgroundColor : '#ADDCE3'
    },
    logoView : {
      paddingBottom : 100,
    },
    logo : {
      width : 120,
      height : 120,
      borderRadius : 80
    },
    touchablesContainer: {
      flex: 0.4,
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent : 'space-around',
      alignItems: 'center',
      marginHorizontal: 80,
      backgroundColor: '#333'
    },
    touchableView:{
      borderRadius: 30,
      borderColor: '#AAA',
      color: '#A32'
    }
});  

const mapStateToProps = (state : any, ownProps? : any) : any => {
    console.log('mstp')
    return {}
}

export default connect(mapStateToProps)(LoginScreen)