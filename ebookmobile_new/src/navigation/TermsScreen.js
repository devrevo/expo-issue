import Terms from "../containers/Terms";
import React ,{ PureComponent } from "react";
import { Color, Styles, withTheme } from "@common";
import { EmptyView,Back,Logo, Menu } from "./IconNav";

export default class TermsScreen extends PureComponent{
    static navigationOptions = ({ navigation }) => {
        const dark = navigation.getParam("dark", false);
        const headerStyle = navigation.getParam(
          "headerStyle",
          Styles.Common.toolbar()
        );
    
        return {
          headerLeft: Back(navigation, null, dark),
          headerRight: EmptyView(),
          headerTitle: null,
    
          headerTintColor: Color.headerTintColor,
          headerStyle,
          headerTitleStyle: Styles.Common.headerStyle,
        };
      };
    render(){
        return <Terms/>;
    };
}