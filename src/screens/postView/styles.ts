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
background-color: turquoise;
`;


export const  ScrollViewPostScreen = styled.ScrollView.attrs({  
contentContainerStyle: { alignItems: 'center'}
})`   
background-color: whitesmoke;
`;

export const ViewPostImages = styled.View`

`;

export const PostImages = styled.View`
height: 100%;
width: 100%;
background-color: yellow;
`;

export const ViewPostInteractionInformation = styled.View`

`;

export const CommentsSharesText = styled.Text`

`;

export const ReactionsText = styled.Text`

`;

export const FollowButton = styled(RectButton)`

`;

export const ViewPostTitle = styled.View`

`;


export const TextPostTitle = styled.Text`
font-size: ${RFValue(20)}px;
`;

export const ViewPostDescription = styled.View`

`;

export const TextPostDescription = styled.Text`

`;

export const  ViewPostButtons = styled.View`
height: ${RFPercentage(8)}px;
width: ${RFPercentage(40)}px;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;

export const CommentsButton = styled(RectButton)`

`;

export const ReactButton = styled(RectButton)`

`;

export const ShareButton = styled(RectButton)`

`;



