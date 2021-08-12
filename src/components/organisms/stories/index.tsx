import React from 'react';

import {
    ScrollViewBar,
    ContainerPic,
    Cover, ViewStories
} from './styles';


export default function Stories(){
return (
   <ViewStories>
   <ScrollViewBar>
       <ContainerPic><Cover/></ContainerPic>
       <ContainerPic><Cover/></ContainerPic>
       <ContainerPic><Cover/></ContainerPic>
       <ContainerPic><Cover/></ContainerPic>
       <ContainerPic><Cover/></ContainerPic>
       <ContainerPic><Cover/></ContainerPic>
   </ScrollViewBar></ViewStories>
)
};