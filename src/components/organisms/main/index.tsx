import React from 'react';
import { useState } from 'react';
import {FlatList} from "react-native";

import{
    PostContainer, 
    PostaddContainer, 
    ContainerUser,
    ProfileImg,
    Name, 
    ContainerPostText,
    PostText,
    ImgPost,
    ContainerView
   } from './styles';

interface MainProps {
descripText: string
}

export function Main (){

const postQ = [
    {
    key: 'username_title_data_fdgfsfg',
    name: 'Felipe',
    cover: "",
    descripText:"fdgfsdfg",
    date: "dia 13",
    username: "felipe-pazam",
    },
    {
    key: 'username_title_data_fdfedfd',
    name: 'Rodrigo',
    cover: "",
    descripText:"fdfedfd",
    date: "dia 13",
    username: "rodrigo-abravanel",
    }
];

function Post(){
return (
    <PostContainer>
        <ImgPost></ImgPost>
        <ContainerPostText>
            <PostText>felipe</PostText>
        </ContainerPostText>
        <ContainerUser>
            <ProfileImg></ProfileImg>
            <Name>Felipe</Name>
        </ContainerUser>
    </PostContainer>
)
};

return (
<ContainerView>
<FlatList 
data={postQ}
renderItem={({item})=> {
    return (
    <Post/>)}}
/>
    <PostaddContainer></PostaddContainer>
</ContainerView>
)};
































    












