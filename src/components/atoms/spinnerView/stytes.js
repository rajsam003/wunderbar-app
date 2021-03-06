import {StyleSheet} from 'react-native';

import {COLORS} from '../../../theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    color: COLORS.primary
  },
  secondaryActivityIndicator: {
    color: COLORS.white
  },
  secondaryContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Styles;
