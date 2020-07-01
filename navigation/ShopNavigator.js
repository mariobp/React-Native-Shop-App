import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import { isAndroid } from '../shared/utils';
import { createAppContainer } from "react-navigation";
import ProductsOverview from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreeen from '../screens/shop/ProductDetailScreen';
import HeaderIconButton from "../components/UI/HeaderIconButton";
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrdersScreen';

const goToCart = navigation => {
  navigation.navigate('cart')
};

const defaultNavOptions = {
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
};

const ProductNavigator = createStackNavigator({
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
        headerRight: () => <HeaderIconButton name="shopping-cart" onClick={() => goToCart(navigation)}/>,
        headerLeft: () => <HeaderIconButton name="menu" onClick={navigation.toggleDrawer}/>
      }
    }
  },
  cart: {
    screen: CartScreen,
    navigationOptions: {
      headerTitle: 'Your Cart'
    }
  }
},
{
  defaultNavigationOptions: defaultNavOptions
});

const OrderNavigator = createStackNavigator({
  Orders: {
    screen: OrderScreen,
    navigationOptions: {
      headerTitle: 'Your Orders'
    }
  }
},
{
  defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
  Products: ProductNavigator,
  Orders: OrderNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.primary
  }
});

export default createAppContainer(ShopNavigator);