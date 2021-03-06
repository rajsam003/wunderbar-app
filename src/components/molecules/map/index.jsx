import React from 'react';
import MapView from 'react-native-maps';

import Styles from './style';
import MarkerView from '../../atoms/markerView';
import MapFilterButton from '../../custom/mapfilterButton';

const Map = (props) => (
  <>
    <MapView
      style={Styles.mapView}
      ref={props.mapRef}
      mapType={props.mapType}
      initialRegion={props.initialRegion}
      zoomEnabled={true}
      rotateEnabled={true}
      showsCompass={false}>
      <MarkerView
        image={props.image}
        heading={props.heading}
        isHeadingTrue={props.isHeadingTrue}
        coordinate={props.coordinate}
      />
    </MapView>
    <MapFilterButton
      setIsMoving={props.onMapTypePress}
      containerStyle={Styles.mapTypeSwitchContainer}
      title={props.mapType === 'standard' ? 'Satellite' : 'Map'}
    />
  </>
);

export default Map;
