'use strict';

import React from 'react';
import ReactNative from 'react-native';
let { View, StyleSheet, TextInput, Text, PickerIOS} = ReactNative;

import {PickerComponent} from '../lib/PickerComponent';

export class PickerField extends React.Component {
  setValue(value){
    this.refs.fieldComponent.setValue(value)
  }
  render() {
    return(
      <PickerComponent
        {...this.props}
        ref='fieldComponent'
        labelStyle={[formStyles.fieldText, this.props.labelStyle]}
        valueStyle = {[formStyles.fieldValue,this.props.valueStyle]}
        valueContainerStyle = {[formStyles.alignRight,
          formStyles.horizontalContainer, this.props.valueContainerStyle]}
        containerStyle={[
          formStyles.fieldContainer,
          formStyles.horizontalContainer,
          this.props.containerStyle,
        ]}
      />
    )
  }
}

let formStyles = StyleSheet.create({
  alignRight:{
      marginTop: 7, position:'absolute', right: 10
  },
  noBorder:{
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  separatorContainer:{
    paddingTop: 35,
  },
  separator:{
    paddingLeft: 10,
    paddingRight: 10,
    color: '#6D6D72',
    paddingBottom: 7
  },
  fieldsWrapper:{
    // borderTopColor: '#afafaf',
    // borderTopWidth: 1,
  },
  horizontalContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  fieldContainer:{
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 45
  },
  fieldValue:{
    fontSize: 32/2,
    paddingLeft: 10,
    paddingTop: 4,
    justifyContent: 'center',
    color: 'black'
  },
  fieldText:{
    fontSize: 32/2,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    lineHeight: 32,
    color: 'black'
  },
  input:{
    paddingLeft: 10,
    paddingRight: 10,
  },
  helpTextContainer:{
    marginTop:9,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  helpText:{
    color: '#7a7a7a'
  }
});
