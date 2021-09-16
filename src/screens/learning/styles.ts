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
padding: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(25)}px ${RFValue(0)}px;

margin: 0 0 ${RFValue(8)}px 0;

`;

export const ArchitecturalStyleImage = styled.View`
width: 100%;
height: ${RFValue(160)}px;
background-color:  orange;
margin: 0 0 ${RFValue(15)}px 0;

`;
export const ArchitecturalStyleNameDescripContainer = styled.View`
width: 100%;
background-color:  rgba(250,250,250,1);
padding: ${RFValue(0)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;
flex-direction: column;

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

`;

export const TutorCover = styled.View`
width: ${RFValue(50)}px;
height: ${RFValue(50)}px;
background-color: brown;
border-radius: ${RFValue(25)}px;


`;

export const NameDescriptionContainer = styled.View`
flex-direction: column;
margin: 0 0 0 ${RFValue(8)}px ;
`;

export const TutorFollowButton = styled.Text`
font-size: ${RFValue(13)}px;
color: grey;

`;



export const TutorName = styled.Text`
font-size: ${RFValue(14)}px;
font-weight: 700;
color: black;

margin: 0 ${RFValue(0)}px ${RFValue(5)}px ${RFValue(0)}px;
`;

export const  TutorDescriptionAndPrefession = styled.Text``;

export const VideoScrollView = styled.View`
width: 100%;
margin: 0 0 ${RFValue(8)}px 0;

`;


export const VideoRectButtonBorder = styled.View`
width: 100%;
border: 1px solid gray;
`;


export const VideoView = styled(RectButton)`
width: 100%;

background-color:  rgba(250,250,250,1);
flex-direction: row;


padding: ${RFValue(25)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;



`;

export const VideoTitleDescripContainer = styled.View`
width: 60%;
margin: 0 ${RFValue(0)}px 0 ${RFValue(8)}px;

`;



export const VideoTitle = styled.Text`
font-size: ${RFValue(15)}px;
font-weight: 700;
color: black;
`;


export const CoverView = styled.View`
width: 40%;
height: ${RFValue(70)}px;
background-color: yellow;

`;


export const TitleDescriptionView = styled.Text`

`;

export const VideoDescription = styled.Text`
font-size: ${RFValue(15)}px;
color: black;
`;


export const SpreadOutView = styled.View`
width: 100%;
height: ${RFValue(35)}px;
justify-content: center;
background-color:  rgba(250,250,250,1);
align-items: center;

`;


export const SpreadOutText = styled.Text`
color: grey;
`;

export const SpreadOutIcon = styled.View`

`;

export const ArchitecturalElementsScrollView = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { alignItems: 'flex-start'}
})`
background-color:  rgba(250,250,250,1);
padding: ${RFValue(25)}px ${RFValue(15)}px ${RFValue(25)}px ${RFValue(15)}px;
`;

export const ArchitecturalElementView = styled.View`
background-color:  rgba(250,250,250,1);
margin: ${RFValue(0)}px ${RFValue(20)}px ${RFValue(0)}px ${RFValue(0)}px;
flex-direction: column;

`;

export const ArchitecturalElementImage = styled.View`
width: ${RFValue(100)}px;
height: ${RFValue(100)}px;
border-radius: ${RFValue(50)}px;
background-color: green;
`;

export const  ArchitecElemNameContainer = styled.View`
align-items: center;
`;

export const ArchitecturalElementName = styled.Text`
margin: ${RFValue(8)}px 0 0 0;
`;




