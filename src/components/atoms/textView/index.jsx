import React from 'react';
import {Text} from 'react-native';

import {TextType} from '../../../theme';
import Styles from './styles';

const TextView = (props) => {
  let textStyle;

  switch (props.type) {
    case TextType.title:
      textStyle = Styles.title;
      break;
    case TextType.cardTitle:
      textStyle = Styles.cardTitle;
      break;
    case TextType.subtitle:
      textStyle = Styles.subtitle;
      break;
    case TextType.description:
      textStyle = Styles.description;
      break;
    case TextType.placeHolder:
      textStyle = Styles.placeHolder;
      break;
    case TextType.buttonText:
      textStyle = Styles.buttonText;
      break;
    case TextType.errorText:
      textStyle = Styles.errorText;
      break;
    case TextType.miniText:
      textStyle = Styles.miniText;
      break;
    default:
      null;
  }

  return <Text style={[textStyle, props.style]} numberOfLines={props.numberOfLines || null}>{props.children}</Text>;
};

export default TextView;
