import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashPage from './pages/SplashPage';
import FeedPage from './pages/FeedPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="FeedPage" component={FeedPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
