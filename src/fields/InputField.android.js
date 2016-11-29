'use strict';

import React from 'react';
import ReactNative from 'react-native';
import {InputComponent} from '../lib/InputComponent';

const {StyleSheet} = ReactNative;

export class InputField extends React.Component{
  handleValidation(isValid, validationErrors){
    this.valid = isValid;
    this.validationErrors = validationErrors;
  }
  setValue(value){
    this.refs.fieldComponent.setValue(value)
  }
  focus(){
    this.refs.fieldComponent.focus()
  }
  render(){
    return(<InputComponent
      {...this.props}

      ref='fieldComponent'
      onValidation={this.handleValidation.bind(this)}
      labelStyle={[formStyles.fieldText, this.props.labelStyle]}

      inputStyle={[formStyles.input,
          (this.props.multiline)?formStyles.multiline:{},
          (this.props.label)?formStyles.textRight:{},
          this.props.style
        ]}
      containerStyle={[formStyles.fieldContainer,
            formStyles.horizontalContainer,
            this.props.containerStyle,
          ]}
      />
    )
  }
}

InputField.propTypes = {
  multiline: React.PropTypes.bool,
  placeholder:React.PropTypes.string,
}

let formStyles = StyleSheet.create({
  alignRight:{
    marginTop: 7,
    position:'absolute',
    right: 10
  },
  textRight:{
    textAlign: 'right',
  },
  multiline:{
    lineHeight: 32,
    fontSize: 32/2,
    paddingBottom:10
  },
  separatorContainer:{
    paddingTop: 35,
  },
  horizontalContainer:{
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
  },
  fieldContainer:{
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  fieldText:{
    fontSize: 32/2,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    lineHeight: 32,
    color: 'black',
  },
  input:{
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
    fontSize: 32/2,
    flex:1,
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
