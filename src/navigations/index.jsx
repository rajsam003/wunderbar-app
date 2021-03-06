import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Theme from './theme';
import TabNavigator from './tabNavigators';

const MainNavigationContainer = () => {
  return (
    <NavigationContainer theme={Theme}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigationContainer;
