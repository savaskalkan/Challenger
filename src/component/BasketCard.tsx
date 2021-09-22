import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {iProduct} from '../redux';
import styles from './styles';

const DEFAULT_AVATAR = require('../images/brokenLink.png');

const BasketCard = (props: {
  item: iProduct;
  index: number;
  onPressIncrease(index: number): void;
  onPressDecrease(index: number): void;
  onPressRemove(id: number): void;
}) => {
  const {onPressIncrease, onPressDecrease, onPressRemove, item, index} = props;
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
        <TouchableOpacity onPress={() => onPressRemove(id)} style={{}}>
          <Text style={styles.addText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardFooterButtonSet}>
        <TouchableOpacity onPress={() => onPressDecrease(index)}>
          <Text style={styles.icons}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.quantityInput}
          //onChangeText={text => setWishtext(text)}
          value={quantity?.toString()}
          editable={false}
        />
        <TouchableOpacity onPress={() => onPressIncrease(index)}>
          <Text style={styles.icons}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketCard;
