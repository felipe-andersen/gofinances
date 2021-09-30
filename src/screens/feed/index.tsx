import React from "react";

import HashtagBar from '../../components/organisms/hashtagsBar';
import { Main } from "../../components/organisms/main";
import { StoriesHighlights } from "../../components/organisms/highlightsStory";

import {FeedScreenView} from './styles';

export default class Feed extends React.Component {

  render() {
    return (
    <React.Fragment>
      <FeedScreenView>
        <HashtagBar/>
        <StoriesHighlights/>
        <Main></Main>
      </FeedScreenView>
    </React.Fragment>
    )
  }
};










/*
Global

  Home/Início
  Pesquisar
  Add
  caixa de comentários e atualizações
  configuração do perfil
 
   
       




Rotas e navegação

  Home/Início/Feed
    Global
    Histórias
      paginas de várias histórias
    post 
      -> perfil do usuário
      -> site 
      -> comentários


Informações do Feed 

  Nome de Usuário
  Imagem de perfil
  Números de seguidores
  título do post
  número de imagens
  denúncia


Informações de post 

  Nome de Usuário
  background-image
  Picture/lista de perfil
  Números/lista de seguidores
  Números de seguindo
  título do post
  texto do post 
  hashtags do post
  número de imagens
  número de curtidas
  número de compartilhamentos
  números de comentários
  números de respostas
  número de imagens
  número de interações/reações
  número de visualizações 
  número de impressões
  números de denúncia


Informações do Usuário

  Nome de Usuário
  Nome de perfil
  Imagem de perfil
  Números de seguidores
  Número de visualizações
  Descrição do perfil
  Onde mora
  Onde nasceu
  Onde trabalha
  Profissão/Ocupação
  Desde
  País/REgião
  Gênero
  tipo de conta
  tema do aplicativo
  contas conectadas
  opções de login
  Estilos
  Checkin's compartilhados
    Local/Endereço
    bairo/cidade/distrito/zona/região/cidade/estado
    Feedback de temperatura/clima
    comidas típicas que experimentou
    habitação urbana
    clima de comunidade
  Palestras que participou
  Habilitado para convite
  Habilitado para convidar
  Convites para trabalho
  Convites que fez

*/