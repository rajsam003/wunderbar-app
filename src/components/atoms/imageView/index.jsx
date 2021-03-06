import React from 'react';
import {Image, View} from 'react-native';

import Styles from './styles';

const ImageView = (props) => (
  <View style={[Styles.imageView, props.style]}>
    <Image
      source={props.src}
      resizeMode={props.imageResizeMode || 'contain'}
      style={[Styles.image, props.imageStyle]}
    />
  </View>
);

export default ImageView;
