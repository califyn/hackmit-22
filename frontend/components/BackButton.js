import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../pages/style'

export default function BackButton(nav) {
    return (
      <View style={styles.backButtonWrap}>
          <TouchableOpacity onPress={() => nav.goBack()} style={styles.backButton}>
           <Text style={styles.backButtonText}>←</Text> 
          </TouchableOpacity>
      </View>
    );
}
