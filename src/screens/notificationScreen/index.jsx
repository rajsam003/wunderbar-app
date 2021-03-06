import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import TextView from '../../components/atoms/textView';
import Styles from './styles';

class NotificationScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <SafeAreaView style={Styles.container}>
          <TextView>Notification Screen</TextView>
        </SafeAreaView>
    );
  }
}

export default NotificationScreen;
