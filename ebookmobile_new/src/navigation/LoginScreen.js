/** @format */

import React, { PureComponent } from "react";

import { Login } from "@containers";
import { Color, Styles, withTheme } from "@common";
import { Back, EmptyView, Logo } from "./IconNav";
import reactotron from "reactotron-react-native";

@withTheme
export default class LoginScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const dark = navigation.getParam("dark", false);
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );

    return {
      headerLeft: Back(navigation, null, dark),
      headerRight: EmptyView(),
      headerTitle: null,

      headerTintColor: Color.headerTintColor,
      headerStyle,
      headerTitleStyle: Styles.Common.headerStyle,
    };
  };

  UNSAFE_componentWillMount() {
    reactotron.log("THIS PROPS IN OLOGIN====>", this.props);

    const {
      theme: {
        colors: { background },
        dark,
      },
    } = this.props;

    this.props.navigation.setParams({
      headerStyle: Styles.Common.toolbar(background, dark),
      dark,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.theme.dark !== nextProps.theme.dark) {
      const {
        theme: {
          colors: { background },
          dark,
        },
      } = nextProps;
      this.props.navigation.setParams({
        headerStyle: Styles.Common.toolbar(background, dark),
        dark,
      });
    }
  }

  render() {
    const { navigate, state, goBack } = this.props.navigation;
    const isLogout = state.params ? state.params.isLogout : false;

    return (
      <Login
        statusBar
        navigation={this.props.navigation}
        onBack={goBack}
        isLogout={isLogout}
        onViewSignUp={(user) => navigate("SignUpScreen", user)}
        onViewCartScreen={() => navigate("CartScreen")}
        onViewHomeScreen={() => navigate("Default")}
      />
    );
  }
}
