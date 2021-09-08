import React from "react";

import HashtagBar from '../../components/organisms/hashtagsBar';
import { Main } from "../../components/organisms/main";
import { StoriesHighlights } from "../../components/organisms/highlightsStory";



export default class Feed extends React.Component {
  render() {
    return (
    <React.Fragment>
      <HashtagBar/>
      <StoriesHighlights/>
      <Main/>
    </React.Fragment>
    )
  }
};