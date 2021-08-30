import React from 'react';
import styled from 'styled-components/native';
import {} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'


export const ViewStoryHighlights = styled.View`
height: ${RFPercentage(15)}px;
width:100%;
margin: ${RFValue(55)}px 0 0 0;
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

export const ProfileName = styled.Text``;


export const ImgCtnrStory = styled.View`
justify-content:center;
align-items:center;
width: ${RFValue(60)}px;
height: ${RFValue(60)}px;

overflow:hidden;
margin: 0 7px 3px 7px;
`;

export const StoryCover = styled.View`
width: ${RFValue(60)}px;
height: ${RFValue(60)}px;
background-color: rgba(255,155,152,1);
border-radius: ${RFValue(30)}px;

`;