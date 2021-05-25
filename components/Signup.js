import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import auth from "@react-native-firebase/auth"

export default class Signup extends Component {
    constructor() {
        super();
        this.state = { 
          userName: '',
          email: '', 
          password: ''
        }
      }

    registerUser = async () => {
        try {
         let response =  await auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
          if(response){
            Alert.alert("Success ✅", "Registered successfully")
          }
        } catch (e) {
          alert("Signed Up failed");
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder= "Name"
                    onChangeText={(val) => this.updateInputVal(val, 'userName')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder= "Email"
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder= "Password"
                    secureTextEntry={true}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                />
                <Button
                    color="#3740FE"
                    title="Signup"
                    onPress={() => this.registerUser()}
                />
                <Text
                    style={styles.loginText}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    Already Registered? Click here to login
                </Text>
            </View>
        );
      }
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
      }
  });