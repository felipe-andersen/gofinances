import React from "react";
import { ScreenContainer } from "react-native-screens";
import { Text, View, FlatList } from "react-native";
import { 
  ViewPostImages,
  ViewPostInteractionInformation,
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

/*
const PostUn = [
  { key: "gkfdg",
    name: "Felipe",
  age: 23 },
  { key: "gkfsdfdg",
    mather: 24,
   father: 24}
];

<FlatList 
        data={PostUn}
        renderItem={({item})=> {
          return (
            <PostViewComponent/>
          )
        }}
      />
*/
export default class PostViewScreen extends React.Component {
  render() {
    return (
      <FragmentScreen>
        <ScrollViewPostScreen>
            <ViewPostImages>
              <PostImages></PostImages>
            </ViewPostImages>
            <ViewPostInteractionInformation>
              <ReactionsText>1048 reações</ReactionsText>
              <CommentsSharesText>734 comentários &bull; 119 compartilhamentos</CommentsSharesText>
            </ViewPostInteractionInformation>
            <FollowButton></FollowButton>
            <ViewPostTitle>
              <TextPostTitle></TextPostTitle>
            </ViewPostTitle>
            <ViewPostDescription>
              <TextPostDescription></TextPostDescription>
            </ViewPostDescription>
            <ViewPostButtons>
              <CommentsButton onPress={() => {}}><Text>Comp.</Text></CommentsButton>
              <ReactButton onPress={() => {}}><Text>React</Text></ReactButton>
              <ShareButton onPress={() => {}}><Text>Share</Text></ShareButton>
            </ViewPostButtons>  
        </ScrollViewPostScreen>
      </FragmentScreen>
    )
  }
};

