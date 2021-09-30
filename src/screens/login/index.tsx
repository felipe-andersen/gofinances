import React, { useContext } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigation, useRoute} from '@react-navigation/native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../hooks/auth';

import { Text } from 'react-native';
import {
ViewLogin,
ContainerErrorAlert, 
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
ContainerForgotLogin,
LoginBtn,
Line,
SignUpBtn,
SignUpText,
ContainerTermsBts,
BtnTerms,
Help,
Copyright
}  from './styles';







export default class ScreenLogin extends React.Component {
  
  render() {
    const { user } = useAuth();
    console.log(user.name);

    return (
     <ViewLogin>
      <SVGLogo/>
      <TitleWelcome>Bem Vindo(a) ao Wehome</TitleWelcome>
      <ContainerErrorAlert><Text>Email do tipo {user.email} é necessário.</Text></ContainerErrorAlert>
      <InputEmail></InputEmail>
      <InputKeyword></InputKeyword>
      <ContainerForgotLogin>
        <ForgotContainer><Forgot>Esqueci minha senha</Forgot></ForgotContainer>
        <LoginBtn onPress={() => {}}><Text>Entrar</Text></LoginBtn>
      </ContainerForgotLogin>
      <Line/>
      <BtnSocialAuthFacebook><EvilIcons name="sc-facebook" size={24} color="white"/><FacebookText>Continuar com o Facebook</FacebookText></BtnSocialAuthFacebook>
      <BtnSocialAuthGoogle><AntDesign name="google" size={24} color="white"/><GoogleText>Continuar com o Google</GoogleText></BtnSocialAuthGoogle>
      <BtnSocialAuthAple><AntDesign name="apple1" size={24} color="white"/><ApleText>Continuar com a Apple</ApleText></BtnSocialAuthAple>
      <SignUp><SignUpText>Não tem cadastro? </SignUpText><SignUpBtn>Criar conta</SignUpBtn></SignUp>
      <ContainerTermsBts><BtnTerms
      onPress={()=>{}}
      title="Termos e Política de privacidade"/><Help onPress={() => {}} title="Ajuda"></Help></ContainerTermsBts>
      <Copyright>Wehome © 2021.</Copyright>
     </ViewLogin>
    )
  }
};


