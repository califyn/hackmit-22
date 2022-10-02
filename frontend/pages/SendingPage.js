import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Image } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'
import BackButton from '../components/BackButton'
import { useEffect } from 'react'

export default function SendingPage({ navigation, route } ) {
  console.log(route);
  console.log('rouete sneding');

  useEffect(() => {
    setTimeout(
        () => {navigation.navigate("FinalPage", { username: route.params.username, locations: route.params.locations })}
    , 2000);
  });

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
