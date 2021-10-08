import React from 'react';
import 'react-native-gesture-handler';
import {} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import AppRouter from './src/routes/index';

// Screens 
import ScreenLogin from './src/screens/login';

// Context
import { AuthProvider } from './src/hooks/auth';

export default function App() {

const [ fontsLoader ] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold });

  if ( !fontsLoader ){
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ScreenLogin/>
      </AuthProvider>
      {/*<AppRouter/>*/}
    </ThemeProvider>
  )
};


// Baixar os types da lib styled-components como dependencia de desenvolvimento



