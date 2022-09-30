/** @format */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Color, Images, Styles, withTheme } from "@common";
import { TabBarIcon } from "@components";
import { Category, CategoryItems } from "@containers";
import { Logo, Back, EmptyView } from "./IconNav";
import reactotron from "reactotron-react-native";

@withTheme
export default class CategoryScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => {

    const dark = navigation.getParam("dark", false);
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );

    return {
      headerTitle: null,
      headerLeft: Back(navigation, null, dark),
      headerRight: EmptyView(),
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

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  async UNSAFE_componentWillMount() {
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
    const { navigate } = this.props.navigation;
    return (
      <CategoryItems
        onBack={() => navigation.goBack()}
        mainCategory={this.props.navigation.state.params.mainCategory}
        onViewProductScreen={(item) => {
          navigate("DetailScreen", item);
        }}
      />
    );
  }
}
