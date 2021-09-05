import React from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler';

export interface Props extends RectButtonProps {
    title:string;
}





export const ViewLogin = styled.View`
flex:1;
background-color: white;
align-items: center;
justify-content: center;
`;

export const Img = styled.View`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(15)}px;
background-color: rgba(250,250,250,1);`;   

export const SVGLogo = styled.View``;

export const TitleWelcome = styled.Text`
font-size: ${RFValue(20)}px;
margin: 15px 0 15px 0;
`;


export const InputEmail = styled.TextInput`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;
background-color: rgba(219, 219, 219,0.7);
border-radius:5px;
`;

export const InputKeyword = styled.TextInput`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;
background-color: rgba(219, 219, 219,0.7);
justify-content: center;
align-items: center;
margin: 8px 0 0 0;
border-radius:5px;
`;


export interface PropsLoginBtn {
title: string;
}

export const LoginBtn = styled(RectButton)`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;
background-color: rgba(63,133,244,1);
font-size: ${RFValue(20)}px;
justify-content: center;
align-items: center;
margin: 9px 0 20px 0;
border-radius:5px;
`;

export const ForgotContainer = styled.View`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(4)}px;
align-items: flex-end;
justify-content: center;
`;


export const Forgot = styled.Text`
color: rgba(26, 115, 232, 1);
`;


export const BtnSocialAuthFacebook = styled(RectButton)`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;
background-color: rgba(59,89,152,1);
flex-direction: row;
justify-content: space-around;
align-items: center;
margin: 8px 0 0 0;
border-radius:5px;
`;



export const FacebookText = styled.Text`
color: white;
font-weight: 700;
`;

export const BtnSocialAuthGoogle = styled(RectButton)`
width: ${RFPercentage(49)}px;;
height: ${RFPercentage(6)}px;
background-color: red;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin: 8px 0 0 0;
border-radius:5px;
`;

export const GoogleText = styled.Text`
color: white;
font-weight: 700;
`;

export const BtnSocialAuthAple = styled(RectButton)`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;
background-color: rgba(190, 190, 190,1);
flex-direction: row;
justify-content: space-around;
align-items: center;
margin: 8px 0 0 0;
border-radius:5px;
`;

export const ApleText = styled.Text`
font-weight: 700;
color: white;
`;

export const SignUp = styled.View`
font-size: ${RFValue(14)}px;
margin: 15px 0 0 0;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const SignUpText = styled.Text`
justify-content: center;
align-items: center;
`;

export const SignUpBtn = styled.Text`
color: rgba(26, 115, 232, 1);
justify-content: center;
align-items: center;

`;


export const ContainerTermsBts = styled.View`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;
flex-direction: row;
justify-content: space-between;
align-items: center;
font-size: ${RFValue(12)}px;
`;

export const BtnTerms = styled.Button`
color: rgba(26, 115, 232, 1);
font-size: ${RFValue(8)}px;
`;

export const Help = styled.Button`
color: rgba(26, 115, 232, 1);`;

export const Copyright = styled.Text`
`;