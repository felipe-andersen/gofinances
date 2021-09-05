import React from 'react';
import { NavigationContainer, useNavigation, useRoute} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

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
FacebookText,
ApleText,
GoogleText,
InputKeyword,
SignUp,
Forgot,
ForgotContainer,
LoginBtn,
SignUpBtn,
SignUpText,
ContainerTermsBts,
BtnTerms,
Help,
Copyright
}  from './styles';
import {View, TextInput, Button, Text } from 'react-native';
import { AppRouter } from '../../routes/app.routes';
import Feed from '../feed';

import { RectButtonProps } from 'react-native-gesture-handler';


export interface Props extends RectButtonProps {
    title:string;
}


export default function ScreenLogin({title, ...rest}:Props) {


return (
 <ViewLogin>
     <Img/>
     <SVGLogo/>
     <TitleWelcome>Bem Vindo(a) ao Wehome</TitleWelcome>
     <InputEmail></InputEmail>
     <InputKeyword></InputKeyword>
     <ForgotContainer><Forgot>Esqueci minha senha</Forgot></ForgotContainer>
     <LoginBtn onPress={() => {}}><Text>Entrar</Text></LoginBtn>
     <BtnSocialAuthFacebook><EvilIcons name="sc-facebook" size={24} color="white"/><FacebookText>Continuar com o Facebook</FacebookText></BtnSocialAuthFacebook>
     <BtnSocialAuthGoogle><AntDesign name="google" size={24} color="white"/><GoogleText>Continuar com o Google</GoogleText></BtnSocialAuthGoogle>
     <BtnSocialAuthAple><AntDesign name="apple1" size={24} color="white"/><ApleText>Continuar com a Apple</ApleText></BtnSocialAuthAple>
     <SignUp><SignUpText>Não tem cadastro? </SignUpText><SignUpBtn>Criar conta</SignUpBtn></SignUp>
     <ContainerTermsBts><BtnTerms
     onPress={() => {}}
     title="Termos e Política de privacidade"></BtnTerms><Help onPress={() => {}} title="Ajuda"></Help></ContainerTermsBts>
     <Copyright>Wehome © 2021.</Copyright>
     {/*<TermsView><Terms>Ao entrar você com concorda com os Termos de serviço e Politica de Privacidade da Wehome.</Terms></TermsView>*/}
 </ViewLogin>
)
};


