import React, {useEffect} from "react";
import  AsyncStorage from "@react-native-async-storage/async-storage";
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

interface UserData {
  id: string;
  name: string;
  pictureId: string;
  email: string;
  phone: string;
  followers: string;
  following: string;
  postTitle: string;
  postDescription: string;
  postText: string;
  imageCounter: string;
  likesCounter: string;
  shareCounter: string;
  commentsCounter: string;
  responsesCounter: string;
  };

export default class PostViewScreen extends React.Component {
  render() {

    const UserSet = { 
      id: "45446546",
      name: "felipe",
      email: "",
      avatarId: "hedfjdhf"
     }
    const datakey = "@TerramadeProject:xxx";
    const Alert = alert();

    async function salvardadosdopost() {
      console.log("salvando...");

      try {
        const data = await  AsyncStorage.getItem(datakey);
        const correntData = data ? JSON.parse(data) : [];
        const dataFormated = [
          ...correntData, 
          UserSet //dados novos, não duplicados
        ];
        AsyncStorage.setItem(datakey, JSON.stringify(UserSet));
      } catch (error) {
          console.log(error);
   
        };

    useEffect(()=>{
      async function loadData() {
      const data = await AsyncStorage.getItem(datakey);
      console.log(JSON.parse(data!))
    }},[]);
    };


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


