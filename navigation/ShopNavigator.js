import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import Colors from '../constants/Colors';
import { isAndroid } from '../shared/utils';
import { createAppContainer } from "react-navigation";
import ProductsOverview from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreeen from '../screens/shop/ProductDetailScreen';
import HeaderIconButton from "../components/UI/HeaderIconButton";
import CartScreen from '../screens/shop/CartScreen';

const goToCart = navigation => {
  navigation.navigate('cart')
};

const shopNavigator = createStackNavigator({
  productsOverview: {
    screen: ProductsOverview,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'All Products',
        headerTintColor: isAndroid ? 'white' : Colors.primary,
        headerStyle: {
          backgroundColor: isAndroid ?  Colors.primary : ''
        },
        headerRight: () => <HeaderIconButton name="shopping-cart" onClick={() => goToCart(navigation)}/>
      };
    }
  },
  productDetailS: {
    screen: ProductDetailScreeen,
    navigationOptions: ({ navigation }) => {
      const product = navigation.getParam('product');
      return {
        headerTitle: product.title,
        headerRight: () => <HeaderIconButton name="shopping-cart" onClick={() => goToCart(navigation)}/>
      }
    }
  },
  cart: {
    screen: CartScreen
  }
},
{
  defaultNavigationOptions: {
    headerTintColor: isAndroid ? 'white' : Colors.primary,
    headerStyle: {
      backgroundColor: isAndroid ?  Colors.primary : '',
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    headerRightContainerStyle: {
      fontFamily: 'open-sans',
    },
    headerLeftContainerStyle: {
      fontFamily: 'open-sans'
    }
  }
});

export default createAppContainer(shopNavigator);