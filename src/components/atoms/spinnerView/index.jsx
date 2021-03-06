import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import Styles from './stytes';

const SpinnerView = (props) => (
  <View style={props.secondary ? Styles.secondaryContainer : Styles.container}>
    <ActivityIndicator
      size="small"
      color={
        props.secondary
          ? Styles.secondaryActivityIndicator.color
          : Styles.activityIndicator.color
      }
    />
  </View>
);

export default SpinnerView;
