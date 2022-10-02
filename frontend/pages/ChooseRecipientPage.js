import { TextInput, Text, View, StyleSheet, StatusBar, Image, Button } from 'react-native';
import CenterMap from '../components/CenterMap'
import BackButton from '../components/BackButton'
import styles from './style'
import React, {useState} from 'react';

export default function ChooseRecipientPage({navigation}) {
    const [to_user, updateUser] = React.useState(null);

  return (
    <View style={styles.container}>

      <View style={styles.container}>
      <BackButton nav={navigation} />
      <View style={styles.upcontainer}>
        <View style={styles.center}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Recipient"
                    value={to_user}
                    placeholderTextColor="#003f5c"
                    onChangeText={updateUser}
                />
            </View>
        </View>
      </View>
      </View>
      {/* <View style={styles.container}> */}
        <View style={styles.downcontainer}>
            <Text style={StyleSheet.create({fontSize: 30, fontWeight: "bold"})}>&#x2713;</Text>
        </View>
      {/* </View> */}
    </View>
  );
}
