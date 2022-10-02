import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableHighlight, TouchableOpacity, Text, View, Image } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style';
import COLORS from './style';
import React, {useState} from 'react';

export default function SplashPage({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.splashlogobig}/>
      <View style={styles.space} />
      <Text style={styles.titletext}>CarePigeon</Text>

      <TouchableOpacity title="Login" style={styles.loginBtn} onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity title="Sign Up" style={styles.signupBtn} onPress={() => navigation.navigate('SignupPage')}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.space} />
      <StatusBar style="auto" />
    </View>
  );
}
