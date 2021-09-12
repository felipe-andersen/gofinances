import React from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const ProfileScreenView = styled.View`
width: 100%;
height: 100%;
background-color: grey;
`;

export const ScrollViewProfileScreen = styled.ScrollView`
background-color: rgba(220, 220, 220,1);

`;

export const InitialView = styled.View`
background-color: rgba(250, 250, 250,1);
align-items:center;
`;

export const BackgroundCollorImageContainer = styled(RectButton)`
width: 100%;
height:${RFValue(180)}px;
background-color: #c44242;
`;

export const CoverContainer = styled(RectButton)`
width: ${RFValue(130)}px;
height: ${RFValue(130)}px;
border-radius: ${RFValue(65)}px;
background-color: #a1a307;
margin: -${RFValue(65)}px 0 0 0;
border: ${RFValue(5)}px solid white;
`;

export const NameText = styled.Text`
text-align: center;
font-size: ${RFValue(25)}px;
font-weight: 600;
`;

export const DescriptionText = styled.Text`
font-size: ${RFValue(15)}px;
font-weight: 600;
color: black;
text-align: center;
`;

export const InteractionsText = styled.Text`
font-size: ${RFValue(14)}px;
text-align: center;
color: grey;
margin: ${RFValue(9)}px 0;
`;

export const ProfileBtnsContainer = styled.View`
width: 100%;
height: ${RFValue(90)}px;
flex-direction: row;
justify-content: center;
align-items: center;

`;

export const FollowButton = styled(RectButton)`

background-color: #2b2b2b;
margin: 0 ${RFValue(6)}px;
border-radius: ${RFValue(23)}px;

`;

export const FollowText = styled.Text`
font-size: ${RFValue(14)}px;
padding: ${RFValue(13)}px ${RFValue(10)}px;
color:white;

`;

export const SendMessageButton = styled(RectButton)`
border-radius: ${RFValue(23)}px;
background-color: #d6d6d6;

`;

export const SendMessageText = styled.Text`
font-size: ${RFValue(14)}px;
padding: ${RFValue(13)}px ${RFValue(10)}px;

`;

export const FilterSearchBar = styled.View`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;

`;

export const ContactsDataContainer = styled.View`
width: 100%;

background-color: rgba(250, 250, 250,1);
padding: ${RFValue(15)}px 0;
margin: ${RFValue(20)}px 0;
`;

export const OccupationAndInstitutionContainer = styled(RectButton)`
width: 100%;


flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: ${RFValue(15)}px ${RFValue(13)}px;
`;

export const OccupationAndInstitutionText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const EducationalInstitutionContainer = styled(RectButton)`
width: 100%;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: ${RFValue(15)}px ${RFValue(13)}px;
`;

export const EducationalInstitutionText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const FollowersContainer = styled(RectButton)`
width: 100%;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: ${RFValue(15)}px ${RFValue(13)}px;
`;

export const FollowersText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const JoinedContainer = styled(RectButton)`
width: 100%;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: ${RFValue(15)}px ${RFValue(13)}px;
`;

export const JoinedText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const EmailContainer = styled(RectButton)`
width: 100%;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: ${RFValue(15)}px ${RFValue(13)}px;
`;

export const EmailText = styled.Text`
font-size: ${RFValue(15)}px;

`;

export const SiteContainer = styled(RectButton)`
width: 100%;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: ${RFValue(15)}px ${RFValue(13)}px;
`;

export const SiteText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const LiveInContainer = styled(RectButton)`
width: 100%;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: ${RFValue(15)}px ${RFValue(13)}px;
`;

export const LiveInText = styled.Text`
font-size: ${RFValue(15)}px;
`;



export const IsFromContainer = styled(RectButton)`
width: 100%;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: ${RFValue(15)}px ${RFValue(13)}px;
`;

export const IsFromText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const MoreContainer = styled(RectButton)`
width: 100%;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: ${RFValue(15)}px ${RFValue(13)}px;
`;

export const MoreText = styled.Text`
font-size: ${RFValue(15)}px;
`;
