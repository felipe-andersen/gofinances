import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

//Screens 

import {
ViewLogin,
Img, 
SVGLogo,
TitleWelcome,
InputEmail,
BtnSocialAuthFacebook,
BtnSocialAuthGoogle,
BtnSocialAuthAple,
Terms,
FacebookText,
ApleText,
GoogleText,
InputKeyword}  from './styles';
import {View, TextInput, Button } from 'react-native';
import { AppRouter } from '../../routes/app.routes';
import Feed from '../feed';






export default function ScreenLogin({navigation}) {



return (
 <ViewLogin>
     <Img/>
     <SVGLogo/>
     <TitleWelcome>Bem Vindo(a) ao Wehome</TitleWelcome>
     <InputEmail><TextInput></TextInput></InputEmail>
     <InputKeyword></InputKeyword>
     <BtnSocialAuthFacebook><FacebookText>Continuar com o Facebook</FacebookText></BtnSocialAuthFacebook>
     <BtnSocialAuthGoogle><GoogleText>Continuar com o Google</GoogleText></BtnSocialAuthGoogle>
     <BtnSocialAuthAple><ApleText>Continuar com a aple</ApleText></BtnSocialAuthAple>
     <Terms>Ao entrar você com concorda com os Termos de serviço e Politica de Privacidade da Wehome.</Terms>
     <View>
     <Button
        title="Feed"
        onPress={() => navigation.navigate('Feed')}></Button>
     </View>
 </ViewLogin>
)
};

