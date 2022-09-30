
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Color, Images, Styles, withTheme,Constants } from "@common";
import { Text,TouchableOpacity,Image,View, AsyncStorage } from "react-native";
import { TabBarIcon } from "@components";
import  {HighlightLibrary} from "@containers";
import { Logo, Back, EmptyView } from "./IconNav";
import reactotron from "reactotron-react-native";

@withTheme
export default class HighlightLibraryScreen extends PureComponent {   
  static navigationOptions = ({ navigation }) => {
    
    const dark = navigation.getParam("dark", false);
    reactotron.log("headerStyle=======>",navigation);
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );
    return {
      headerTitle: 
      <Text style={{fontSize: 18,fontWeight: 'bold',textAlign: 'center', color:dark?'white':'black'}}>
        Highlights
      </Text>,
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
    return (
      <HighlightLibrary/>
    );
  }
}