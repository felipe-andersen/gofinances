import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {
  CommentsView,
  AllCommentsScrollView,
  ListOption,
  CommentOne,
  AuthorPhoto,
  CommentContentBtnsView,
  CommentAuthorName,
  CommentContent,
  CommentBtns,
  ResponseBtn,
  UtilsBtn,
  CommentImputViewFixed,
  PhotoCommentView,
  CommentImput,
  AttachmentBtnsView,
  PhotoGifView,
  AttachmentImgPhotoBtn,
  AttachmentGifBtn,
  SendCommentBtn,
  AnimatedAlertAgainComment
  
} from './styles';

export default class CommentsViewScreen extends React.Component {
  render() {

    const { navigate } = useNavigation();

    return (
      <React.Fragment>

        <CommentsView>
           
          
          <AllCommentsScrollView>
            <ListOption/>
            <CommentOne>

            <AuthorPhoto
              onPress={() => {}}
            />

              <CommentContentBtnsView>
                <CommentAuthorName
                  onPress={() => {navigate("ProfileViewScreen", "")}}
                >
                  <Text>Felipe Sousa</Text><Text>...</Text></CommentAuthorName>
                <CommentContent
                  onPress={() => {}}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut earum praesentium perspiciatis accusantium, illum vitae modi similique reprehenderit autem sint facere? Totam tempore laudantium, dignissimos blanditiis molestias recusandae minus illum.</CommentContent>       
                <CommentBtns>
                  <Text>4 h</Text>
                  <ResponseBtn><Text>Responder</Text></ResponseBtn>
                  <UtilsBtn><Text>Curtir 25</Text></UtilsBtn>
                </CommentBtns>

                <CommentImput/>

              </CommentContentBtnsView>

            </CommentOne>

          </AllCommentsScrollView>

          <CommentImputViewFixed>
            
            <PhotoCommentView>
              <AuthorPhoto
                onPress={() => {}}
              />
              <CommentImput/>
            </PhotoCommentView>

            <AttachmentBtnsView>
              <PhotoGifView>
                <AttachmentImgPhotoBtn>photo</AttachmentImgPhotoBtn>
                <AttachmentGifBtn>Gif</AttachmentGifBtn>
              </PhotoGifView>
              <SendCommentBtn>Send</SendCommentBtn>
            </AttachmentBtnsView>
          </CommentImputViewFixed>


          <AnimatedAlertAgainComment></AnimatedAlertAgainComment>
        </CommentsView>
         
      </React.Fragment>
    )
  }
};

module.exports = "";


namespace dfkfdkjfd {};