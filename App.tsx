import 'react-native-gesture-handler';
import {} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';


import {NavigationContainer, NavigationContext} from '@react-navigation/native';
import {AppRouter} from './src/routes/app.routes';






export default function App() {
  
const [fontsLoader] = useFonts({Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold});

if (!fontsLoader){
  return <AppLoading/>
}
  return (
  <ThemeProvider theme={theme}>
    <AppRouter/>
  </ThemeProvider>
  )
};


// Baixar os types da lib styled-components como dependencia de desenvolvimento
// BAsicamente dois tipos de navegação 