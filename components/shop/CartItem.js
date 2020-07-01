import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TouchableCmp from '../TouchableCmp';
import { MaterialIcons } from '@expo/vector-icons';

const CartItem = props => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}{' '}</Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
        <TouchableCmp onPress={props.onRemove} style={styles.deleteButton}>
          <MaterialIcons
            name='delete'
            size={23}
            color='red'/>
        </TouchableCmp>
      </View>
    </View>
  );  
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    marginLeft: 20
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888'
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16
  },
});

export default CartItem;