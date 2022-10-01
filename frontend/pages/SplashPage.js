import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableHighlight, TouchableOpacity, Text, View, Image } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'
import COLORS from './style'

export default function SplashPage() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.splashlogobig}/>
      <View style={styles.space} />

      <TouchableHighlight>
        <View style={styles.button}>
          <Text>Login</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={styles.button}>
          <Text>Sign Up</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.space} />
      <StatusBar style="auto" />
    </View>
  );
}
