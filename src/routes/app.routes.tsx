import React from 'react';
import { Dashboard } from '../screens/dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  Feed  from '../screens/feed';

const { Navigator, Screen } =  createBottomTabNavigator();

export function AppRouter(){
    return (
        <Navigator>
             <Screen 
            name="Feed"
            component={Feed}/>
            <Screen 
            name="Dashboard"
            component={Dashboard}/>
                  
        </Navigator>
    )
}

/*
const Stack = createNativeStackNavigator()
export function StackNavigation (){
return (
  <Stack.Navigator>
    <Stack.Screen name="some thing" component={Feed}></Stack.Screen>

  </Stack.Navigator>
)
}
*/