import { createSwitchNavigator } from 'react-navigation';

import AppStack from './appStack';
import AuthStack from './authStack'
import { AuthLoadingPage } from '../views/pages'

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingPage,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);