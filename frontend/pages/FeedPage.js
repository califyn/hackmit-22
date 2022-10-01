import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, Pressable, ScrollView, Animated } from 'react-native';
import styles from './style'

import CenterMap from '../components/CenterMap'

export default function FeedPage() {
  const [feedUp, setFeedUp] = useState(false);
  const heightA = useRef(new Animated.Value(15)).current;
  const realHeight = heightA.interpolate({inputRange:[0,100],outputRange:['0%','100%']});

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

  APressable = Animated.createAnimatedComponent(Pressable);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CenterMap />
          <APressable onPressOut={() => {if(!feedUp){setFeedAndAnimate(!feedUp);}}} pressRetentionOffset={{top: 500}} disabled={feedUp} style={[styles.feed, {flex: feedUp ? 1 : null, height: realHeight}]}>
                  <Text style={styles.h1}>Feed</Text>
                  <ScrollView onScrollEndDrag={(event) => {if(event.nativeEvent.contentOffset.y <= -100) {setFeedAndAnimate(false)}}} style={feedUp ? styles.feedScrollFull : null} showsVerticalScrollIndicator={false}>
                      <Text style={styles.h1}>Feed1</Text>
                      <Text style={styles.h1}>Feed</Text>
                      <Text style={styles.h1}>Feed2</Text>
                      <Text style={styles.h1}>Feed</Text>
                      <Text style={styles.h1}>Feed3</Text>
                      <Text style={styles.h1}>Feed</Text>
                      <Text style={styles.h1}>Feed4</Text>
                      <Text style={styles.h1}>Feed</Text>
                      <Text style={styles.h1}>Feed5</Text>
                      <Text style={styles.h1}>Feed</Text>
                      <Text style={styles.h1}>Feed6</Text>
                      <Text style={styles.h1}>Feed</Text>
                      <Text style={styles.h1}>Feed6</Text>
                      <Text style={styles.h1}>Feed</Text>
                      <Text style={styles.h1}>Feed7</Text>
                      <Text style={styles.h1}>Feed</Text>
                      <Text style={styles.h1}>Feed8</Text>
                      <Text style={styles.h1}>Feed</Text>
                      <Text style={styles.h1}>Feed9</Text>
                      <Text style={styles.h1}>Feed</Text>
                  </ScrollView>
          </APressable>
    </View>
  );
}
