import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Screens
import ScreenLogin from '../screens/login';
import ForgotPasswordScreen  from '../screens/forgotPassword';
import SignupScreen  from '../screens/signup';
import TermsPolicyScreen  from '../screens/termsPolicy';
import Feed from '../screens/feed';
import PostViewScreen from'../screens/postView';
import ProfileViewScreen from '../screens/profileView';
import LearningScreen from '../screens/learning';


const BottomTab = createBottomTabNavigator();

export default class AppRoutes extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen name="Learning" component={LearningScreen}/>
          <BottomTab.Screen name="Profile" component={ProfileViewScreen}/>
          <BottomTab.Screen name="Feed" component={Feed}/>
          <BottomTab.Screen name="Post" component={PostViewScreen}/>
          </BottomTab.Navigator>
      </NavigationContainer>
    )
  }
};

