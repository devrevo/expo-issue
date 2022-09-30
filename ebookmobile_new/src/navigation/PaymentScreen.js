import PaymentPage from "@containers";
import React, { PureComponent } from "react";
import { View , Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { Color, Styles, withTheme } from "@common";
import { NavBarLogo, Back } from "./IconNav";
import { LogoSpinner } from "@components";
import { Colors } from "react-native/Libraries/NewAppScreen";


@withTheme
export default class PaymentScreen extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        const headerStyle = navigation.getParam(
          "headerStyle",
          Styles.Common.toolbar()
        );
        const dark = navigation.getParam("dark", false);
        const isBack = navigation.getParam("isBack", false);
        return {
          headerTitle: NavBarLogo({ navigation }),
         // headerLeft: isBack ? Back(navigation) : Menu(dark),
          headerLeft:  Back(navigation) ,
          headerTintColor: Color.headerTintColor,
          headerStyle,
          headerTitleStyle: Styles.Common.headerStyle,
        };
      };

      constructor(props){
        super(props);
        this.state = {
          visible:true,
        }
      }
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
      hideSpinner(){
        this.setState({visible:false,});
      }
      render() {
        const { state
        } = this.props.navigation;
        const {
            theme: {
            dark: isDark,
          }
        } =  this.props;
        const { width, height } = Dimensions.get("window");

        if (typeof state.params === "undefined") {
          return <View />;
        }
    
        if (typeof state.params.url !== "undefined") {
          return (
              <View style={{ flex: 1 }}>
                <WebView onLoad={()=>this.hideSpinner()} startInLoadingState source={{ uri: state.params.url }} />
              </View>
              );
        }
        if(typeof state.params.url === "undefined")
        {
            return <View />;
        }
    
        return (
          <View style={{ flex: 1 }}>
            <PaymentPage id={state.params.id} />
          </View>
        );
      }
}