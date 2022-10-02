import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Keyboard } from 'react-native';
import styles from './style'

import BackButton from '../components/BackButton'

export default function InitialPage({ navigation, route }) {
  const [content, setContent] = React.useState(null);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackButton nav={navigation} />
      <View style={styles.verticalStack}>
            <ScrollView keyboardShouldPersistTaps="handled">
                  <TextInput
                    style={styles.contentTextInput}
                    placeholder="Package contents here..."
                    value={content}
                    placeholderTextColor="#aaaaaa"
                    onChangeText={setContent}
                    autoCorrect={false}
                    enablesReturnKeyAutomatically={true}
                    multiline={true}
                  />
          </ScrollView>
          <View style={[styles.bottomField, styles.bottomFieldBig]}>
                <View style={styles.bottomTextAtWrap}><Text style={styles.bottomTextAt}>@afamousperson</Text></View>
                <Text style={styles.bottomText}>Location <Text style={styles.fadeText}>my house</Text></Text>
          </View>
            <TouchableOpacity style={[styles.bottomField, styles.bottomFieldPurple]} onPress={() => {
              console.log("api needs to validate recipient her...");
              navigation.navigate("SendingPage", {
                username: route.params.username
              })
              }}>
                <Image source={require('../assets/check-circle.png')} style={styles.confirmButton}/>
            </TouchableOpacity>
      </View>
    </View>
  );
}
