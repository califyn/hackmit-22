import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Image } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'
import BackButton from '../components/BackButton'

export default function SendingPage(navigation, route) {
  return (
    <View style={styles.container}>
        <BackButton nav={navigation.navigation} />
      <View style={styles.upmidcontainer}>
        <View style={styles.center}>
          <Image source={require('../assets/flying.gif')} style={styles.splashlogobig}/>
         <View style={styles.space} />
          <Text style={styles.largetext}>Sending...</Text>
        </View>
      </View>
    </View>
  );
}
