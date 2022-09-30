
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Color, Images, Styles, withTheme,Constants } from "@common";
import { Text,TouchableOpacity,Image,View } from "react-native";
import { TabBarIcon } from "@components";
import  {SubHighlight} from "@containers";
import { Logo, Back, EmptyView } from "./IconNav";
import reactotron from "reactotron-react-native";

@withTheme
export default class SubHighlightLibraryScreen extends PureComponent {   
  static navigationOptions = ({ navigation }) => {
    const dark = navigation.getParam("dark", false);
    reactotron.log("headerStyle=======>",navigation);
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );

    return {
      headerTitle: <Text style={{fontSize: 18,fontWeight: 'bold',textAlign: 'center', color:dark?'white':'black'}}>
      {navigation.getParam('BookName')}
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
         
          <SubHighlight    
        
          />
        );
      }

    }