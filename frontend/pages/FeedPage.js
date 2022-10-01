import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style'

import CenterMap from '../components/CenterMap'

export default function FeedPage() {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <Image source={require('../assets/logo.png')} style={styles.splashlogo}/>
      <StatusBar style="auto" />
      <CenterMap />
    </View>
  );
}
