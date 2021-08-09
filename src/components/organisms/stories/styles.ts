import React from 'react';
import styled from 'styled-components/native';
import {} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'




export const ScrollViewBar = styled.ScrollView.attrs({  
horizontal: true,
showsHorizontalScrollIndicator: true,
contentContainerStyle: { alignItems: 'center'}
})`
height: ${RFPercentage(10)}px;
width:100%;
flex-direction: row;
    
    
background-color: whitesmoke;

    
`;


export const ContainerPic = styled.View`
justify-content:center;
align-items:center;
width: ${RFValue(60)}px;
height: ${RFValue(60)}px;

overflow:hidden;
margin: 0 0 0 15px
`;

export const Cover = styled.View`
width: ${RFValue(60)}px;
height: ${RFValue(60)}px;
background-color: rgba(255,155,152,1);
border-radius: ${RFValue(30)}px;

`;