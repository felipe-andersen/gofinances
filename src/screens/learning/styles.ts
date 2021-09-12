import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


const valores:string = "";

//o split decompoe e acrescenta string. No casso adiciono uma reticencia no final                                    





export const LearningScreenScrollView = styled.ScrollView`

`;


export const ArchitecturalStyleView = styled.View`
width: 100%;
background-color:  rgba(250,250,250,1);
padding: ${RFValue(25)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;

margin: 0 0 ${RFValue(8)}px 0;

`;

export const ArchitecturalStyleName = styled.Text`
font-size: ${RFValue(22)}px;
font-weight: 700;
color: grey;
`;


export const ArchitecturalStyleDescription = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const TutorInformationView = styled.View`
width: 100%;
padding: ${RFValue(25)}px;
background-color:  rgba(250,250,250,1);
padding: ${RFValue(25)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;
margin: 0 0 ${RFValue(8)}px 0;
`;

export const CoverNameDescriptionContainer = styled.View`
flex-direction: row;

align-items: center;
margin: 0 0 ${RFValue(15)}px 0;
`;

export const TutorCover = styled.View`
width: ${RFValue(100)}px;
height: ${RFValue(100)}px;
background-color: brown;
border-radius: ${RFValue(50)}px;
margin: 0;

`;

export const NameDescriptionContainer = styled.Text`
flex-direction: column;
margin: 0 0 0 ${RFValue(15)}px ;
`;

export const TutorName = styled.Text`
font-size: ${RFValue(22)}px;
font-weight: 700;
color: black;
`;

export const  TutorDescriptionAndPrefession = styled.Text``;

export const VideoScrollView = styled.View`
width: 100%;

`;


export const VideoView = styled(RectButton)`
width: 100%;
height: ${RFValue(350)}px;
background-color:  rgba(250,250,250,1);
flex-direction: row;
padding: ${RFValue(8)}px;
align-items: flex-start;
padding: ${RFValue(25)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;


`;

export const VideoTitle = styled.Text`
font-size: ${RFValue(15)}px;
font-weight: 700;
color: black;
`;


export const CoverView = styled.View`
width: ${RFValue(130)}px;
height: ${RFValue(70)}px;
background-color: yellow;
margin: 0 0 ${RFValue(8)}px 0;
`;

export const VideoDescriptionText = styled.Text`
font-size: ${RFValue(15)}px;
color: black;
`;


export const SpreadOutView = styled.View`
width: 100%;
justify-content: center;
`;


export const SpreadOutText = styled.Text`

`;

export const SpreadOutIcon = styled.View`

`;
