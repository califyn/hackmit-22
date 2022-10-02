import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, Pressable, ScrollView, Animated, TouchableOpacity } from 'react-native';
import styles from './style'

import { LinearGradient } from 'expo-linear-gradient';

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'

import CenterMap from '../components/CenterMap'

export default function FeedPage({navigation, route}) {
  console.log(route.params.username);
  console.log("ROUTEEEEEE!!");
  const [feedUp, setFeedUp] = useState(false);
  const heightA = useRef(new Animated.Value(15)).current;
  const realHeight = heightA.interpolate({inputRange:[0,100],outputRange:['0%','100%']});
  const paddingAnimate = heightA.interpolate({inputRange:[0,100],outputRange:['4%', '11%']});

  function setFeedAndAnimate(val) {
    if (val == feedUp) {
        return;
    } else {
        setFeedUp(val);
        Animated.timing(
            heightA,
            {
                toValue: val ? 100 : 15,
                duration: 150,
            },
        ).start();
    }
  }

  let mapRef = useRef(null);
  const [location, setLocation] = useState("");
  const [markers, setMarkers] = useState([]);
  const [feed_test, setFeedTest] = useState([]);

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

            fetch("https://pigeon-attempt.herokuapp.com/getClosePackages", {
              method: 'POST',
              body: JSON.stringify({
                user: route.params.username,
                lat: location.coords.latitude,
                lon: location.coords.longitude
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
            }).then((response) => response.json()).then((json) => {
              console.log(json)
            });

            mapRef.current.animateToRegion({
                "latitude": location.coords.latitude - 0.005,
                "longitude": location.coords.longitude,
                "latitudeDelta":0.05,
                "longitudeDelta":0.05
            });

            setInterval(
              () => {
                      fetch("https://pigeon-attempt.herokuapp.com/getClosePackages", {
                      method: 'POST',
                      body: JSON.stringify({
                        user: route.params.username,
                        lat: location.coords.latitude,
                        lon: location.coords.longitude
                      }),
                      headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }
                    }).then((response) => response.json()).then((json) => {
                      console.log(json);
                      console.log("get close packages")
                    });
              },
            5000);
        })();
    }, [markers, feed_test]);
    
  useEffect(() => {
            setInterval(
              () => {
                    console.log('beginning fetch...');
                    fetch("https://pigeon-attempt.herokuapp.com/packages", {
                      method: 'POST',
                      body: JSON.stringify({
                        name: route.params.username,
                        pwd: "na"
                      }),
                      headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }
                    }).then((response1) => response1.json()).then((json1) => {
                        setFeedTest(json1.Packages, () => {console.log('feedtest');console.log(feed_test)});
                        setMarkers(feed_test);
                    });
              },
            5000);
            setFeedTest(route.params.locations);
            setMarkers(feed_test);
  }, [feed_test, markers]);

  APressable = Animated.createAnimatedComponent(Pressable);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.createButtonWrap}>
          <TouchableOpacity onPress={() => {navigation.navigate('InitialPage', {
                  username: route.params.username,
                  locations: route.params.locations
                })}} style={styles.createButton}>
           <Image source={require('../assets/plus.png')} style={{width: 30, height: 30, padding: 20}} />
          </TouchableOpacity>
      </View>
      <MapView style={styles.map} ref={mapRef}>
          {markers.map((obj) => {
            return (
                <MapView.Marker
                    coordinate={{latitude: obj.lat,
                    longitude: obj.lon}}
                    title={obj.id}
                    description={obj.id}
                    key={obj.id}
                 >
                    {obj.seen ? 
                      <Image source={require('../assets/gift_pin.png')} style={styles.mapMarker}/> :
                      <Image source={require('../assets/lock_pin.png')} style={styles.mapMarker}/>
                    } 
                 </MapView.Marker>
            );
          })}
      </MapView>
          <APressable onPressOut={() => {if(!feedUp){setFeedAndAnimate(!feedUp);}}} pressRetentionOffset={{top: 500}} disabled={feedUp} style={[styles.feed, {flex: feedUp ? 1 : null, height: realHeight, paddingTop: paddingAnimate}]}>
                  <Text style={styles.h1}>Feed</Text>
                  <ScrollView onScrollEndDrag={(event) => {if(event.nativeEvent.contentOffset.y <= -100) {setFeedAndAnimate(false)}}} style={feedUp ? styles.feedScrollFull : null} showsVerticalScrollIndicator={false}>
                    {feed_test.map((pkg) => {
                        return ( 
                            <TouchableOpacity style={styles.pkgPreview} onPress={() => {navigation.navigate('FocusPage', {pkg: pkg, locations: route.params.locations, username: route.params.username})}}>
                                    <View style={styles.pkgContentPrev}>
                                        <Text style={styles.h3}>@{pkg.from_user}</Text>
                                        <Text style={styles.text}>{pkg.text}</Text>
                                    </View>
                                    <LinearGradient colors={['rgba(255,255,255,0)', '#ffffff']} style={styles.feedGrad} locations={[0.5, 0.9]}>
                                    </LinearGradient>
                            </TouchableOpacity>
                        );
                    })}
                  </ScrollView>
          </APressable>
    </View>
  );
}
