import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { connect } from 'react-redux'
import Firebase from '../config/Firebase.js'

function Home ({navigation, user}) {
    
  return (
      // tODO: fetch user name in some other functions , may be in componentDidMount
      // Todo: Use touchable opacity for buttons
      // Todo: Improve the UI
      <View style={styles.container}>
          <Text style = {styles.textStyle}>
              Hello, {Firebase.auth().currentUser.email}
          </Text>
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

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Home)