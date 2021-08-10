import React from 'react';





import {
    Container, 
    PostContainer, 
    PostaddContainer, 
   
    ContainerUser,
    ProfilePic,
    UserName, 
    ContainerPostText,
    PostText,
    ImgPost,
    TextInputIt} from './styles';





    




export default function Main (){
return (


<Container>

   
    


     
     <PostContainer>
        <ImgPost></ImgPost>
        <ContainerPostText><PostText></PostText></ContainerPostText>
        <ContainerUser><ProfilePic></ProfilePic><UserName></UserName></ContainerUser>
    </PostContainer>
  

     <PostaddContainer> </PostaddContainer>
</Container>
 

 
)

};
//exportando a função construtora do meu componente 







