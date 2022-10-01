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
    paddingTop: '2%',
  },
  feedPreview: {
    height: '15%',
  },
  feedFull: {
    height: '100%',
    flex: 1,
  },
  h1: {
    fontSize: '60pt',
    fontWeight: '500',
  },
  feedScrollFull: {
  }
});

export default styles;
