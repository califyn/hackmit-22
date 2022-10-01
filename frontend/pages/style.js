import { StyleSheet, Text, View, Image } from 'react-native';

const COLORS = {
  text: 'black',
  white: '#FDFDFD',
  purple: '#DED2DB',
  green: '#B4C5A7',
  gray: '#868387',
  tan: '#BEAB8D',
  brown: '#A57C54',
  dark: '#34341E',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashlogo: {
    height: '30%',
    width: '67.5%',
  },
});

export default styles;
