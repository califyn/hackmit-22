import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, Pressable, ScrollView, Animated, TouchableOpacity } from 'react-native';
import styles from './style'

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

  const feed_test = route.params.locations;


  APressable = Animated.createAnimatedComponent(Pressable);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.createButtonWrap}>
          <TouchableOpacity onPress={() => {navigation.navigate('InitialPage', {
                  username: route.params.username
                })}} style={styles.createButton}>
           <Image source={require('../assets/plus.png')} style={{width: 30, height: 30, padding: 20}} />
          </TouchableOpacity>
      </View>
      <CenterMap />
          <APressable onPressOut={() => {if(!feedUp){setFeedAndAnimate(!feedUp);}}} pressRetentionOffset={{top: 500}} disabled={feedUp} style={[styles.feed, {flex: feedUp ? 1 : null, height: realHeight, paddingTop: paddingAnimate}]}>
                  <Text style={styles.h1}>Feed</Text>
                  <ScrollView onScrollEndDrag={(event) => {if(event.nativeEvent.contentOffset.y <= -100) {setFeedAndAnimate(false)}}} style={feedUp ? styles.feedScrollFull : null} showsVerticalScrollIndicator={false}>
                    {feed_test.map((pkg) => {
                        return (
                            <View style={styles.pkgPreview}>
                                    <Image source={require('../assets/gift_pin.png')} style={styles.feedSumPin} />
                                    <View style={styles.pkgContentPrev}>
                                        <Text style={styles.h3}>@{pkg.from_user}</Text>
                                        <Text style={styles.text}>{pkg.text}</Text>
                                    </View>
                            </View>
                        );
                    })}
                  </ScrollView>
          </APressable>
    </View>
  );
}
