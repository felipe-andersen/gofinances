import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import ScreenLogin from '../screens/login';
import ForgotPasswordScreen  from '../screens/forgotPassword';
import SignupScreen  from '../screens/signup';
import TermsPolicyScreen  from '../screens/termsPolicy';
import Feed from '../screens/feed';
import PostViewScreen from'../screens/postView';
import ProfileViewScreen from '../screens/profileView';
import LearningScreen from '../screens/learning';
import CommentsViewScreen from '../screens/commentsView';

import { AuthProvider } from '../../src/hooks/auth';



//Interface declarada como um modulo interno acessado de qualquer lugar
declare global {
  namespace ReactNavigation {
    interface RootParamList {
      CommentsViewScreen: string;
      LearningScreen: string;
      ProfileViewScreen: string;
      Feed: string;
    }
  }
};


const BottomTab = createBottomTabNavigator();




export default class AppRoutes extends React.Component {

  render() {
   
    return (
      <NavigationContainer>
        <AuthProvider>
        <BottomTab.Navigator>
          <BottomTab.Screen name="Visualização dos comentários" component={CommentsViewScreen}/>
          <BottomTab.Screen name="Visualização de perfil" component={ProfileViewScreen}/>
          <BottomTab.Screen name="Feed" component={Feed}/>
          <BottomTab.Screen name="Learning" component={LearningScreen} initialParams={{ itemId: String }}/>
        </BottomTab.Navigator>
        </AuthProvider>
      </NavigationContainer>
    )
  }
};




