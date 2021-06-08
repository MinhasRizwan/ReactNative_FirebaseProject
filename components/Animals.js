import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { connect } from 'react-redux'
import {API_CALL_REQUEST_ANIMAL, getAnimal, getNews} from '../actions/user'
import {useEffect} from 'react'

function Animals ({dog, getAnimal}) {

  return (
      // tODO: fetch user name in some other functions , may be in componentDidMount
      // Todo: Use touchable opacity for buttons
      // Todo: Improve the UI
      <View style={styles.container}>
        <Button
          color="#3740FE"
          title="Get Animal"
          onPress={getAnimal}
        />
        <Image source = {{ uri: dog }} style={{height: 200, width: 200,  resizeMode : 'stretch', margin: 10}}/>
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
      dog: state.user.dog
    };
  };
  
  const mapDispatchToProps = {
    getAnimal: getAnimal
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Animals);