import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Image } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'
import BackButton from '../components/BackButton'

export default function SendingPage(navigation, route) {
  return (
    <View style={styles.container}>
      <View style={styles.upmidcontainer}>
        <View style={styles.center}>
          <Image source={require('../assets/flying.gif')} style={styles.splashlogobig}/>
          <View style={styles.space} />
          <Text style={styles.largetext}>Sending...</Text>
        </View>

        {/* <TouchableOpacity style={styles.signupBtn} onPress={() => { console.log(route); navigation.navigate('FeedPage', {username: route.params.username}); }}>
            <Text style={styles.loginText}>Home</Text>
        </TouchableOpacity> */}


        
      </View>
    </View>
  );
}
