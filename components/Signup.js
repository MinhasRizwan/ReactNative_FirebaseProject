import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';

export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder= "Name"
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder= "Email"
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder= "Password"
                    secureTextEntry={true}
                />
                <Button
                    color="#3740FE"
                    title="Signup"
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