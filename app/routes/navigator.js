import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { Profile, RepoDetail, Duck } from '../views/pages';

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
  

const Navigator = createStackNavigator({
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


// export { Tabs as Tabs };
export { Navigator as Navigator };

