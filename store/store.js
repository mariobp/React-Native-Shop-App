import { createStore, combineReducers } from 'redux';
import productReducer from './reducers/products';
import cartReducer from './reducers/cart';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;
