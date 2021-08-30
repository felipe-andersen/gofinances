import React from 'react';

import {
    ScrollViewBarStory,
    ImgCtnrStory,
    StoryCover, 
    ViewStoryHighlights,
    ProfileCtnrStory,
    ProfileName
} from './styles';

 









export function StoriesHighlights(){
return (
   <ViewStoryHighlights>
   < ScrollViewBarStory>
       < ProfileCtnrStory><ImgCtnrStory><StoryCover/></ImgCtnrStory><ProfileName>Felipe</ProfileName></ProfileCtnrStory>
      
       
   </ ScrollViewBarStory></ViewStoryHighlights>
)
};