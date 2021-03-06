import {Platform, StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  tabStyle: {
    height: Platform.OS === 'android' ? 50 : Platform.Version < 14 ? 50 : 90,
  },
});

export default Styles;
