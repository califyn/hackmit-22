import { StyleSheet, Button, Text, View, Image, Dimensions } from 'react-native';

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
  splashlogobig: {
    height: 200,
    width: 375,
    resizeMode: 'contain',
  },
  splashlogosmall: {
    resizeMode: 'contain',
    height: 100,
    width: 125,
    margin: 'auto',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  mapMarker: {
    width: 50,
    height: 50,
  },
  mapMarkerBig: {
    width: 160,
    height: 160,
  },
  feed: {
    position: 'absolute',
    zIndex: '10',
    bottom: '0%',
    width: '100%',
    backgroundColor: COLORS.lightpurple,
    borderColor: COLORS.lightpurple,
    borderWidth: '20px',
    borderRadius: '20px',
    paddingTop: '4%',
  },
  h1: {
    fontSize: '60pt',
    paddingLeft: 5,
    fontWeight: '500',
    fontFamily: 'VarelaRound',
  },
  h3: {
    fontSize: '20pt',
    fontWeight: '500',
    fontFamily: 'VarelaRound',
  },
  text: {
    fontSize: '16pt',
    fontFamily: 'VarelaRound',
  },
  feedScrollFull: {
    flex: 1,
  },
  pkgPreview: {
    marginTop: '5%',
    width: '100%',
    backgroundColor: COLORS.white,
    borderBottomRightRadius: '10%',
    borderTopLeftRadius: '5%',
    borderWidth: '10%',
    borderColor: COLORS.white,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  feedSumPin: {
    height: '90%',
    width: 100,
    resizeMode: 'contain',
  },
  pkgContentPrev: {
    flex: 1,
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
  },
  inputView: {
    backgroundColor: COLORS.white,
    // borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: '100%',
    fontFamily: 'VarelaRound'
  },
  loginBtn: {
    width:"60%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor: COLORS.green,
  },
  loginText: {
    fontFamily: 'VarelaRound',
  },
  leftcontainer: {
    alignItems: "left",
    width: "80%",
  },
  upcontainer: {
    flex: 1,
    backgroundColor: COLORS.lightpurple,
    alignItems: 'left',
    width: "100%",
    top: 50,
    position: "absolute",
    padding: 20,
  },
  upmidcontainer: {
    flex: 1,
    backgroundColor: COLORS.lightpurple,
    alignItems: 'left',
    width: "100%",
    top: 200,
    position: "absolute",
    padding: 20,
  },
 tofrombox:
 {
  width: "100%",
  backgroundColor: COLORS.white,
  height: 40,
  padding: 10,
 },
 center:
 {
  width: "100%",
  alignItems: 'center',
 },
 largetext:
 {
  fontSize: 20,
  fontFamily: 'VarelaRound',
 },
 backButtonWrap: {
  position: 'absolute',
  left: '6%',
  top: '5%',
  zIndex: '100',
 },
 backButton: {
  backgroundColor: COLORS.black,
  padding: 20,
  borderRadius: '50%',
 },
 backButtonText: {
  fontFamily: 'VarelaRound',
  fontSize: '40pt',
  color: COLORS.lightpurple,
 },
});

export default styles;
