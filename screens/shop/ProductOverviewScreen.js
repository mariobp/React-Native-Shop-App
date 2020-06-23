import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cart';

const ProductOverViewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  const navigateToDetails = product => {
    props.navigation.navigate('productDetailS', { product });
  };

  const dispatch = useDispatch();

  const productItem = (itemData) => {
    const { title, imageUrl, price } = itemData.item;
    return <ProductItem
              title={title}
              imageUrl={imageUrl}
              price={price}
              onViewDetails={() => navigateToDetails(itemData.item)}
              onAddCart={() => dispatch(addToCart(itemData.item))}/>;
  };

  return <FlatList
            data={products}
            renderItem={productItem}/>
};

export default ProductOverViewScreen;