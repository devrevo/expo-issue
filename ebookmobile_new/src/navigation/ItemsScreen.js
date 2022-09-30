/** @format */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Color, Images, Styles, withTheme } from "@common";
import { Text } from "react-native";
import { TabBarIcon } from "@components";
import { ItemsDetail } from "@containers";
import { Logo, Back, EmptyView } from "./IconNav";
import reactotron from "reactotron-react-native";

@withTheme
export default class ItemsScreen extends PureComponent {
    
  static navigationOptions = ({ navigation }) => {
    const dark = navigation.getParam("dark", false);
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );

    return {
      headerTitle: <Text style={{fontSize: 18,fontWeight: 'bold',textAlign: 'center', color:dark?'white':'black'}}>
      {navigation.getParam("name")}
      </Text>,
      headerLeft: Back(navigation, null, dark),
      headerRight: EmptyView(),

      headerTintColor: Color.headerTintColor,
      headerStyle,
      headerTitleStyle: Styles.Common.headerStyle,
      tabBarIcon: ({ tintColor }) => (
        <TabBarIcon
          css={{ width: 18, height: 18 }}
          icon={Images.IconCategory}
          tintColor={tintColor}
        />
      ),
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
    const { navigate } = this.props.navigation;
    const name = this.props.navigation.getParam("name");

    reactotron.log("ItemsDetail PROPS ===============>", name);

    return (
        <ItemsDetail 
        products={this.props.navigation.state.params.products}
        onViewProductScreen={(item) => {
          this.props.navigation.tabBarVisible = false;
          navigate("DetailScreen", item);
        }}
        section={name}
        />
    );
  }
}