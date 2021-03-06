import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme';

const Styles = StyleSheet.create({
  noDataContainer: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartTitle: {
    marginHorizontal: 5,
    color: COLORS.white,
    fontSize: 20,
  }
});

export default Styles;
