import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { bindActionCreators } from 'redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { updateEmail, updatePassword, login, getUser} from "../actions/user";
import { connect } from 'react-redux'

function Login({navigation, user, updateEmail, updatePassword, login, getUser}) {

  return (
    <View style={styles.container}>  
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={user.email}
        onChangeText={(val) => updateEmail(val)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        maxLength={15}
        value={user.password}
        secureTextEntry={true}
        onChangeText={(val) => updatePassword(val)}
      />   
      <TouchableOpacity style={styles.btnContainer} onPress={login}>
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

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)