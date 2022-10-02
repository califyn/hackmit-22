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
        () => {
            fetch("https://pigeon-attempt.herokuapp.com/packages", {
              method: 'POST',
              body: JSON.stringify({
                name: route.params.username,
                pwd: "na"
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            }).then((response1) => response1.json()).then((json1) => {
                navigation.navigate('FeedPage', {
                  username: route.params.username,
                  locations: json1.Packages
                });
            });
        }
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
