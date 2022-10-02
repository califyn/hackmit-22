import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Location from 'expo-location';
import styles from './pages/style';

import SplashPage from './pages/SplashPage';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FocusPage from './pages/FocusPage';
import { useState } from 'react';

import FeedPage from './pages/FeedPage';

async function setUpTracking () {
    console.log('Starting tracking...')
    let perms = await Location.requestForegroundPermissionsAsync();
    if (perms !== 'granted') {
        console.log('failure... no location...');
    }
    let ret = Location.watchPositionAsync({
        accuracy: Location.Accuracy.Highest,
        distanceInterval: 1,
        timeInterval: 10000,
    }, (loc) => {
        console.log(loc);
        // will want some API requests, compare, see if we can unlock any packages ... 
    });
}
setUpTracking();

const Stack = createNativeStackNavigator();

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="FeedPage" component={FeedPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="FocusPage" component={FocusPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
