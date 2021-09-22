import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {
  iProduct,
  SetProductList,
  Add2BasketList,
  RemoveFromBasketList,
} from '../../redux';
import {ProductCard, Loading} from '../../component';
import api from '../../api';
import styles from './styles';

const BASKET_LOGO = require('../../images/basketLogo.png');

interface iProps {
  navigation: any;
}

const List: FC<iProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const {GeneralResponse} = useSelector((state: any) => state, shallowEqual);
  const {productList, basketList} = GeneralResponse;

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getProducts = () => {
    setRefreshing(true);
    api.getListofProducts().then(res => {
      dispatch(SetProductList(res));
      setRefreshing(false);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const _onRefresh = async () => {
    getProducts();
  };

  const onItemPress = (item: iProduct) => {
    const control = basketList.filter((x: iProduct) => x.id === item.id);
    if (!control.length) {
      item.quantity = 1;
      dispatch(Add2BasketList(item));
    } else {
      dispatch(RemoveFromBasketList(item.id));
    }
  };

  return (
    <View style={styles.container} testID="list-screen">
      {!productList.length ? (
        <Loading text="Loading..." />
      ) : (
        <>
          <FlatList
            data={productList}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
            }
            renderItem={(data: {item: iProduct}) => {
              const checkInBasket = basketList.filter(
                (x: iProduct) => x.id === data.item.id,
              );
              return (
                <ProductCard
                  item={data.item}
                  onPress={onItemPress}
                  checkInBasket={checkInBasket.length}
                />
              );
            }}
            keyExtractor={(item: iProduct) => item.id.toString()}
          />
          <TouchableOpacity
            style={styles.basketView}
            onPress={() => navigation.navigate('Basket')}>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{basketList?.length}</Text>
            </View>
            <Image style={styles.basketLogo} source={BASKET_LOGO} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default List;
