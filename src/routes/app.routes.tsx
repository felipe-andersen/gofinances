import React from 'react';
import { Dashboard } from '../screens/dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bihme } from '../screens/bihme';

const { Navigator, Screen } =  createBottomTabNavigator();

export function AppRouter(){
    return (
        <Navigator>
             <Screen 
            name="Bihme"
            component={Bihme}/>
            <Screen 
            name="Dashboard"
            component={Dashboard}/>
                  
        </Navigator>
    )
}
