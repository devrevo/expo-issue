/** @format */

import React, { PureComponent } from "react";
import { Menu, EmptyView,Back, Logo } from "./IconNav";
import { Text,View,Switch ,TouchableOpacity,Image} from "react-native";

import { Images, Config, Constants, Color, Styles, Languages } from "@common";
import { WishList } from "@containers";
import reactotron from "reactotron-react-native";
import { withTheme } from "react-native-paper";


@withTheme
export default class WishListScreen extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    const dark = navigation.getParam("dark", false);
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );

    return {
      headerLeft: Back(navigation, null, dark),
      headerTitle: null,
      headerRight: ()=> {
        return (
          <>
            <TouchableOpacity 
              onPress={ () => {navigation.navigate("HighlightPage")}}
            >
              <Image source={require("@images/icons/pencil.png")} style={{marginRight:10,tintColor:dark? 'white':'black', height:25,width:25}}/>
            </TouchableOpacity>
          </>
        );
      },
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
    // const rootNavigation = this.props.screenProps.rootNavigation;

    return (
      <WishList
        onViewProduct={(product) => navigate("Detail", product)}
        onViewProductOffline={(product) => navigate("DetailOffline", product)}
        onViewHome={() => navigate("Default")}
      />
    );
  }
}
