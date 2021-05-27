import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import auth from "@react-native-firebase/auth";
import {useState} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Login({navigation}) {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const loginUser = () => {
    if(emailInput === '' && passwordInput === '') {
      Alert.alert('Enter details to signin!')
    }else {
      auth()
      .signInWithEmailAndPassword(emailInput, passwordInput)
      .then((res) => {
          Alert.alert("Success ✅", "Signed In successfully")
          setEmailInput('')
          setPasswordInput('')
          navigation.navigate('Home')
        })
        .catch(error => alert("SignIn failed"));
    }
  }

  return (
    <View style={styles.container}>  
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={emailInput}
        onChangeText={(val) => setEmailInput(val)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        maxLength={15}
        value={passwordInput}
        secureTextEntry={true}
        onChangeText={(val) => setPasswordInput(val)}
      />   
      <TouchableOpacity style={styles.btnContainer} onPress={loginUser}>
        <Text style={styles.signinBtn}>SignIn</Text>
      </TouchableOpacity>   
      <Text 
        style={styles.loginText}
        onPress={() => navigation.navigate('SignUp')}>
        Don't have account? Click here to Signup
      </Text>                          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  signinBtn: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  btnContainer: {
    backgroundColor: '#d02683',
    marginTop: 40,
    padding: 8,
    borderRadius: 8
  }
});

export default Login;