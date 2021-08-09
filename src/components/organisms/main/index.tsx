import React from 'react';

import {
    Container, 
    PostContainer, 
    PostaddContainer, 
    SrciconContainer,
    ContainerUser,
    ProfilePic,
    UserName, 
    ContainerPostText,
    PostText,
    ImgPost} from './styles';

export default function Main (){
return (
<>
<Container>
    <PostContainer></PostContainer>
    <PostContainer>
        <ImgPost/>
        <ContainerPostText><PostText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</PostText></ContainerPostText>
        <ContainerUser><ProfilePic/><UserName>Felipe</UserName></ContainerUser></PostContainer>
    <PostaddContainer>
     </PostaddContainer>
</Container>
 

    </>
)

};
//exportando a função construtora do meu componente 