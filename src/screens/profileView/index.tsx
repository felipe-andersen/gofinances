import React from 'react';
import { Text } from 'react-native';
import {
  ProfileScreenView,
  ScrollViewProfileScreen,
  InitialView,
  BackgroundCollorImageContainer,
  CoverContainer,
  NameText,
  ContactsDataContainer,
  JoinedContainer,
  JoinedText,
  ProfileBtnsContainer,
  FollowButton,
  FollowText,
  SendMessageButton,
  SendMessageText,
  FilterSearchBar,
  DescriptionText,
  EmailContainer,
  EmailText,
  SiteContainer,
  SiteText,
  OccupationAndInstitutionContainer,
  OccupationAndInstitutionText,
  EducationalInstitutionContainer,
  EducationalInstitutionText,
  LiveInContainer,
  LiveInText,
  FollowersContainer,
  FollowersText,
  IsFromContainer,
  IsFromText,
  MoreContainer,
  MoreText,
  InteractionsText

} from './styles';

export default class ProfileViewScreen extends React.Component {



  render() {
    return (
      <ProfileScreenView>
        <ScrollViewProfileScreen>
          <InitialView>
            <BackgroundCollorImageContainer></BackgroundCollorImageContainer>
            <CoverContainer></CoverContainer>
            <NameText>Felipe Arouxa Coutinho de Sousa</NameText>
            <DescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</DescriptionText>
            <InteractionsText>2,5 mil interações nos útiltimos 30 d</InteractionsText>

            <ProfileBtnsContainer>
              <FollowButton
                onPress={() => {}}
              >
                <FollowText>Seguindo</FollowText>
              </FollowButton>

              <SendMessageButton
                 onPress={() => {}}
              >
                <SendMessageText>Mensagem</SendMessageText>
                </SendMessageButton>
              </ProfileBtnsContainer>

          </InitialView>
          <ContactsDataContainer>

            <OccupationAndInstitutionContainer
              onPress={() => {}}
            >
              <OccupationAndInstitutionText>Desenvolvedor Front End na empresa Autônomo</OccupationAndInstitutionText>
            </OccupationAndInstitutionContainer>
            
            <EducationalInstitutionContainer
              onPress={() => {}}
            >
              <EducationalInstitutionText>Estudou ou estuda em INSTITUIÇÃO</EducationalInstitutionText>
            </EducationalInstitutionContainer>

            <FollowersContainer
              onPress={() => {}}
            >
              <FollowersText>Seguido(a) por 3.454 pessoas</FollowersText>
            </FollowersContainer>

            <JoinedContainer
              onPress={() => {}}
            >
              <JoinedText>Entrou em DATA</JoinedText>
            </JoinedContainer>

            <EmailContainer
              onPress={() => {}}
            >
              <EmailText>felipe.coutinho.psl@gmail.com</EmailText>
            </EmailContainer>

            <SiteContainer
              onPress={() => {}}
            >
              <SiteText>www.wehome.com.br</SiteText>
            </SiteContainer>

            <LiveInContainer
              onPress={() => {}}
            >
              <LiveInText>Mora em LOCAL</LiveInText>
            </LiveInContainer>
            
            <IsFromContainer
              onPress={() => {}}
            >
              <IsFromText>De LOCAL</IsFromText>
            </IsFromContainer>

            <MoreContainer
              onPress={() => {}}
            >
              <MoreText>Ver mais informações</MoreText>
            </MoreContainer>
         
          </ContactsDataContainer>

          <FilterSearchBar>
          </FilterSearchBar>
        </ScrollViewProfileScreen>
      </ProfileScreenView>
    )
  }
};





