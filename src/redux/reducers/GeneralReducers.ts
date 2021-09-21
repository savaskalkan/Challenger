import {
  SET_PRODUCT_LIST,
  SET_BASKET_LIST,
  ADD2_BASKET_LIST,
  REMOVE_FROM_BASKET_LIST,
  UPDATE_PRODUCT,
} from '../actions/types';
import {iGeneralState} from '../interfaces';

const INITIAL_STATE: iGeneralState = {
  productList: [],
  basketList: [],
};
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return {...state, productList: action.payload};

    case SET_BASKET_LIST:
      return {...state, basketList: action.payload};

    case ADD2_BASKET_LIST:
      return {...state, basketList: [...state.basketList, action.payload]};

    case REMOVE_FROM_BASKET_LIST:
      const newList = state.basketList.filter(x => x.id !== action.payload);
      return {...state, basketList: newList};

    case UPDATE_PRODUCT:
      const updateList = state.basketList.filter(
        x => x.id !== action.payload.id,
      );
      updateList.push(action.payload);
      return {...state, basketList: updateList};

    default:
      return state;
  }
};
