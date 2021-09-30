import React from 'react';
import styled from 'styled-components/native';
import {} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'


export const ViewStoryHighlights = styled.View`

width:100%;
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(0)}px ${RFValue(0)}px;
`;

export const  ScrollViewBarStory = styled.ScrollView.attrs({  
horizontal: true,
showsHorizontalScrollIndicator: true,
contentContainerStyle: { alignItems: 'flex-start'}
})`
padding:  ${RFValue(11)}px 0 0 0;
flex-direction: row;
    
    
background-color: whitesmoke;

    
`;

export const  ProfileCtnrStory = styled.View`
align-items:center;`;



export const StoryContainer = styled.View`
justify-content:flex-end;
align-items:center;
width: ${RFValue(110)}px;
height: ${RFValue(235)}px;
background-color: rgba(0,0,0, 0.7);
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(8)}px ${RFValue(8)}px;
`;

export const PictureContainer = styled.View`
width: ${RFValue(35)}px;
height: ${RFValue(35)}px;
background-color: rgba(255,155,152,1);
border-radius: ${RFValue(30)}px;
border: 2px solid white;
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(3)}px ${RFValue(0)}px;

`;

export const Picture = styled.View``;


export const NameText = styled.Text`

color: white;
margin: ${RFValue(0)}px ${RFValue(0)}px ${RFValue(8)}px ${RFValue(0)}px;
font-size: ${RFValue(10)}px;
`;

