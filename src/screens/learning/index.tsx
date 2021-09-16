import React from 'react';
import { View } from 'react-native';
import {
  LearningScreenScrollView,
  ArchitecturalStyleView,
  ArchitecturalStyleImage,
  ArchitecturalStyleNameDescripContainer,
  ArchitecturalStyleName,
  ArchitecturalStyleDescription,
  TutorInformationView,
  CoverNameDescriptionContainer,
  TutorCover,
  NameDescriptionContainer,
  TutorFollowButton,
  TutorName,
  VideoScrollView,
  SpreadOutView,
  SpreadOutText,
  SpreadOutIcon,
  VideoRectButtonBorder,
  VideoView,
  VideoTitleDescripContainer,
  CoverView,
  TitleDescriptionView,
  VideoTitle,
  VideoDescription,
  ArchitecturalElementsScrollView,
  ArchitecturalElementView,
  ArchitecturalElementImage,
  ArchitecElemNameContainer,
  ArchitecturalElementName,
  
} from './styles';
//TutorDescriptionAndPrefession,


export default class LearningScreen extends React.Component {



    render() {
      return (
        <React.Fragment>
          <LearningScreenScrollView>

            <ArchitecturalStyleView>
              <ArchitecturalStyleImage/>
                <ArchitecturalStyleNameDescripContainer>
                  <ArchitecturalStyleName>Estilo Escandinavo</ArchitecturalStyleName>
                  <ArchitecturalStyleDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fugiat iste dolorum sit esse unde ex, harum amet, odio, dolorem architecto ipsam quisquam mollitia? Sed iure necessitatibus voluptatum quaerat nisi.</ArchitecturalStyleDescription>
                </ArchitecturalStyleNameDescripContainer>  
            </ArchitecturalStyleView>

            <TutorInformationView>

              <CoverNameDescriptionContainer>
                <TutorCover></TutorCover>
                <NameDescriptionContainer>
                  <TutorName>Felipe Sousa</TutorName>
                  <TutorFollowButton>Seguir</TutorFollowButton>
                </NameDescriptionContainer>
              </CoverNameDescriptionContainer>
             
            </TutorInformationView>

            <VideoScrollView>

            <VideoRectButtonBorder>
              <VideoView
                onPress={() => {}}
              >
                <CoverView/>
                <VideoTitleDescripContainer>
                  <VideoTitle>Lorem ipsum</VideoTitle>
                  <VideoDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem impedit cupiditate iure illo.</VideoDescription>
                </VideoTitleDescripContainer>
              </VideoView>
            </VideoRectButtonBorder>
            

              <SpreadOutView>
                <SpreadOutText>Ver mais</SpreadOutText>
                <SpreadOutIcon/>
              </SpreadOutView>

            </VideoScrollView>


          

            <ArchitecturalElementsScrollView>

              <ArchitecturalElementView>
                <ArchitecturalElementImage/>
                <ArchitecElemNameContainer>
                  <ArchitecturalElementName>Estrutura</ArchitecturalElementName>
                </ArchitecElemNameContainer>
                </ArchitecturalElementView>

                <ArchitecturalElementView>
                <ArchitecturalElementImage/>
                <ArchitecElemNameContainer>
                  <ArchitecturalElementName>Esquadrias</ArchitecturalElementName>
                </ArchitecElemNameContainer>
                </ArchitecturalElementView>

                <ArchitecturalElementView>
                <ArchitecturalElementImage/>
                <ArchitecElemNameContainer>
                  <ArchitecturalElementName>Revestimentos</ArchitecturalElementName>
                </ArchitecElemNameContainer>
                </ArchitecturalElementView>

                <ArchitecturalElementView>
                <ArchitecturalElementImage/>
                <ArchitecElemNameContainer>
                  <ArchitecturalElementName>viga</ArchitecturalElementName>
                </ArchitecElemNameContainer>
                </ArchitecturalElementView>

                <ArchitecturalElementView>
                <ArchitecturalElementImage/>
                <ArchitecElemNameContainer>
                  <ArchitecturalElementName>viga</ArchitecturalElementName>
                </ArchitecElemNameContainer>
                </ArchitecturalElementView>

                <ArchitecturalElementView>
                <ArchitecturalElementImage/>
                <ArchitecElemNameContainer>
                  <ArchitecturalElementName>viga</ArchitecturalElementName>
                </ArchitecElemNameContainer>
                </ArchitecturalElementView>

            </ArchitecturalElementsScrollView>
            
          </LearningScreenScrollView>
        </React.Fragment>
      )
    }
  };



  //// //// <VideoDescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur iste cupiditate voluptas nulla natus modi dolore</VideoDescriptionText>