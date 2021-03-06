import React from 'react';
import {View} from 'react-native';

import { COLORS, ShadowStyle } from '../../../theme';

const CardView = (props) => (
  <View
    style={[
      {
        backgroundColor: props.backgroundColor || COLORS.white,
        padding: props.padding || 5,
        borderRadius: props.borderRadius || 10,
        flexDirection: props.flexDirection || 'column',
      },
      ShadowStyle,
      props.style,
    ]}>
    {props.children}
  </View>
);

export default CardView;
