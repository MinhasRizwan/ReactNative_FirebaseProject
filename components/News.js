import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux'
import {getNews} from '../actions/user'
import {useEffect} from 'react'

function News ({navigation, article, getNews}) {

  useEffect(() => {
    console.log("calling News effect" + article)
	}, [])
    
  return (
      // tODO: fetch user name in some other functions , may be in componentDidMount
      // Todo: Use touchable opacity for buttons
      // Todo: Improve the UI
      <View style={styles.container}>
        <Button
          color="#3740FE"
          title="Get Latest News"
          onPress={getNews}
        />
        <Text>{"Hey there : " + article}</Text>
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

const mapStateToProps = (state) => {
  return {
    article: state.news
  }
}

const mapDispatchToProps = {
  getNews: getNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(News)