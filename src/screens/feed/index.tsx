import React from "react";

import HashtagBar from '../../components/organisms/hashtagsBar';
import {Main} from "../../components/organisms/main";
import {StoriesHighlights} from "../../components/organisms/highlightsStory";

export default function Feed(){
    return (
    <>
    <HashtagBar />
    <StoriesHighlights/>
    <Main />
    </>
    )

};