import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Styles from './styles';
import {COLORS, ShadowStyle, TextType} from '../../../theme';
import TextView from '../textView';
import CardView from '../cardView'

const ButtonView = (props) => (
  <TouchableOpacity
    style={[Styles.button, props.style, ShadowStyle]}
    onPress={props.onPress}>
    {props.secondaryButton ? (
      <CardView style={Styles.secondaryButton}>
        <TextView type={TextType.subtitle} >{props.text}</TextView>
      </CardView>
    ) : (
      <LinearGradient
        style={Styles.gradient}
        colors={[COLORS.primaryLight, COLORS.primary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <TextView type={TextType.buttonText}>{props.text}</TextView>
      </LinearGradient>
    )}
  </TouchableOpacity>
);

export default ButtonView;
