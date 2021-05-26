import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import auth from "@react-native-firebase/auth"

//tODO: Replace class component with functional component
export default class Login extends Component {
  signOut = () => {
    auth().signOut().then(() => {
        Alert.alert("Success ✅", "Signed Out successfully")
        this.props.navigation.navigate('Login')
      })
      .catch(error => alert("SignOut failed"))
  }

  render() {
    return (
        // tODO: fetch user name in some other functions , may be in componentDidMount
        // Todo: Use touchable opacity for buttons
        // Todo: Improve the UI
        <View style={styles.container}>
            <Text style = {styles.textStyle}>
                Hello, {auth().currentUser.displayName}
            </Text>

            <Button
                color="#3740FE"
                title="Logout"
                onPress={() => this.signOut()}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: '#fff'
      },
      textStyle: {
        fontSize: 15,
        marginBottom: 20
      }
});