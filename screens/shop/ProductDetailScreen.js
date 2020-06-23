import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import Colors from '../../constants/Colors';
import { useDispatch  } from 'react-redux';
import { addToCart } from '../../store/actions/cart';

const ProductDetailScreeen = props => {
  const product = props.navigation.getParam('product');

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.imageUrl}}/>
      <View style={styles.buttonContainer}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => dispatch(addToCart(product))}/>
      </View>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold'
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20
  }
});

export default ProductDetailScreeen;