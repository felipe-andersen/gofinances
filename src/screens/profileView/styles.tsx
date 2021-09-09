import React from 'react';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const ProfileScreenView = styled.View`
width: 100%;
height: 100%;

`;

export const ScrollViewProfileScreen = styled.ScrollView`
background-color: rgba(220, 220, 220,1);

`;

export const InitialView = styled.View`
background-color: rgba(220, 220, 220,1);
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
border-radius: ${RFValue(50)}px;
background-color: #a1a307;
margin: -${RFValue(50)}px 0 0 0;
border: ${RFValue(3)}px solid yellow;
`;

export const NameText = styled.Text`
text-align: center;
`;

export const DescriptionText = styled.Text`
font-size: ${RFValue(6)}px;
color: black;
text-align: center;
`;

export const InteractionsText = styled.Text`
text-align: center;
`;

export const ProfileBtnsContainer = styled.View`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;

`;

export const FollowButton = styled(RectButton)`
background-color: #2b2b2b;

`;

export const FollowText = styled.View`
padding: ${RFValue(5)}px ${RFValue(10)}px;

`;

export const SendMessageButton = styled(RectButton)`
background-color: #b3b3b3;

`;

export const SendMessageText = styled.View`
padding: ${RFValue(5)}px ${RFValue(10)}px;

`;

export const FilterSearchBar = styled.View`
width: ${RFPercentage(49)}px;
height: ${RFPercentage(6)}px;

`;

export const ContactsDataContainer = styled.View`
width: 100%;
height: ${RFPercentage(60)}px;
background-color: #ffffff;
`;

export const OccupationAndInstitutionContainer = styled(RectButton)`
width: 100%;
height: ${RFValue(35)}px;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 ${RFValue(13)}px;
`;

export const OccupationAndInstitutionText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const EducationalInstitutionContainer = styled(RectButton)`
width: 100%;
height: ${RFValue(35)}px;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 ${RFValue(13)}px;
`;

export const EducationalInstitutionText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const FollowersContainer = styled(RectButton)`
width: 100%;
height: ${RFValue(35)}px;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 ${RFValue(13)}px;
`;

export const FollowersText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const JoinedContainer = styled(RectButton)`
width: 100%;
height: ${RFValue(35)}px;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 ${RFValue(13)}px;
`;

export const JoinedText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const EmailContainer = styled(RectButton)`
width: 100%;
height: ${RFValue(35)}px;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 ${RFValue(13)}px;
`;

export const EmailText = styled(RectButton)`
font-size: ${RFValue(15)}px;

`;

export const SiteContainer = styled(RectButton)`
width: 100%;
height: ${RFValue(35)}px;

flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 ${RFValue(13)}px;
`;
export const SiteText = styled.Text`
font-size: ${RFValue(15)}px;
`;

export const LiveInContainer = styled(RectButton)`
width: 100%;
height: ${RFValue(35)}px;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 ${RFValue(13)}px;
`;

export const LiveInText = styled(RectButton)`
font-size: ${RFValue(15)}px;
`;



export const IsFromContainer = styled(RectButton)`
width: 100%;
height: ${RFValue(35)}px;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 ${RFValue(13)}px;
`;

export const IsFromText = styled(RectButton)`
font-size: ${RFValue(15)}px;
`;

export const MoreContainer = styled(RectButton)`
width: 100%;
height: ${RFValue(35)}px;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding: 0 ${RFValue(13)}px;
`;

export const MoreText = styled(RectButton)`
font-size: ${RFValue(15)}px;
`;
