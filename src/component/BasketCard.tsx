import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {iProduct} from '../redux';
import styles from './styles';

const DEFAULT_AVATAR = require('../images/brokenLink.png');

const BasketCard = (props: {
  item: iProduct;
  onPressIncrease(id: number): void;
  onPressDecrease(id: number): void;
  onPressRemove(item: iProduct): void;
}) => {
  const {onPressIncrease, onPressDecrease, item} = props;
  const {colour, img, name, price, quantity, id} = item;

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
        <View style={styles.cardFooter}>
          <TouchableOpacity onPress={() => onPress(item)} style={{}}>
            <Text style={styles.addText}>Remove</Text>
          </TouchableOpacity>
          <View style={styles.cardFooterButtonSet}>
            <TouchableOpacity onPress={() => onPressDecrease(id)}>
              <Text style={styles.icons}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.quantityInput}
              //onChangeText={text => setWishtext(text)}
              value={quantity?.toString()}
            />
            <TouchableOpacity onPress={() => onPressIncrease(id)}>
              <Text style={styles.icons}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasketCard;
