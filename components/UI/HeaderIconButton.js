import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

const HeaderIconButton = props => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item
    iconName={props.name}
    title={props.title || props.name}
    onPress={props.onClick}/>
  </HeaderButtons>
);

export default HeaderIconButton;