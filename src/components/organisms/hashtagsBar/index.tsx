

import React from 'react';
import { BarContainer, TagsContainer, TagsText } from './styles';
//importando elementos criados e estilizados com a biblioteca styled-components


interface HashtagsBarsProps {
tagText: string;
}

const tagText = "construção";

export default function HashtagsBars(){
return (

<BarContainer>
<TagsContainer><TagsText>{tagText}</TagsText></TagsContainer>
<TagsContainer><TagsText>Construção</TagsText></TagsContainer>
<TagsContainer><TagsText>Construção</TagsText></TagsContainer>
<TagsContainer><TagsText>Construção</TagsText></TagsContainer>
</BarContainer>
    
    )
};