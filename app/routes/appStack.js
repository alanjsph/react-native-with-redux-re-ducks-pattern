import { createStackNavigator } from 'react-navigation';
import { Profile, RepoDetail, Duck } from '../views/pages';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({
    Home: {
        screen: Duck
    },
    Detail: {
        screen: RepoDetail
    }
  },
  {
    initialRouteName: 'Home',
  });

export default AppStack;

// const Tabs = createBottomTabNavigator({
//     RepoList: {
//       screen: Duck
//     },
//     Profile: {
//       screen: Profile
//     }
//   },
//   {
//       order: ['RepoList', 'Profile'],
//       animationEnabled: true
//   }); 
  

