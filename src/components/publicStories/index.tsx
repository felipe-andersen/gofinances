import React from 'react';


import {ViewPublicStories,
    PublicStoriesScrollView, 
    CntrTextImage, 
    NameProfile, 
    ContainerImg, 
    Cover} from './styles';

    export function PublicStories(){
        return (
           <ViewPublicStories>
                <PublicStoriesScrollView>
                    <CntrTextImage>
                        <ContainerImg>
                            <Cover/>
                        </ContainerImg>
                        <NameProfile>Felipe</NameProfile>
                    </CntrTextImage>
                </PublicStoriesScrollView>
           </ViewPublicStories>
        )
        };