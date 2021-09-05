import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { Dashboard } from '../screens/dashboard';
import  Feed  from '../screens/feed';
import { ViewLogin } from '../screens/login/styles';
import ScreenLogin from '../screens/login';


const Tab = createBottomTabNavigator();


export function AppRouter(){
return (
  
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Login" component={ScreenLogin}/>
      <Tab.Screen name="Feed" component={Feed}/>
    </Tab.Navigator>
  </NavigationContainer> 
)};

