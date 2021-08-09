import {} from 'react-native';
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
//usando a biblioteca 'react-native-responsive-fontsize' para tornar os elementos responsivos
import { RectButton } from 'react-native-gesture-handler';


export const BarContainer = styled.ScrollView.attrs({  
horizontal: true,
showsHorizontalScrollIndicator: true,
contentContainerStyle: { alignItems: 'center'}
})`
height: ${RFValue(55)}px;
width:100%;
flex-direction: row;


background-color:whitesmoke;
position: absolute;
z-index: 1000;

`;

export const TagsContainer = styled(RectButton)`
height: ${RFValue(36)}px;
width: ${RFValue(125)}px;
flex-direction: row;
background-color: rgba(255,255,255,1);

border-radius: ${RFValue(18)}px;
padding: 0 ${RFValue(13)}px;
align-items: center;
justify-content: flex-end;
margin-left: 8px;

`;

export const TagsText = styled.Text`
font-size: ${RFValue(14)}px;
color: black;
`;
