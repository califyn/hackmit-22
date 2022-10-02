import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import styles from './style'
import React, {useState} from 'react';


export default function LoginPage({navigation}) {
  const [username, updateUsername] = React.useState(null);
  const [pwd, updatePassword] = React.useState(null);
  const [error, updateError] = React.useState(null);
  return (
    <View style={styles.container}>
        <View style={styles.loginupcontainer}>
        <View style={styles.center}>
            
      <Image source={require('../assets/logo.png')} style={styles.splashlogosmall}/>
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Username"
        value={username}
        placeholderTextColor="#003f5c"
        onChangeText={updateUsername}
      />
      </View>

      <View style={styles.space} />
    
      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        value={pwd}
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={updatePassword}
      />
      </View>

      <Text style={StyleSheet.create({color:'red'})}>{error}</Text>

      <TouchableOpacity style={styles.loginBtn} onPress={ () => {
        fetch("https://pigeon-attempt.herokuapp.com/login", {
          method: 'POST',
          body: JSON.stringify({
            name: username,
            pwd: pwd
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }).then((response) => response.json()).then((json) => {
          console.log(json);
          console.log(json['error']);
          if (json['error']) {
            updateError(json['error']);
          } else {
            navigation.navigate('FeedPage', {
              username: username
            });
          }
        })}
      }>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupBtn} onPress={() => { navigation.goBack(); }}>
        <Text style={styles.loginText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <StatusBar style="auto" />
      </View>
      </View>
      </View>
  );
}
