import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Location from 'expo-location';
import styles from './pages/style';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FocusPage from './pages/FocusPage';
import { useState } from 'react';
import FeedPage from './pages/FeedPage';
import SendingPage from './pages/SendingPage';
import ContentPage from './pages/ContentPage';
import InitialPage from './pages/InitialPage';
import RecipientPage from './pages/RecipientPage';

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
        fetch("https://pigeon-attempt.herokuapp.com/packages", {
          method: 'POST',
          body: JSON.stringify({
            name: "genericp3rson", // UPDATE THIS
            pwd: "na"
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }).then((response) => response.json()).then((json) => {
          console.log(json)});
        // will want some API requests, compare, see if we can unlock any packages ... 
        // essentially, call /packages over and over again
    });
}
setUpTracking();

const Stack = createNativeStackNavigator();

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontsLoaded] = useFonts({
    'VarelaRound': require('./assets/fonts/VarelaRound.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="FeedPage" component={FeedPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="FocusPage" component={FocusPage} />
        <Stack.Screen name="SendingPage" component={SendingPage} />
        <Stack.Screen name="ContentPage" component={ContentPage} />
        <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="RecipientPage" component={RecipientPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
