import { ADD_TO_CART } from '../actions/cart';
import CartItem from  '../../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0
};

const addItem = (state, action) => {
  const product = action.product;
  const { id, title, price } = product;

  let cartItemObj;

  if (state.items[id]) {
    cartItemObj = new CartItem(
      state.items[id].quantity + 1,
      price,
      title,
      state.items[id].sum + price
    );
  } else {
    cartItemObj = new CartItem(1, price, title, price);
  };

  return {
    ...state,
    items: {
      ...state.items,
      [id]: cartItemObj
    },
    totalAmount: state.totalAmount + price
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return  addItem(state, action);
    default:
      return state;
  };
};

export default reducer;