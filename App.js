import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Fragment } from 'react';
import HomeScreen from './src/screens/Home'
import WelcomeScreen from './src/screens/Welcome'
import SignInScreen from './src/screens/SignIn'


const Stack = createStackNavigator();

function App() {
  const isLoggedIn = false
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn
          ? 
            <Stack.Screen name="Home" component={HomeScreen} />
          :
            <Fragment>
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Sign In" component={SignInScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Fragment>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

