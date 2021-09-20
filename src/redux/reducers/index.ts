import { combineReducers } from 'redux';
import GeneralReducers from "./GeneralReducers";
/* import DSLReducers from './DSLReducers';
import ShoppingReducers from './ShoppingReducers'; */

export default combineReducers({
/*     DSLResponse: DSLReducers,
    ShoppingResponse: ShoppingReducers, */
    GeneralResponse: GeneralReducers,
});