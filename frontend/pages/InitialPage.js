import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import styles from './style'

import CenterMap from '../components/CenterMap'
import BackButton from '../components/BackButton'

export default function InitialPage({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CenterMap markerSize="big"/>
      <BackButton nav={navigation} />
    </View>
  );
}
