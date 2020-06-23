import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TouchableCmp from '../TouchableCmp';
import { Ionicons } from '@expo/vector-icons';

const CartItem = props => {
  return (
    <View>
      <Text>
        <Text>QTY</Text> <Text>TITLE</Text>
      </Text>
      <View>
        <Text>$AMT</Text>
        <TouchableCmp>
          <Ionicons />
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet({
  screen: {

  }
});

export default CartItem;