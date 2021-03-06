import {Platform, StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  mapView: {
    flex: 1
  },
  mapTypeSwitchContainer:{
    position: 'absolute',
    top: Platform.OS === 'android' ? 20 : Platform.Version < 14 ? 30 : 50,
    right:20,
    height:40,
    alignSelf: 'flex-end',
  }
});

export default Styles;