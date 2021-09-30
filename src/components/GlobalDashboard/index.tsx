import React from 'react';
import {
  DashboardElement,
  HomeBtn,
  SearchBtn,
  AddBtn,
  MsgBoxBtn,
  MyProfileBtn
} from './styles';


export default class DashboardComponentGlobal extends React.Component {
  
  render() {
    return (
      <DashboardElement> 
        <HomeBtn></HomeBtn> 
        <SearchBtn></SearchBtn> 
        <AddBtn></AddBtn> 
        <MsgBoxBtn></MsgBoxBtn> 
        <MyProfileBtn></MyProfileBtn> 
      </DashboardElement> 


    
    )
  }
};
