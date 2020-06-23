import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { isIOs } from '../../shared/utils';

const CustomHeaderButton = props => {
  const color = isIOs ? Colors.primary : 'white';

  return <HeaderButton {...props} IconComponent={MaterialIcons} iconSize={23} color={color}/>
};

export default CustomHeaderButton;