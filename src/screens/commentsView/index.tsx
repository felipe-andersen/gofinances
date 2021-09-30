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




interface CommentsViewScreenProps {
  commentContent: string;
  likeAcount: string;
  name: string;
};

export default class CommentsViewScreen extends React.Component {
  
  render() {

  

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
                  onPress={() => {}}
                >
                  <Text>{name}</Text><Text>...</Text></CommentAuthorName>
                <CommentContent
                  onPress={() => {}}
                >
                  {commentContent}
                </CommentContent>
                <CommentBtns>
                  <Text>4 h</Text>
                  <ResponseBtn><Text>Responder</Text></ResponseBtn>
                  <UtilsBtn><Text>Curtir {likeAcount}</Text></UtilsBtn>
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


