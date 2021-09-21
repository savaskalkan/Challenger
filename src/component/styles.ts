import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardCover: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#EBECF0',
    minHeight: 100,
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    padding: 10,
  },
  cardImage: {
    width: 75,
    height: 75,
    marginHorizontal: 10,
  },
  infoView: {flexShrink: 1},
  nameText: {fontWeight: 'bold'},
  priceText: {alignSelf: 'flex-end', bottom: 0},
  addText: {color: '#808080'},
  loadingCard: {
    width: '90%',
    height: 120,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  icons: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'teal',
  },
  cardFooter: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooterButtonSet: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  quantityInput: {
    padding: 2,
    width: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
});

export default styles;
