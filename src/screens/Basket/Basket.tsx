import React, {FC} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {iProduct, RemoveFromBasketList, SetBasketList} from '../../redux';
import {Loading, BasketCard} from '../../component';
import styles from './styles';

const Basket: FC = () => {
  const dispatch = useDispatch();

  const {GeneralResponse} = useSelector((state: any) => state, shallowEqual);
  const {basketList} = GeneralResponse;

  const onPressIncrease = (index: number) => {
    basketList[index].quantity = basketList[index].quantity + 1;
    dispatch(SetBasketList(basketList));
  };

  const onPressDecrease = (index: number) => {
    if (basketList[index].quantity > 1) {
      basketList[index].quantity = basketList[index].quantity - 1;
      dispatch(SetBasketList(basketList));
    }
  };

  const onPressRemove = (id: number) => {
    dispatch(RemoveFromBasketList(id));
  };

  return (
    <View style={styles.container}>
      {!basketList.length ? (
        <Loading text="Please add item" />
      ) : (
        <FlatList
          data={basketList}
          renderItem={(data: {item: iProduct; index: number}) => {
            const {item, index} = data;
            return (
              <BasketCard
                item={item}
                index={index}
                onPressIncrease={onPressIncrease}
                onPressDecrease={onPressDecrease}
                onPressRemove={onPressRemove}
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
