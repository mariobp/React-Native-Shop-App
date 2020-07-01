import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import CardItem from '../../components/shop/CartItem';
import { deleteFromCart } from '../../store/actions/cart';
import { addOrder } from '../../store/actions/orders';

const CartScreen = props => {
  const { items, totalAmount } = useSelector(state => state.cart);
  const itemsList = [];
  for (const key in items) {
    itemsList.push({
      id: key,
      productTitle: items[key].productTitle,
      productPrice: items[key].productPrice,
      quantity: items[key].quantity,
      sum: items[key].sum
    });
  };

  itemsList.sort((a, b) => a.id > b.id ? 1 : -1);

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total: <Text style={styles.amunt}>{totalAmount.toFixed(2)}</Text></Text>
        <Button
          color={Colors.accent}
          disabled={itemsList.length === 0}
          title="Order Now"
          onPress={() => {
            dispatch(addOrder(items, totalAmount))
          }}/>
      </View>
      <FlatList
        data={itemsList}
        keyExtractor={item => item.id}
        renderItem={itemData => {
          return <CardItem
                    quantity={itemData.item.quantity}
                    title={itemData.item.productTitle}
                    amount={itemData.item.sum}
                    onRemove={() => dispatch(deleteFromCart(itemData.item.id))}/>;
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white', 
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  amunt: {
    color: Colors.primary
  }
});

export default CartScreen;