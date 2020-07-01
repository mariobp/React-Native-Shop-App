import CartScreen from "../../screens/shop/CartScreen";

export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (carItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: {
      items: carItems,
      amount: totalAmount
    }
  }
};