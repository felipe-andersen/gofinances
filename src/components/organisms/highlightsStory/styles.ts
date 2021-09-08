import React from 'react';
import styled from 'styled-components/native';
import {} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'


export const ViewStoryHighlights = styled.View`
height: ${RFPercentage(28)}px;
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



export const ImgCtnrStory = styled.View`
justify-content:flex-end;
align-items:center;
width: ${RFValue(90)}px;
height: ${RFValue(140)}px;
background-color: rgba(0,0,0, 0.7);
margin: 0 7px 3px 7px;
`;

export const StoryCover = styled.View`
width: ${RFValue(45)}px;
height: ${RFValue(45)}px;
background-color: rgba(255,155,152,1);
border-radius: ${RFValue(30)}px;
border: 2px solid white;

`;