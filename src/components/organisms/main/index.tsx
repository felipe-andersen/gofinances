import React, { useState } from "react";
import {FlatList} from "react-native";
import { View, Text } from 'react-native';

import{
    PostContainer, 
    PostaddContainer, 
    ContainerUser,
    ProfileImg,
    Name, 
    ContainerPostText,
    PostText,
    ImgPost,
    ContainerView
   } from './styles';

interface PostProps {
  name: string;
  PostImageID: string;
  PostTextContent: string;
  postQ: {}
};



const postQ = [
  {
  id: "jekdkfdkfdk",
  key: 'username_title_data_fdgfsfg',
  name: 'Felipe',
  cover: "",
  descripText:"fdgfsdfg",
  date: "dia 13",
  username: "felipe-pazam",
  },
  {
  id: "hkfgjgkbngjk",
  key: 'username_title_data_fdfedfd',
  name: 'Rodrigo',
  cover: "",
  descripText:"fdfedfd",
  date: "dia 13",
  username: "rodrigo-abravanel",
  }
];


export function Main (){



function Post(){
return (
    <PostContainer>
        <ImgPost source={ImagePost}></ImgPost>
        <ContainerPostText>
            <PostText>{PostTextContent}</PostText>
        </ContainerPostText>
        <ContainerUser>
            <ProfileImg></ProfileImg>
            <Name>{name}</Name>
        </ContainerUser>
    </PostContainer>
)
};

return (
  <ContainerView>
    <FlatList 
      data={postQ}
      renderItem={({item})=> {
        
        return (
          <>          
         
         {postQ.filter((value) => value) == 2 ? <ScrollUsers/> : <Post/>}
          </>
        )
      }}
    />
    <PostaddContainer></PostaddContainer>
  </ContainerView>
)};




function MyFlatListPost() {
  
  function Post(){
    return (
      <View>
        <Text>Post</Text>
      </View>
    )
  ;}
  
  function SrollViewUsers(){
    return (
      <View>
        <Text>Visualização da lista de cards</Text>
      </View>
    )
  ;}
  

  

  class User {
    id: string;
    key: string;
    name: string;
    pictureId: string;
    descripText: string;
    date: string;
    username: string;
    
    constructor( id: string,  key: string, name: string, pictureId: string, descripText: string,  date: string,   username: string){
     this.id = id
     this.key = key
     this.name = name
     this.pictureId = pictureId
     this.descripText = descripText
     this.date = date
     this.username = username
    }
  };

  const users = [
    {
    id: "jekdkfdkfdk",
    key: 'username_title_data_fdgfsfg',
    name: 'Felipe',
    pictureId: "656tkljrl7878",
    descripText:"fdgfsdfg",
    date: "dia 13",
    username: "felipe-pazam",
    },
    {
    id: "hkfgjgkbngjk",
    key: 'username_title_data_fdfedfd',
    name: 'Rodrigo',
    pictureId: "656tkljrl7878",
    descripText:"fdfedfd",
    date: "dia 18",
    username: "tiago-mendes",
    },
      {
    id: "hkfgjgkbngjk",
    key: 'username_title_data_fdfedfd',
    name: 'Rodrigo',
    pictureId: "656tkljrl7878",
    descripText:"fdfedfd",
    date: "dia 13",
    username: "gustavo-abravanel",
    },
      {
    id: "hkfgjgkbngjk",
    key: 'username_title_data_fdfedfd',
    name: 'Rodrigo',
    pictureId: "656tkljrl7878",
    descripText:"fdfedfd",
    date: "dia 15",
    username: "rodrigo-vasconcelos",
    }
  ];
  
    let component = <Post/>
    let component2 =  <SrollViewUsers/>
   
    for (let index = 0; index < users.length; index++){
  
      if (index == 2) { component}
      else { component2 }; 
  
    }
    return [component, component2]
  };
  

  const app = MyFlatListPost()
  console.log(app)




/*
const MyFlatListPost = (users) => {
  return users.reduce((acc, user, index) => {
    return index == 2 ? acc.push("oi") : acc.push("olá") 
  }, [])
}






const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};




async function Scroll ({...rest}: PostProps) {
  const followView = postQ.filter(1);
  console
}








>>>
++
predicate
callback






*/

















