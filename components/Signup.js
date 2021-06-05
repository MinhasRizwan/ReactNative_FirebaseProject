import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { updateEmail, updatePassword, signup} from "../actions/user";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function Signup ({navigation, user, updateEmail, updatePassword, signup}) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder= "Name"
                value={user.name}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder= "Email"
                value={user.email}
                onChangeText={(val) => updateEmail(val)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder= "Password"
                value= {user.password}
                secureTextEntry={true}
                onChangeText={(val) => updatePassword(val)}
            />
            <TouchableOpacity style={styles.btnContainer} onPress={signup}>
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

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Signup)