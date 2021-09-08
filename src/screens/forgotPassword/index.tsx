import React from 'react';
import {View} from 'react-native';
import {
InputName,
InputLastName,
InputEmail,
InputEmailAgain,
InputKeyword,
InputKeywordAgain} from './styles';

export default class ForgotPasswordScreen extends React.Component {
  render() {
    return (
      <View>
        <InputName/>
        <InputLastName/>
        <InputEmail/>
        <InputEmailAgain/>
        <InputKeyword/>
        <InputKeywordAgain/>
      </View>
    )
  }
};
