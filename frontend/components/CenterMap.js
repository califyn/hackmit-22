import React, { useEffect, useRef, useState } from 'react';
import styles from '../pages/style'

import MapView, { Marker } from 'react-native-maps';
import { Image } from 'react-native';
import * as Location from 'expo-location'

export default function CenterMap(props) {
  let mapRef = useRef(null);
  const [location, setLocation] = useState("");
  const [markers, setMarkers] = useState([]);

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
            setLocation(location);

            mapRef.current.animateToRegion({
                "latitude":location.coords.latitude - 0.005,
                "longitude": location.coords.longitude,
                "latitudeDelta":0.05,
                "longitudeDelta":0.05
            });
            if (markers.length == 0) {
                setMarkers(markers.concat([{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    title: 'Current Location',
                }]));
            }
        })();
    }, []);

  if (props.context != "send") {
    return (
      <MapView style={styles.map} ref={mapRef}>
          {markers.map((obj) => {
            return (
                <MapView.Marker
                    coordinate={{latitude: obj.latitude,
                    longitude: obj.longitude}}
                    title={obj.title}
                    description={obj.subtitle}
                    key={obj.title}
                 >
                    <Image source={require('../assets/gift_pin.png')} style={styles.mapMarker}/>
                 </MapView.Marker>
            );
          })}
      </MapView>
    );
  } else {
    return (
      <MapView style={styles.map} ref={mapRef} pitchEnabled={false} rotateEnabled={false} scrollEnabled={false} zoomEnabled={false}>
          {markers.map((obj) => {
            return (
                <MapView.Marker
                    coordinate={{latitude: obj.latitude,
                    longitude: obj.longitude}}
                    title={obj.title}
                    description={obj.subtitle}
                    key={obj.title}
                 >
                    <Image source={require('../assets/gift_pin_big.png')} style={styles.mapMarkerBig}/> 
                 </MapView.Marker>
            );
          })}
      </MapView>
    );
  }
}
