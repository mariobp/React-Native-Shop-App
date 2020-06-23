import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native';
import { isAndroid, PlatformVersion } from '../shared/utils';

const TouchableCmp = props => {
  let Touchable = TouchableOpacity;
  if (isAndroid && PlatformVersion >= 21) {
    Touchable = TouchableNativeFeedback;
  };

  return <Touchable {...props}>{props.children}</Touchable>;
};

export default TouchableCmp;