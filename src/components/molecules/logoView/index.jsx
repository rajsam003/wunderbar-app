import React from 'react';
import {View} from 'react-native';
import ImageView from '../../atoms/imageView';

import {images} from '../../../theme';
import Styles from './styles';

const LogoView = () => (
  <View style={Styles.logoView}>
    <ImageView src={images.mainLogo} style={Styles.image}/>
  </View>
);

export default LogoView;
