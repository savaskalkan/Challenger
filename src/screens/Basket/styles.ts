import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardCover: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: 'red',
    height: 100,
  },
  container: {flex: 1},
  proceedButton: {
    width: '80%',
    maxHeight: 300,
    height: 60,
    backgroundColor: '#03880C',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  proceedText: {color: '#fff'},
  subTotal: {
    width: '80%',
    maxHeight: 300,
    height: 60,
    backgroundColor: '#f7f6f6',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  }
});

export default styles;
