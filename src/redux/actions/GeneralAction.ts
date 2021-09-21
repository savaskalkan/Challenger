import {
  SET_PRODUCT_LIST,
  SET_BASKET_LIST,
  ADD2_BASKET_LIST,
  REMOVE_FROM_BASKET_LIST,
  UPDATE_PRODUCT,
} from './types';

import {iProduct} from '../interfaces';

export const SetProductList = (productList: iProduct[]) => {
  return {
    type: SET_PRODUCT_LIST,
    payload: productList,
  };
};
export const SetBasketList = (basketList: iProduct[]) => {
  return {
    type: SET_BASKET_LIST,
    payload: basketList,
  };
};
export const Add2BasketList = (product: iProduct) => {
  return {
    type: ADD2_BASKET_LIST,
    payload: product,
  };
};
export const RemoveFromBasketList = (id: number) => {
  return {
    type: REMOVE_FROM_BASKET_LIST,
    payload: id,
  };
};
export const UpdateProduct = (product: iProduct) => {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
};
