import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';


import { Dashboard } from '../screens/dashboard';
import  Feed  from '../screens/feed';
import { ViewLogin } from '../screens/login/styles';
import ScreenLogin from '../screens/login';
import { Temp } from '../screens/temp';

// const { Navigator, Screen } =  createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function AppRouter(){
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ScreenLogin} />
    </Stack.Navigator>
    
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  </NavigationContainer> 
        
  
)};

