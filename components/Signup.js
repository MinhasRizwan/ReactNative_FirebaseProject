import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import {useState} from 'react';
import auth from "@react-native-firebase/auth"
import { TouchableOpacity } from 'react-native-gesture-handler';

function Signup ({navigation}) {
    
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const registerUser = () => {
        if(emailInput === '' && passwordInput === '') {
            Alert.alert('Enter details to signup!')
        }else {
            auth()
            .createUserWithEmailAndPassword(emailInput, passwordInput)
            .then((res) => {
                res.user.updateProfile({
                  displayName: nameInput
                })
                Alert.alert("Success ✅", "Registered successfully")
                navigation.navigate('Login')
              })
              .catch(error => alert("Signed Up failed"));
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder= "Name"
                onChangeText={(val) => setNameInput(val)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder= "Email"
                onChangeText={(val) => setEmailInput(val)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder= "Password"
                secureTextEntry={true}
                onChangeText={(val) => setPasswordInput(val)}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={registerUser}>
                <Text style={styles.signupBtn}>SignUp</Text>
            </TouchableOpacity>
            <Text
                style={styles.loginText}
                onPress={() => navigation.navigate('Login')}>
                Already Registered? Click here to login
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
          color: "#3740FE",
          marginTop: 25,
          textAlign: 'center'
      },
      signupBtn: {
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

  export default Signup;