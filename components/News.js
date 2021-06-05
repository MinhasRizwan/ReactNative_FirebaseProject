import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux'

function News ({navigation, user}) {
    
  return (
      // tODO: fetch user name in some other functions , may be in componentDidMount
      // Todo: Use touchable opacity for buttons
      // Todo: Improve the UI
      <View style={styles.container}>
          <Text style = {styles.textStyle}>
              Today's Top News
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

export default connect(mapStateToProps)(News)