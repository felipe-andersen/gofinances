import * as React from 'react';
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

//Interface declarada como um modulo interno acessado de qualquer lugar
declare global {
  namespace ReactNavigation {
    interface RootParamList {
      CommentsViewScreen: string;
      LearningScreen: string;
      ProfileViewScreen: string;
    }
  }
};


const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default class AppRoutes extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator>
          <BottomTab.Screen name="Visualização dos comentários" component={CommentsViewScreen}/>
          <BottomTab.Screen name="Visualização de perfil" component={ProfileViewScreen}/>
          <BottomTab.Screen name="Learning" component={LearningScreen} initialParams={{ itemId: 42 }}/>
        </BottomTab.Navigator>




      </NavigationContainer>
    )
  }
};





/*
container navigation é uma base para todos os navegadores



push('Details') cria uma nova rota se não existir
goBack()
popToTop()
setOptions({ title: 'Updated!' })}
*/


interface gjkfkjgf {
  navigator: { 
    initialRouteName: string,
    screenOptions: {
      title: string,
      headerBackVisible: true,
      headerBackTitleVisible: true,
      headerBackTitleStyle: {
        fontFamily: any,
        fontSize: any
      },
      headerBackImageSource: any,
      headerLargeStyle: boolean,
      headerLargeTitleShadowVisible: boolean,
      headerLargeTitleStyle: {
        fontFamily: any,
        fontSize: any,
        fontWeight: any,
        color: any
      }
      headerShown: boolean,
      headerStyle: { backgroundColor: any },
      headerShadowVisible: boolean,
      headerTransparent: boolean,
      headerBlurEffect: any,
      headerTintColor: any,
      headerRight: () => {},
      headerTitle: any,
      headerTitleAlign: "left" | "center",
      headerTitleStyle: {
        fontFamily: any;
        fontSize: any;
        fontWeight: any;
        color: any;
      },
      headerSearchBarOptions: {autoCapitalize: 'none' |
        'words' |
        'sentences' |
        'characters', 
        barTintColor: any
        hideNavigationBar: boolean,
        hideWhenScrolling: boolean,
        obscureBackground: boolean
        onBlur: boolean
        onCancelButtonPress: boolean,
        onChangeText: any,
      },
      header: any,
    }
  }

};

const objectJson =  {
navigator: { initialRouteName: "",
fgldfldf: "title" }

}