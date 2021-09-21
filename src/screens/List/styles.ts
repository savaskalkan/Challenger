import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  basketView: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 55,
    right: 55,
  },
  basketLogo: {
    width: 60,
    height: 60,
  },
  container: {flex: 1},
  counter: {
    position: 'absolute',
    top: 2,
    right: 2,
    zIndex: 1,
    padding: 2,
    backgroundColor: 'red',
    borderRadius: 11,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  counterText: {color: '#fff'},
});

export default styles;
