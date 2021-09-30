import React from 'react';

import {
  ScrollViewBarStory,
  StoryContainer,
  PictureContainer,
  ViewStoryHighlights,
  ProfileCtnrStory,
  NameText,
  Picture
} from './styles';

const name = "felipe";

interface StoriesHighlightsProps {
  name: string;
  picture: string;

}

export class StoriesHighlights extends React.Component {
  render() {
    return (
      <ViewStoryHighlights>
        <ScrollViewBarStory>
          <ProfileCtnrStory>
            <StoryContainer>
              <PictureContainer><Picture></Picture></PictureContainer>
              <NameText>{name}</NameText>
            </StoryContainer>
          </ProfileCtnrStory>
        </ScrollViewBarStory>
      </ViewStoryHighlights>
    )
  }
};