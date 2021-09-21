import React, {FC, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {iProduct, UpdateProduct, RemoveFromBasketList} from '../../redux';
import {Loading, BasketCard} from '../../component';
import styles from './styles';

const Basket: FC = () => {
  const dispatch = useDispatch();

  const {GeneralResponse} = useSelector((state: any) => state, shallowEqual);
  const {basketList} = GeneralResponse;

  const onPressIncrease = id => {};

  const onPressDecrease = id => {};

  return (
    <View style={styles.container}>
      {!basketList.length ? (
        <Loading text="Please add item" />
      ) : (
        <FlatList
          data={basketList}
          renderItem={(data: {item: iProduct}) => {
            const checkInBasket = basketList.filter(
              (x: iProduct) => x.id === data.item.id,
            );
            return (
              <BasketCard
                item={data.item}
                onPressIncrease={onPressIncrease}
                onPressDecrease={onPressDecrease}
                checkInBasket={checkInBasket.length}
              />
            );
          }}
          keyExtractor={(item: iProduct) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Basket;
