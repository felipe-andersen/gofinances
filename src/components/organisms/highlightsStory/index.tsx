import React from 'react';

import {
    ScrollViewBarStory,
    ImgCtnrStory,
    StoryCover, 
    ViewStoryHighlights,
    ProfileCtnrStory,
} from './styles';

 









export class StoriesHighlights extends React.Component {
  render() {
    return (
      <ViewStoryHighlights>
        <ScrollViewBarStory>
          <ProfileCtnrStory>
            <ImgCtnrStory><StoryCover/></ImgCtnrStory>
          </ProfileCtnrStory>
        </ScrollViewBarStory>
      </ViewStoryHighlights>
    )
  }
};