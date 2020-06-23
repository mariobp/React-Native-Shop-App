import PRODUCTS from '../../data/dumy-data';

const initstate = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
};

const reducer = (state = initstate, actions) => {
  return state;
};

export default reducer;