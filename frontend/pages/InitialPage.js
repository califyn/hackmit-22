import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import styles from './style'
import * as Location from 'expo-location'

import CenterMap from '../components/CenterMap'
import BackButton from '../components/BackButton'

export default function InitialPage({ navigation, route }) {

  const [location, setLocation] = useState("");
  const [loc_name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        }

        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Balanced,
            enableHighAccuracy: true,
            timeInterval: 5
        });
        console.log(location);
        console.log(location.coords.longitude);
        console.log(location.coords.latitude);
        setLocation(location);

        fetch(
          `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${location.coords.latitude}&lng=${location.coords.longitude}&username=demo`
          ).then((data) => {
            console.log(JSON.stringify(loc_name));
            setName(JSON.stringify(loc_name));
            setName(loc_name);
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
          })
        })();
    }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackButton nav={navigation} />
      <View style={styles.verticalStack}>
          <CenterMap context="send" style={{height: "80%"}} />
          <View style={styles.bottomField}>
                <Text style={styles.bottomText}>Location <Text style={styles.fadeText}>{loc_name}</Text></Text>
          </View>
            <TouchableOpacity onPress={() => {navigation.navigate('RecipientPage', {
                  username: route.params.username,
                  location_name: loc_name,
                  lat: lat,
                  lon: lon
                })}} style={[styles.bottomField, styles.bottomFieldPurple]}>
                <Image source={require('../assets/check-circle.png')} style={styles.confirmButton}/>
            </TouchableOpacity>
      </View>
    </View>
  );
}
