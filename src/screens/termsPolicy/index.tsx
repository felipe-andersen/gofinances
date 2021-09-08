import React from 'react';
import {View} from 'react-native';
import {
  InputName,
  InputLastName,
  InputEmail,
  InputEmailAgain,
  InputKeyword,
  InputKeywordAgain
} from './styles';



export default class TermsPolicyScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <InputName/>
        <InputLastName/>
        <InputEmail/>
        <InputEmailAgain/>
        <InputKeyword/>
        <InputKeywordAgain/>
      </React.Fragment>
    )
    }
};


  

