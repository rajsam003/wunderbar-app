import React from 'react';
import {TextInput} from 'react-native';

import Styles from './styles';

const TextInputView = (props) => {
  return (
    <TextInput
      {...props}
      style={[Styles.input, props.style]}
      value={props.value}
      ref={props.textInputRef}
      placeholder={props.label}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
    />
  );
};

export default TextInputView;
