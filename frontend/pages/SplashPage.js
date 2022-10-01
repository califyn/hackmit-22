import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './style'

export default function SplashPage() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.splashlogo}/>
      <Text>Login</Text>
      <Text>Sign Up</Text>
      <StatusBar style="auto" />
    </View>
  );
}
