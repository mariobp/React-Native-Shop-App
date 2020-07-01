import * as orderActions from '../actions/orders';
import Order from '../../models/order';

const initialState = {
  orders: []
};

export default (state=initialState, actions) => {
  switch (actions.type) {
    case orderActions.ADD_ORDER:
      const { items, amount } = actions.orderData;
      const order = new Order(new Date().toString(), items, amount, new Date());
      return {
        ...state,
        orders: state.orders.concat(order),
      };
    default:
      return state;
  }
}