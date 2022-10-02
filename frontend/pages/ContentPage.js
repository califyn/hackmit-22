import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableHighlight, TouchableOpacity, Text, View, Image } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'

export default function ContentPage() {
  return (
    <View style={styles.container}>
    <TextInput
    multiline >
        style={styles.TextInput}
        placeholder="Message"
        placeholderTextColor="#003f5c"
        </TextInput> 
    </View>
  );
}
