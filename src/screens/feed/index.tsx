import React from "react";

import HashtagBar from '../../components/organisms/hashtagsBar';
import {Main} from "../../components/organisms/main";
import {StoriesHighlights} from "../../components/organisms/highlightsStory";
import { View } from "react-native";


export default function Feed(){
    return (
    <View>
    <HashtagBar />
    <StoriesHighlights/>
    <Main />
    </View>
    )

};