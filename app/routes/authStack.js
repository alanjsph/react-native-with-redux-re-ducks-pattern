import { createStackNavigator } from 'react-navigation';

import { SignInPage } from '../views/pages';


const AuthStack = createStackNavigator({ SignIn: SignInPage });

export default AuthStack;
