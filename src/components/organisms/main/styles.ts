
import {} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
flex: 1;
flex-direction: row;

background-color: whitesmoke;

justify-content:space-evenly;
position: relative;
margin-top: ${RFValue(55)}px;


`;

export const TextInputIt = styled.TextInput`
width: 100px;
height: 80px;
background-color: rgba(255,255,255,1);
`;
/*

Container quero com display grid do tipo mansory
Pegar a largura da window dividir em duas
O display deve ser do tipo grid com duas colunas
o conteúdo do container vai ser centralizado
o display ter a propriedade flex-direction recebendo row (da direita para a esquerda)





*/


export const ButtonSubmit = styled(BorderlessButton)`
width: ${RFValue(200)}px;
height: ${RFValue(36)}px;
background-color: red;
`;


export const TextPost = styled.Text``;




export const PostContainer = styled(RectButton)`
width: ${RFPercentage(26)}px;
height: ${RFPercentage(67)}px;
background-color: rgba(255,255,255,1);
border-radius: ${RFPercentage(0.5)}px;

`;

export const ImgPost = styled.View`
width: ${RFPercentage(26)}px;
height: ${RFPercentage(43)}px;
background-color: rgba(200,130,255,1);
border-radius: 4px;
`;

export const ContainerPostText = styled.View`
width: 100%;
height: 13%;
margin-left: 8px;
`;


export const PostText = styled.Text`
font-size: ${RFValue(14)}px;`;

export const ContainerUser = styled.View`
width: 100%;
height: 10%;
flex-direction: row;
align-items: center;
margin: 6px 0 0 8px;
`;

export const ProfilePic = styled.View`
width: ${RFValue(36)}px;
height: ${RFValue(36)}px;
border-radius:${RFValue(18)}px;
background-color: burlywood;
justify-content: center;
align-items: center;
`;

export const UserName = styled.Text`
font-size: ${RFValue(13)}px;
margin-left: 8px;
`;


export const PostaddContainer = styled(RectButton)`
width: ${RFPercentage(8)}px;
height: ${RFPercentage(8)}px;
border-radius: ${RFPercentage(50)}px;
background-color: rgba(255,255,255,1);
position: absolute; 
justify-content: center;
align-items: center;

margin:${RFPercentage(69)}px 0 ${RFPercentage(45)}px ${RFPercentage(44)}px;




`;

export const SrciconContainer = styled.View`
width: ${RFValue(50)}px;
height: ${RFValue(50)}px;
border-radius: ${RFPercentage(50)}px;
background-color: rgba(255,255,255,1);

justify-content: center;
align-items: center;
align-self: flex-end;
position: absolute;


`;
