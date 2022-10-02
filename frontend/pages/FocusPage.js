import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Image } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'


export default function SignupPage() {
  return (
    <View style={styles.container}>
      <View style={styles.upcontainer}>
        <View style={styles.center}>
          <Image source={require('../assets/logo.png')} style={styles.splashlogosmall}/>
        </View>
        <View style={styles.space} />
          <Text>From:</Text>
          <View style={styles.space} />
          <Text>To:</Text>
          <View style={styles.space} />
          <Text>insert message</Text>
      </View>
    </View>
  );
}
