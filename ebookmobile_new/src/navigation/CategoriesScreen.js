/** @format */

import React, { PureComponent } from "react";

import { Color, Languages, Styles, withTheme } from "@common";
import { View,Image,Switch,Platform,StatusBar,Text,AsyncStorage } from "react-native";
import { TabBarIcon } from "@components";

import { Categories } from "@containers";
import { Logo, Menu, EmptyView,Back,RightTitle } from "./IconNav";
import reactotron from "reactotron-react-native";

@withTheme
export default class CategoriesScreen extends PureComponent {


  static navigationOptions =  ({ navigation }) => {
    const dark = navigation.getParam("dark", false);
    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 10 : StatusBar.currentHeight;
    const localLang = navigation.getParam('localLang')
    reactotron.log(")=======================================",localLang);
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );


    return {
      headerLeft: RightTitle(dark,localLang==undefined ? "Explore" : Languages[localLang].Explore),
      headerRight: EmptyView(),
      headerTitle: null,

      // header : () => {
      //   return (
      //     <View>
      //   {Platform.OS === 'ios' ? 
      //   <Text style={{marginBottom:10}}></Text>
  
      //   :
      //   <Text style={{height:STATUSBAR_HEIGHT ,backgroundColor:dark ? '#222229' : 'white'}}></Text>
      //   }
      //   </View>
      //   );
      // },

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
    const {
      theme: {
        colors: { background },
        dark,
      },
    } = this.props;

    this.props.navigation.setParams({
      headerStyle: Styles.Common.toolbar(background, dark),
      dark
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
        dark
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    reactotron.log(" PROPS NAVIGATE", this.props.navigation);
    return (
      <Categories
        onViewProductScreen={(item) => navigate("DetailScreen", item)}
        onViewCategory={(item) => {navigate("CategoryScreen", item);}}
      />
    );
  }
}
