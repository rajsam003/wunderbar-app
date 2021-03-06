import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Friends, Settings, Post, Notifications} from '../../theme';
import TabView from '../../components/molecules/tabView';
import Styles from './styles';
import {
  FriendsScreen,
  HomeScreen,
  NotificationScreen,
  PostScreen,
  SettingsScreen,
} from '../../screens';

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: Styles.tabStyle,
};

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      {...props}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case Home:
              return <TabView focused={focused} icon={Home} />;
            case Friends:
              return <TabView focused={focused} icon={Friends} />;
            case Post:
              return <TabView focused={focused} icon={Post} />;
            case Notifications:
              return <TabView focused={focused} icon={Notifications} />;
            case Settings:
              return <TabView focused={focused} icon={Settings} />;
          }
        },
      })}>
      <Tab.Screen name={Home} children={() => <HomeScreen {...props} />} />
      <Tab.Screen
        name={Friends}
        children={() => <FriendsScreen {...props} />}
      />
      <Tab.Screen name={Post} children={() => <PostScreen {...props} />} />
      <Tab.Screen
        name={Notifications}
        children={() => <NotificationScreen {...props} />}
      />
      <Tab.Screen
        name={Settings}
        children={() => <SettingsScreen {...props} />}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
