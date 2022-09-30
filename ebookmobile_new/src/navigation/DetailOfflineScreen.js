/** @format */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View,Image,Switch } from "react-native";
import { TabBarIcon } from "@components";

import { Color, Styles, withTheme } from "@common";
import { SafeAreaView } from "@components";
import { OfflineDetail } from "@containers";
import { Logo, Back} from "./IconNav";
import { TouchableOpacity } from "react-native-gesture-handler";
import reactotron from "reactotron-react-native";

@withTheme
export default class DetailScreen extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    const dark = navigation.getParam("dark", false);

    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );

    return {
      headerTitle: null,
      tabBarVisible: false,
      headerLeft: Back(navigation, null, dark),

      headerTintColor: Color.headerTintColor,
      headerStyle,
      headerTitleStyle: Styles.Common.headerStyle,
    };
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
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
    const { state, navigate } = this.props.navigation;

    return (
      <SafeAreaView isSafeAreaBottom>
        <View style={{ flex: 1 }}>
          {typeof state.params !== "undefined" && (
            <OfflineDetail
              product={state.params.product}
              onBack={() => navigation.goBack()}
              onViewCart={() => navigate("CartScreen")}
              onViewProductScreen={(product) => {
                this.props.navigation.setParams(product);
                // navigate("DetailScreen", product)
              }}
              navigation={this.props.navigation}
              onLogin={() => navigate("LoginScreen")}
              onOpenWebsite={(url) =>
                navigate("CustomPage", { url, isBack: true })
              }
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}
