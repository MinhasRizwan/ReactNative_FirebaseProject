import * as React from 'react';
import createSagaMiddleware from 'redux-saga'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'
import Firebase from './config/Firebase'
import {useEffect, useState} from 'react';
import Setting from './components/Setting';
import News from './components/News';
import rootSaga from './sagas';
import Animals from './components/Animals';

const sagaMiddleware = createSagaMiddleware();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

//Todo: Replace thunkMiddleware from here with sagaMiddleware
const store = createStore(reducer, applyMiddleware(sagaMiddleware, thunkMiddleware))

sagaMiddleware.run(rootSaga)

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log("calling effect from App.js")
		Firebase.auth().onAuthStateChanged(myUser => {
      if (Firebase.auth().currentUser != null) {
			  setLoggedIn(true)
			} else {
        setLoggedIn(false)
      }
	  })
	}, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn == false ? (
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#3740FE',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Signup} />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator
            tabBarOptions={{
              labelStyle: {
                fontSize: 16,
                margin: 0,
                padding: 4,
                fontWeight: 'bold'
              },
            }}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="News" component={News}/>
            <Tab.Screen name="Animals" component={Animals}/>
            <Tab.Screen name="Setting" component={Setting}/>
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
}

export default App;