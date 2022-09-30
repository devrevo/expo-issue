/** @format */

import React, { PureComponent } from "react";
import { Menu, EmptyView,Back, Logo } from "./IconNav";
import { Text,View,Switch } from "react-native";

import { Images, Config, Constants, Color, Styles, Languages } from "@common";
import { Audio} from "@containers";
import reactotron from "reactotron-react-native";
import { withTheme } from "react-native-paper";
import { TabBarIcon } from "@components";


@withTheme
export default class AudioScreen extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    const dark = navigation.getParam("dark", false);
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );

    return {
      headerLeft: Back(navigation, null, dark),
      headerTitle: null,
      tabBarVisible: false,
      tabBarIcon: ({ tintColor }) => (
        <TabBarIcon
          css={{ width: 18, height: 18 }}
          icon={Images.IconCategory}
          tintColor={tintColor}
        />
      ),
      headerTintColor: Color.headerTintColor,
      headerStyle,
      headerTitleStyle: Styles.Common.headerStyle,
    };
  };

  UNSAFE_componentWillMount() {
    reactotron.log("THIS PROPS IN WISHLIST====>", this.props);

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
    reactotron.log("THIS PROPS IN WISHLIST====>", this.props);
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
    const { navigate } = this.props.navigation;
    reactotron.log("----------->",this.props.navigation.state.params.product);
    // const rootNavigation = this.props.screenProps.rootNavigation;

    return (
      <Audio 
        item={this.props.navigation.state.params.item}
      />
    );
  }
}
