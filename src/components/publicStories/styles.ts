import React from "react";
import styled from "styled-components/native";
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';


export const ViewStories = styled.View`
height: ${RFPercentage(15)}px;
width:100%;
margin: ${RFValue(55)}px 0 0 0;
`;

export const StoriesScrollViewBar = styled.ScrollView.attrs({  
horizontal: true,
showsHorizontalScrollIndicator: true,
contentContainerStyle: { alignItems: 'flex-start'}
})`
padding:  ${RFValue(11)}px 0 0 0;
flex-direction: row;  
background-color: whitesmoke;
`;

export const ProfileCtnr = styled.View`
align-items:center;`;

export const NameAuthor = styled.Text``;


export const ContainerImg = styled.View`
justify-content:center;
align-items:center;
width: ${RFValue(60)}px;
height: ${RFValue(60)}px;

overflow:hidden;
margin: 0 7px 3px 7px;
`;

export const Cover = styled.View`
width: ${RFValue(60)}px;
height: ${RFValue(60)}px;
background-color: rgba(255,155,152,1);
border-radius: ${RFValue(30)}px;

`;