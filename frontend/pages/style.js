import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashlogo: {
    height: '50%',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  feed: {
    position: 'absolute',
    zIndex: '10',
    bottom: '0%',
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: '20px',
    borderRadius: '20px',
    paddingTop: '4%',
  },
  h1: {
    fontSize: '60pt',
    fontWeight: '500',
  },
  h3: {
    fontSize: '20pt',
    fontWeight: '500'
  },
  text: {
    fontSize: '16pt'
  },
  feedScrollFull: {
    flex: 1,
  },
  pkgPreview: {
    marginTop: '5%',
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: '10%',
    borderWidth: '10%',
    borderColor: 'blue',
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
});

export default styles;
