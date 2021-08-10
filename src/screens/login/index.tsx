import React from 'react';
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
import { TextInput } from 'react-native';



export default function ScreenLogin(){
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
 </ViewLogin>
)
}

