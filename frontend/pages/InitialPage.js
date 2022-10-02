import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import styles from './style'

import CenterMap from '../components/CenterMap'
import BackButton from '../components/BackButton'

export default function InitialPage({ navigation, route }) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackButton nav={navigation} />
      <View style={styles.verticalStack}>
          <CenterMap context="send" style={{height: "80%"}} />
          <View style={styles.bottomField}>
                <Text style={styles.bottomText}>Location <Text style={styles.fadeText}>my house</Text></Text>
          </View>
            <TouchableOpacity onPress={() => {navigation.navigate("RecipientPage"), {
                  username: route.params.username
                }}} style={[styles.bottomField, styles.bottomFieldPurple]}>
                <Image source={require('../assets/check-circle.png')} style={styles.confirmButton}/>
            </TouchableOpacity>
      </View>
    </View>
  );
}
