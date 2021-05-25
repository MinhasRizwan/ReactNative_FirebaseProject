import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#d02683',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
        initialRouteName="Login"
        >    
        <Stack.Screen
          name="SignUp" 
          component={Signup} 
           />    
        <Stack.Screen
          name="Login" 
          component={Login} 
           />
        <Stack.Screen
          name="Home" 
          component={Home} 
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;