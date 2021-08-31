import React from 'react';

import {View} from 'react-native';
import {
VideoView,
Title,
Description,
DataAuthorView,
BtnsView,
PlayListItemView
} from './styles';

export function Videos (){
return (
<View>
    <VideoView></VideoView>
    <Title></Title>
    <Description></Description>
    <DataAuthorView></DataAuthorView>
    <BtnsView></BtnsView>

    <PlayListItemView>
    <VideoView></VideoView>
    <Title></Title>
    <Description></Description>
    <BtnsView></BtnsView>
    </PlayListItemView>
</View>

)
}