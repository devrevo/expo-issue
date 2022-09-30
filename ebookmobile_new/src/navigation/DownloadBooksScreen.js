import { DownloadBooks } from "@containers";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Color, Images, Styles, withTheme,Constants, Languages } from "@common";
import { Text,TouchableOpacity,Image,View } from "react-native";
import { TabBarIcon } from "@components";
import { SearchItems } from "@containers";
import { Logo, Back, EmptyView } from "./IconNav";
import reactotron from "reactotron-react-native";

@withTheme
export default class DownloadedBooksScreen extends PureComponent {   
  static navigationOptions = ({ navigation }) => {
    const dark = navigation.getParam("dark", false);
    const lang = navigation.getParam("language");
    reactotron.log("headerStyle=======>",navigation);
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );

    return {
      headerTitle: <Text style={{fontSize: 18,fontWeight: 'bold',textAlign: 'center', color:dark?'white':'black'}}>{Languages[lang].DownloadedBooks}</Text>,
      headerLeft: Back(navigation, null, dark),
      headerRight: ()=> {
        return (
          <TouchableOpacity 
            onPress={navigation.getParam('clearDownloadsInDownload')}
          >
            <Text style={{color: "#03adfc", fontWeight: 'bold', margin:5}}> {Languages[lang].Clear} </Text>
          </TouchableOpacity>
        )
      },

      headerTintColor: Color.headerTintColor,
      headerStyle,
      headerTitleStyle: Styles.Common.headerStyle,
      
    };
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  UNSAFE_componentWillMount() {
    reactotron.log("this props", this.props)
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
    reactotron.log("this props", this.props, nextProps)

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
         
          <DownloadBooks
          onBack={() => navigation.goBack()}
          products={this.props.navigation.state.params.products}
          clearDownloads={this.props.navigation.state.params.clearDownloads}
          onViewProductOffline={
            (product) => navigate("DetailOffline", product)
          }
          onViewProductScreen={(item) => {
          this.props.navigation.tabBarVisible = false;
            navigate("DetailScreen", item);
        }}
          />
        );
      }

    }