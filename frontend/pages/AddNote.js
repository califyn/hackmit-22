import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableHighlight, Text, View, Image } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'
import COLORS from './style'
import { SafeAreaView, TextInput, Button } from "react-native";
import React from "react";


export default function SplashPage() {
    const [msg, updateMsg] = React.useState(null);
    const [text, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.splashlogo}/>
        <View style={styles.space} />
        <Text>Add Note</Text>
        <View style={styles.space} />
        <SafeAreaView>
            <TouchableHighlight>
                <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={updateMsg}
                    value={msg}
                    placeholder="Write your note here!"
                />
            </TouchableHighlight>
            <Text>Recipient:</Text>
            <TouchableHighlight>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={text}
                    placeholder="Recipient"
                />
            </TouchableHighlight>
            <Button onPress={() => {
                fetch("https://pigeon-attempt.herokuapp.com/addpackage", {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({from_user: "genericp3rson", to_user: text, message: msg, lat: 10000.3, lon: 4944.3}) 
                    // NOTE: UPDATE THIS TO GRAB THE ACTUAL LAT/LON AND USERNAME
                  });
            }} title="Send!"></Button>
        </SafeAreaView>

        <View style={styles.space} />
        <StatusBar style="auto" />
        </View>
    );
}
