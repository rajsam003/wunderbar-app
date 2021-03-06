import React from 'react';
import MapView from 'react-native-maps';
import {images} from '../../../theme';

import ImageView from '../imageView';

const MarkerView = (props) => {
  const heading = props.heading ? `${props.heading}deg` : '0deg';
  return (
    <MapView.Marker.Animated
      coordinate={props.coordinate}
      anchor={{x: 0.5, y: 0.5}}>
      <ImageView
        src={props.isHeadingTrue ? props.image : images.carParked}
        imageStyle={{transform: [{rotate: heading}]}}
      />
    </MapView.Marker.Animated>
  );
};

export default MarkerView;
