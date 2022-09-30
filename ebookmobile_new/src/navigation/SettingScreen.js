/** @format */

import React, { Component } from "react";

import { Languages, Color, Styles, withTheme } from "@common";
import { Setting } from "@containers";
import { Back,Menu, Title } from "./IconNav";
import {AsyncStorage } from "react-native";
@withTheme
export default class SettingScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );
    const localLang = navigation.getParam('localLang');
    const dark = navigation.getParam("dark", true);
    const text = navigation.getParam("text", Color.headerTintColor);
    return {
      headerTitle: Title(localLang == undefined ? "Settings" : Languages[localLang].Settings, text),
      headerLeft: Back(navigation, null, dark),
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
    return <Setting navigation = {this.props.navigation} />;
  }
}
