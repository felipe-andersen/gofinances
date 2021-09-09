import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const ScreenContainer = styled.View`
justify-content: center;
`;

export const FragmentScreen = styled.View`
height: 100%;
width: 100%;
justify-content: center;
background-color: white;
`;


export const  ScrollViewPostScreen = styled.ScrollView.attrs({  
contentContainerStyle: { alignItems: 'center'}
})`   

background-color:whitesmoke;
`;

export const ViewPostImages = styled.View`
height: ${RFPercentage(100)}px;
width: ${RFPercentage(100)}px;
background-color: yellow;
`;

export const PostImages = styled.View`
height: 100%;
width: 100%;
background-color: yellow;
`;

export const ViewPostInteractionInformation = styled(RectButton)`
height: ${RFValue(35)}px;
width: 100%;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color:white;
margin: ${RFValue(2)}px 0 ${RFValue(7)}px 0; 
border: 1px solid grey;
`;

export const CommentsSharesText = styled.Text`
font-size: ${RFValue(11)}px;
color: grey;
`;

export const ReactionsText = styled.Text`
font-size: ${RFValue(11)}px;
color: grey;
`;

export const FollowButton = styled(RectButton)`

`;

export const ViewPostTitle = styled.View`
padding: 0 ${RFValue(17)}px; 
`;


export const TextPostTitle = styled.Text`
font-size: ${RFValue(17)}px;
text-align: center;
margin: 0 0 ${RFValue(7)}px 0; 
font-weight:600;
`;

export const ViewPostDescription = styled.View`
padding: 0 ${RFValue(17)}px; 
`;

export const TextPostDescription = styled.Text`
font-size: ${RFValue(14)}px;
text-align: center;

`;

export const  ViewPostButtons = styled.View`
height: ${RFPercentage(8)}px;
width: 100%;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin: ${RFValue(30)}px 0;
`;

export const CommentsButton = styled.TouchableOpacity`

border-radius: ${RFValue(20)}px;
background-color: grey;
justify-content: center;
align-items: center;
padding:${RFValue(10)}px ${RFValue(5)}px ;
`;



export const ReactButton = styled(RectButton)`
`;

export const ShareButton = styled(RectButton)`

`;



