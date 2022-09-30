/** @format */

import React, { PureComponent } from "react";
import { Search } from "@components";
import { Color, Styles, withTheme } from "@common";
import { View,Image,Switch,Platform,StatusBar,Text } from "react-native";
import reactotron from "reactotron-react-native";

export default class SearchScreen extends PureComponent {
  
  static navigationOptions = ({ navigation }) => ({
    title: "Search",
    header: null,
    // tabBarVisible: false,
    tabBarLabel: null,
  });

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <Search
        onBack={goBack}
        onShowAll={(config, index) =>
          navigate("ListAllScreen", { config, index })
        }
        onViewProductScreen={(product) => navigate("DetailScreen", product)}
        onViewCategory={(item) => {navigate("CategoryScreen", item);}}
        navigation={this.props.navigation}
        // onFilter={(onSearch) => navigate("FiltersScreen", { onSearch })}
      />
    );
  }
}
