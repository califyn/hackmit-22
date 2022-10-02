import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Image } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'
import { useEffect } from 'react'

export default function FinalPage( { navigation, route } ) {
  console.log(route);
  console.log('route Final');

  useEffect(() => {
    setTimeout(
        () => {navigation.navigate("FeedPage", { username: route.params.username, locations: route.params.locations })}
    , 1000);
  });

  return (
    <View style={styles.container}>
      <View style={styles.upmidcontainer}>
        <View style={styles.center}>
          <Image source={require('../assets/logo.png')} style={styles.splashlogobig}/>
         <View style={styles.space} />
          <Text style={styles.largetext}>Sent!</Text>
        </View>
      </View>
    </View>
  );
}
