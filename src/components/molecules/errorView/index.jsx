import React from 'react';
import { Button, View } from 'react-native';

import { COLORS, TextType } from '../../../theme';
import TextView from '../../atoms/textView';
import Styles from './stytes';

const ErrorView = ({onPressHandler}) => (
  <View style={Styles.container}>
    <TextView type={TextType.subtitle}>An error occurred!</TextView>
    <Button title="Try again" onPress={onPressHandler} color={COLORS.primary} />
  </View>
);

export default ErrorView;
