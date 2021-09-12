import React from 'react';
import {
  LearningScreenScrollView,
  ArchitecturalStyleView,
  ArchitecturalStyleName,
  ArchitecturalStyleDescription,
  TutorInformationView,
  CoverNameDescriptionContainer,
  TutorCover,
  NameDescriptionContainer,
  TutorName,
  TutorDescriptionAndPrefession,
  VideoScrollView,
  SpreadOutView,
  SpreadOutText,
  SpreadOutIcon,
  VideoView,
  CoverView,
  VideoTitle,
  VideoDescription
  
} from './styles';



export default class LearningScreen extends React.Component {



    render() {
      return (
        <React.Fragment>
          <LearningScreenScrollView>

            <ArchitecturalStyleView>
              <ArchitecturalStyleName>Estilo Escandinavo</ArchitecturalStyleName>
              <ArchitecturalStyleDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fugiat iste dolorum sit esse unde ex, harum amet, odio, dolorem architecto ipsam quisquam mollitia? Sed iure necessitatibus voluptatum quaerat nisi.</ArchitecturalStyleDescription>
            </ArchitecturalStyleView>

            <TutorInformationView>
              <CoverNameDescriptionContainer>
                <TutorCover></TutorCover>
                <NameDescriptionContainer>
                  <TutorName>Felipe Sousa</TutorName>
                </NameDescriptionContainer>
              </CoverNameDescriptionContainer>
             
            </TutorInformationView>

            <VideoScrollView>
              
            <VideoView
                onPress={() => {}}
              >
                <CoverView></CoverView>
                <VideoTitle>Lorem ipsum</VideoTitle>
                <VideoDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem impedit cupiditate iure illo.</VideoDescription>
              </VideoView>

              <VideoView
                onPress={() => {}}
              >
                <CoverView></CoverView>
                <VideoTitle>Lorem ipsum</VideoTitle>
                <VideoDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem impedit cupiditate iure illo.</VideoDescription>
              </VideoView>

              <SpreadOutView>
                <SpreadOutText></SpreadOutText>
                <SpreadOutIcon/>
              </SpreadOutView>

            </VideoScrollView>

          </LearningScreenScrollView>
        </React.Fragment>
      )
    }
  };
  


  //// //// <VideoDescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur iste cupiditate voluptas nulla natus modi dolore</VideoDescriptionText>