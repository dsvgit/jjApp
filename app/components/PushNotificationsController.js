import React from 'react';
import PushNotification from 'react-native-push-notification';
import { compose } from 'ramda';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import config from 'app/config';

const PushNotificationsController = compose(
  connect(
    undefined,
    {
      navigate: NavigationActions.navigate
    }
  ),
  lifecycle({
    componentDidMount() {
      const { navigate } = this.props;
      
      PushNotification.configure({
        onRegister: (token) => {
          console.log('TOKEN:', token);
          AsyncStorage.setItem('pushNotificationsToken', token);
        },
        onNotification: (notification) => {
          console.log('NOTIFICATION:', notification);
          const { foreground } = notification;
          if (!foreground) {
            navigate({ routeName: 'Notifications' });
          }
        },
        senderID: config.senderID,
        popInitialNotification: true,
        requestPermissions: true,
      });
    }
  })
)(() => null);

export default PushNotificationsController;
