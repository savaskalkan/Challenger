import React, {FC} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {iProduct, RemoveFromBasketList, SetBasketList} from '../../redux';
import {Loading, BasketCard} from '../../component';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        <>
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
          <View>
            <View style={styles.subTotal}>
              <Text>
                {`Subtotal: £${basketList
                  .reduce(
                    (a: any, b: any) => a + (b.price * b.quantity || 0),
                    0,
                  )
                  .toFixed(2)}`}
              </Text>
            </View>
            <TouchableOpacity style={styles.proceedButton}>
              <Text style={styles.proceedText}>PROCEED TO CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Basket;
