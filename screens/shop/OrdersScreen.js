import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const OrderScreen = props => {
  const ordens = useSelector(state => state.orders.ordens);
  return (
    <FlatList
      data={ordens}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}/>
  );
};

export default OrderScreen;