import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'

import BackButton from '../components/BackButton';

export default function FocusPage({route, navigation}) {
  return (
    <View style={styles.container}>
      <BackButton nav={navigation} />
      <ScrollView style={styles.upcontainer}>
        <View style={styles.center}>
          <Image source={require('../assets/logo.png')} style={styles.splashlogosmall}/>
        </View>
        <View style={styles.focusWrap}>
          <View style={styles.geoIndicator}>
            <Image source={require('../assets/gift_pin.png')} style={styles.geoIndicatorPin} />
            <Text style={[styles.fadeText, styles.geoIndicatorText]}>{route.params.pkg.lat}, {route.params.pkg.lon}</Text>
          </View>
          <Text style={styles.h3}>@{route.params.pkg.to_user}</Text>
          <Text style={styles.fromFieldFocus}>From <Text style={styles.fadeText}>{route.params.pkg.from_user}</Text></Text>
          <Text style={styles.text}>{route.params.pkg.text}</Text>
         </View>
      </ScrollView>
    </View>
  );
}
