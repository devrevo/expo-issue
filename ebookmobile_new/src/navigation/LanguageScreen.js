/** @format */

import React, { Component } from "react";

import { Languages, Color, Styles, withTheme } from "@common";
import { Setting } from "@containers";
import {LanguageSet} from "@containers";
import {  Title , Back } from "./IconNav";
import {View, Text, StyleSheet} from "react-native";
import LanguagePicker from "../containers/Setting/LanguagePicker"
import {AsyncStorage } from "react-native";




@withTheme
export default class LanguageScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar(),
      
    );
    const localLang = navigation.getParam('localLang');
    const dark = navigation.getParam("dark", false);
    const text = navigation.getParam("text", Color.headerTintColor);

    return {
      headerTitle: Title(localLang == undefined ? "Languages" : Languages[localLang].Languages, text),
      headerLeft:  Back(navigation, null, dark) ,

      headerTintColor: Color.headerTintColor,
      headerStyle,
    };
  };

  UNSAFE_componentWillMount() {
    const {
      theme: {
        colors: { background, text },
        dark,
      },
    } = this.props;

    this.props.navigation.setParams({
      headerStyle: Styles.Common.toolbar(background, dark),
      dark,
      text,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.theme.dark !== nextProps.theme.dark) {
      const {
        theme: {
          colors: { background, text },
          dark,
        },
      } = nextProps;
      this.props.navigation.setParams({
        headerStyle: Styles.Common.toolbar(background, dark),
        dark,
        text,
      });
    }
  }
  

  render() {
    const {
      theme: {
        colors: { background, text, lineColor },
      },
      language
    } = this.props;
    return (
      <View style={{backgroundColor:background, flex:1,}}>
        <LanguagePicker />
        
      </View>
    );
  }
}



