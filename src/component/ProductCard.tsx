import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {iProduct} from '../redux';
import styles from './styles';

const DEFAULT_AVATAR = require('../images/brokenLink.png');

const ProductCard = (props: {
  item: iProduct;
  onPress(item: iProduct): void;
  checkInBasket: boolean;
}) => {
  const {onPress, item, checkInBasket} = props;
  const {colour, img, name, price} = item;

  return (
    <View style={styles.cardCover}>
      <Image
        defaultSource={DEFAULT_AVATAR}
        style={styles.cardImage}
        source={{uri: img}}
      />
      <View style={styles.infoView}>
        <Text style={styles.nameText}>{name}</Text>
        <Text>Colour: {colour}</Text>
        <Text>Price: {price}</Text>
      </View>
        <TouchableOpacity
          onPress={() => onPress(item)}
          style={styles.priceText}>
          <Text style={styles.addText}>
            {checkInBasket ? 'Remove' : 'Add to Basket'}
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
