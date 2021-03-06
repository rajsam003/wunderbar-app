import React from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import {COLORS,Home, Friends, Settings, Post, Notifications} from '../../../theme';

const TabView = ({focused, icon}) => {
  const tintColor = focused ? COLORS.primary : COLORS.gray;

  const renderIcon = () => {
    switch(icon){
      case Home:
        return <Entypo name="shop" size={30} color={tintColor}/> 
      case Friends:
        return <MaterialIcons name="people-alt" size={30} color={tintColor}/> 
        case Post:
        return <Feather name="plus-square" size={40} color={tintColor}/> 
        case Notifications:
        return <MaterialIcons name="notifications" size={30} color={tintColor}/> 
      case Settings:
        return <MaterialIcons name="settings" size={30} color={tintColor}/> 
      default:
        return null
    }
  }

  return (
    <View>
      {renderIcon()}
    </View>
  );
};

export default TabView;
