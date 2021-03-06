import {StyleSheet} from 'react-native';

import {COLORS, FONTS} from '../../../theme';

const Styles = StyleSheet.create({
  title: {
    ...FONTS.h2,
  },
  cardTitle: {
    ...FONTS.h3,
  },
  subtitle: {
    color: COLORS.gray,
    ...FONTS.h3,
  },
  description: {
    color: COLORS.gray,
    ...FONTS.body3,
  },
  buttonText: {color: COLORS.white, ...FONTS.h3},
  errorText: {
    color: 'red',
    ...FONTS.body4,
  },
  miniText:{
    color: COLORS.gray,
    ...FONTS.body4,
  }
});

export default Styles;