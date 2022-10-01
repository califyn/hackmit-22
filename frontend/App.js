import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FocusPage from './pages/FocusPage';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FocusPage">
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="FocusPage" component={FocusPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
