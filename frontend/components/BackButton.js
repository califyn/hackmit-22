import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../pages/style'

export default function BackButton(props) {
    return (
      <View style={styles.backButtonWrap}>
          <TouchableOpacity onPress={() => props.nav.goBack()} style={styles.backButton}>
           <Text style={styles.backButtonText}>←</Text> 
          </TouchableOpacity>
      </View>
    );
}
