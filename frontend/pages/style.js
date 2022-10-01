import { StyleSheet, Button, Text, View, Image } from 'react-native';

const COLORS = {
  text: 'black',
  white: '#FDFDFD',
  lightpurple: '#EBE4E9',
  purple: '#DED2DB',
  green: '#B4C5A7',
  darkgreen: '#93A399',
  gray: '#868387',
  tan: '#BEAB8D',
  brown: '#A57C54',
  black: '#34341E',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightpurple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashlogo: {
    height: '30%',
    width: '67.5%',
  },
  button: {
    marginBottom: 20,
    alignItems: "center",
    width: 100,
    padding: 10,
    backgroundColor: COLORS.white,
  },
  space: {
    width: 20,
    height: 20,
  }
});


export default styles;
