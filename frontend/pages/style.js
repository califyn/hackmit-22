import { StyleSheet, Button, Text, View, Image, Dimensions } from 'react-native';

const COLORS = {
  text: 'black',
  white: '#FDFDFD',
  lightpurple: '#EBE4E9',
  darkpurple: '#8A5079',
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
  splashlogomed: {
    resizeMode: 'contain',
    height: 125,
    width: 200,
    margin: 'auto',
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
  h2: {
    fontSize: '40pt',
    fontFamily: 'VarelaRound',
  },
  h3: {
    fontSize: '20pt',
    fontWeight: '500',
    fontFamily: 'VarelaRound',
    color: COLORS.darkpurple,
  },
  fadeText: {
    color: COLORS.gray,
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
    padding: 20,
    flexDirection: 'col',
    justifyContent: 'flex-start',
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
    height: 15,
  },
  inputView: {
    backgroundColor: COLORS.white,
    // borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
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
    marginTop:25,
    backgroundColor: COLORS.green,
  },
  signupBtn: {
    width:"60%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:25,
    backgroundColor: "#B2B0B3",
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
    backgroundColor: COLORS.white,
    width: "100%",
    height: '100%',
  },
  loginupcontainer: {
    alignItems: 'left',
    width: "111%",
    top: 60,
    position: "absolute",
    padding: 20,
  },
  downcontainer: {
    flex: 1,
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    width: "100%",
    bottom: 0,
    height: "10%"
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
   paddingTop: 50,
   width: "100%",
   alignItems: 'center',
   backgroundColor: COLORS.lightpurple,
  },
  largetext:
  {
   fontSize: 20,
   fontFamily: 'VarelaRound',
  },
  titletext:
  {
    fontSize: 30,
    fontFamily: 'VarelaRound',
  },
  backButtonWrap: {
   position: 'absolute',
   left: '6%',
   top: '5%',
   zIndex: '100',
  },
  createButtonWrap: {
   position: 'absolute',
   right: '6%',
   bottom: '5%',
   zIndex: '100',
  },
  backButton: {
   backgroundColor: 'rgba(0, 0, 0, 0.5)',
   padding: 20,
   borderRadius: '50%',
  },
  createButton: {
   backgroundColor: COLORS.white,
   padding: 10,
   borderRadius: '50%',
  },
  backButtonText: {
   fontSize: '40pt',
   color: COLORS.lightpurple,
  },
  createButtonText: {
   fontSize: '40pt',
   color: COLORS.black,
  },
  verticalStack: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '10%',
    backgroundColor: 'white',
  },
  bottomField: {
    width: Dimensions.get('window').width,
    height: '10%',
    zIndex: '10',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 30,
    borderBottom: 2,
    borderColor: 'gray',
  },
  bottomFieldPurple: {
    backgroundColor: COLORS.lightpurple,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0,
  },
  bottomFieldBig: {
    height: '16%',
    borderTopWidth: 1,
    borderColor: COLORS.lightpurple,
  },
  bottomText: {
    fontFamily: 'VarelaRound',
    fontSize: '20pt',
  },
  bottomTextAtWrap: {
    marginBottom: 15,
  },
  bottomTextAt: {
    fontFamily: 'VarelaRound',
    fontSize: '30pt',
    color: COLORS.darkpurple,
  },
  confirmButton: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  centerTextWrap: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    paddingLeft: 30,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderColor: COLORS.lightpurple,
  },
  atOneLine: {
    flexDirection: 'row',
  },
  atTextInput: {
    height: '100%',
    width: '70%',
    fontSize: '30pt',
    marginLeft: 10,
    marginTop: 5,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderColor: COLORS.lightpurple,
    fontFamily: 'VarelaRound',
    color: COLORS.darkpurple,
  },
  contentTextInput: {
    width: '100%',
    flex: 1,
    marginTop: '40%',
    padding: 30,
    fontSize: '18pt',
    fontFamily: 'VarelaRound',
  },
  feedGrad: {
    position: 'absolute',
    width: '100%',
    height: 100,
    zIndex: 20,
  },
  feedOpac: {
    width: "100%",
    zIndex: 30,
    backgroundColor: 'red',
  },
  focusWrap: {
    width: '100%',
    backgroundColor: COLORS.white,
    padding: 30,
    marginTop: 20,
    alignItems: 'left',
  },
  fromFieldFocus: {
    marginTop: 5,
    marginBottom: 20,
    fontFamily: 'VarelaRound',
  },
  geoIndicator: {
    flexDirection: 'row',
    paddingBottom: 8,
  },
  geoIndicatorPin: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  geoIndicatorText: {
    flex: 1,
  },
});

export default styles;
