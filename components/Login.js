import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import auth from "@react-native-firebase/auth"

//tODO: Replace class component with functional component
export default class Login extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: ''
    }
  }

  singIn = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    }else {
      auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
          Alert.alert("Success ✅", "Signed In successfully ........")
          this.props.navigation.navigate('Home')
          this.setState({
            email: '', 
            password: ''
          })
        })
        .catch(error => alert("SignIn failed"));
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
          placeholder="Email"
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          maxLength={15}
          secureTextEntry={true}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
        />   
        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => this.singIn()}
        />   
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          Don't have account? Click here to Signup
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
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  }
});