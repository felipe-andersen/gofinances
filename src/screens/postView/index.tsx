import React from "react";
import { ScreenContainer } from "react-native-screens";
import { Text, View, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { 
  ViewPostImages,
  ViewPostInteractionInformation,
  NameCoverFollowersView,
  CoverView,
  ThisNameText,
  NameFollowersView,
  FollowersText,
  FollowButton,
  ViewPostTitle,
  ViewPostDescription,
  ViewPostButtons,
  PostImages,
  CommentsSharesText,
  ReactionsText,
  CommentsButton,
  ReactButton,
  ShareButton,
  TextPostTitle,
  TextPostDescription,
  ScrollViewPostScreen,
  FragmentScreen
} from './styles';
import { Fragment } from "hoist-non-react-statics/node_modules/@types/react";
import { NameText } from "../profileView/styles";


const valores = "felipe Coutinho";
const result = valores.split(' ');
console.log("HHJHJ");


export default class PostViewScreen extends React.Component {
  render() {
    return (
      <FragmentScreen>
        <ScrollViewPostScreen>
          <FragmentScreen>
            <ViewPostImages>
              <PostImages></PostImages>
            </ViewPostImages>
            <ViewPostInteractionInformation
              onPress={() => {}}
            >
              <ReactionsText>1 mil reações</ReactionsText>
              <CommentsSharesText>734 comentários &bull; 119 compartilhamentos</CommentsSharesText>
            </ViewPostInteractionInformation>
            <NameCoverFollowersView>
              <CoverView></CoverView>
                <NameFollowersView>
                  <ThisNameText></ThisNameText>
                  <FollowersText></FollowersText>
                </NameFollowersView>
              <FollowButton></FollowButton>
            </NameCoverFollowersView>

         
            <ViewPostTitle>
              <TextPostTitle>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus aspernatur deserunt reprehenderit impedit.</TextPostTitle>
            </ViewPostTitle>
            <ViewPostDescription>
              <TextPostDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error placeat iste nihil eos quam quaerat molestiae, consequatur, aliquid accusamus sint delectus aut nam eius saepe alias nobis, perferendis officia distinctio.</TextPostDescription>
            </ViewPostDescription>
            <ViewPostButtons>
              <ReactButton onPress={() => {}}><MaterialCommunityIcons name="emoticon-tongue" size={24} color="grey" /></ReactButton>
              <CommentsButton  onPress={() => {}}><Text>Comments</Text></CommentsButton>
              <ShareButton onPress={() => {}}><FontAwesome name="share-alt" size={24} color="grey"/></ShareButton>
            </ViewPostButtons>  
          </FragmentScreen>
        </ScrollViewPostScreen>
      </FragmentScreen>
    )
  }
};

