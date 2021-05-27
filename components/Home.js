import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import auth from "@react-native-firebase/auth"

function Home ({navigation}) {
  const signOut = () => {
    auth().signOut().then(() => {
        Alert.alert("Success ✅", "Signed Out successfully")
        navigation.navigate('Login')
      })
      .catch(error => alert("SignOut failed"))
  }

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
              onPress={signOut}
          />
    </View>
  );
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

export default Home;