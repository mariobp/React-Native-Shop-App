import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/cart';
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

const removeItem = (state, productId) => {
  const selectedCartItem = state.items[productId];
  const currentQty = selectedCartItem.quantity;
  let updatedCartItems;
  if (currentQty > 1) {
    const updateCartItem = new CartItem(
      currentQty - 1,
      selectedCartItem.productPrice,
      selectedCartItem.productTitle,
      selectedCartItem.sum - selectedCartItem.productPrice
      );
    updatedCartItems = {...state.items, [productId]: updateCartItem }
  } else {
    updatedCartItems = { ...state.items };
    delete updatedCartItems[productId];
  }
  return {
    ...state,
    items: updatedCartItems,
    totalAmount: state.totalAmount - selectedCartItem.productPrice
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return  addItem(state, action);
    case DELETE_FROM_CART:
      return removeItem(state, action.productId);
    default:
      return state;
  };
};

export default reducer;