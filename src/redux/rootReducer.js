import { combineReducers } from 'redux';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,

});

export default rootReducer;