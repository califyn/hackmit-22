import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import styles from './style'

import BackButton from '../components/BackButton'

export default function InitialPage({ navigation }) {
  const [recipient, setRecipient] = React.useState(null);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackButton nav={navigation} />
      <View style={styles.verticalStack}>
          <View style={styles.centerTextWrap}>
            <Text style={styles.h2}>Send this to...</Text>
            <View style={styles.atOneLine}>
                <Text><Text style={styles.h1}>@</Text></Text>
                  <TextInput
                    style={styles.atTextInput}
                    placeholder="a friend?"
                    value={recipient}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={setRecipient}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                  />
            </View>
            <Text style={[styles.text, {color: "red", marginTop: 20}]}>There&apos;s no one with this username</Text>
          </View>
          <View style={styles.bottomField}>
                <Text style={styles.bottomText}>Location <Text style={styles.fadeText}>my house</Text></Text>
          </View>
          <View style={[styles.bottomField, styles.bottomFieldPurple]}>
            <TouchableOpacity onPress={() => {console.log("api needs to validate recipient her...");}}>
                <Image source={require('../assets/check-circle.png')} style={styles.confirmButton}/>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}
