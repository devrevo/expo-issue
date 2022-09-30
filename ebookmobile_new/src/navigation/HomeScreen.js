/** @format */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View,Image,Text,StatusBar,Platform, NativeModules ,Dimensions, Animated ,AsyncStorage,StyleSheet ,TouchableOpacity} from "react-native";
import { Color, Styles, withTheme, Constants, Config, Languages } from "@common";
import { Home } from "@containers";
import reactotron from "reactotron-react-native";
import Icon from "react-native-vector-icons/Entypo";
import MeasureText from 'react-native-measure-text';
import { LogoSpinner } from "@components";

const { StatusBarManager } = NativeModules;
@withTheme
export default class HomeScreen extends PureComponent {
  
  constructor(props){
    super(props);
    this.state  = {
      reading:false,
      product: null,
      textHeight:30,
      loading:true,
      localLang:"",
    };
  }
  
  static navigationOptions = ({ navigation }) => {
    const dark = navigation.getParam("dark", false);
    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 10 : StatusBar.currentHeight;
    const headerStyle = navigation.getParam(
      "headerStyle",
      Styles.Common.toolbar()
    );


    return {
    header : () => {
      return (
        <View>
          {Platform.OS === 'ios' ? 
            <Text style={{marginBottom:10,fontFamily:Constants.fontFamily,}}></Text>
            :
            <Text style={{height:STATUSBAR_HEIGHT ,backgroundColor:dark ? '#222229' : 'white',fontFamily:Constants.fontFamily,}}></Text>
          }
        </View>
      );
    },
      headerTintColor: Color.headerTintColor,
      headerStyle,
      headerTitleStyle: Styles.Common.headerStyle,
    };
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };
  

  async UNSAFE_componentWillMount() {
    const {
      theme: {
        colors: { background },
        dark,
      },
    } = this.props;
    const localLang = await AsyncStorage.getItem('LocalLang');
    this.setState({
      localLang:localLang,
      loading:false,
    })
    this.props.navigation.setParams({
      headerStyle: Styles.Common.toolbar(background, dark),
      dark,
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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
  async fetchLatestHistoryBook(){
    
    const username = await AsyncStorage.getItem('username');
    const response = await fetch(Config.backendAPI+`/historyapi.php?username=${username}&latest=1&select`)
    const product = await response.json();
    if(product.length > 0){
      this.setState(
        {
          product: product[0],
          reading:true,
        }
      );
      this.props.product.setParams({product:product[0]})    
    }
  }
  

  async componentDidMount(){
    const { width, height } = Dimensions.get("window");

    const textWidth = width - 90;
    const fontSize = 15;
    const fontFamily = Constants.fontFamily;
    const fontWeight = 'bold';

    this.fetchLatestHistoryBook();
    const heights = await MeasureText.heights(
      this.state.product['titre'], /* texts to measure */
      textWidth, /* container width */
      fontSize,
      fontFamily);
    this.setState({textHeight : heights})
  }

  render() {
    const {
      theme: {
        colors: { background },
        dark,
      },
    } = this.props;
    const { width, height } = Dimensions.get("window");
    const { navigate } = this.props.navigation;
    const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
    
    const book = this.state.product;
    reactotron.log("XXXXXXXXXXX STATUSBAR ========>",StatusBar.currentHeight);
    const name = this.props.navigation.getParam("name");
    reactotron.log("PARAM IN HOME {}", name);

    if(this.state.loading){
      return ( 
        <View style={{backgroundColor:background, flexDirection:'row',alignItems:"center", flex:1,justifyContent:"center",alignContent:"center",height:'100%',width:'100%'}}>
          <View>
            <LogoSpinner/>
          </View>
        </View> 
      );
    }else{
      return (
        <View style={{height:Platform.OS == 'ios' ? height*0.9 : height*0.95,}}>
            <Home
              onShowAll={(config, index) =>
                navigate("ListAllScreen", { config, index })
              }
              showCategoriesScreen={() => navigate("CategoriesScreen")}
              onViewProductScreen={(item) => {
                this.props.navigation.tabBarVisible = false;
                navigate("DetailScreen", item);
                
              }}
            />
            {this.state.reading ?
               <View style={{
                  position:"absolute",
                  marginLeft:10,
                  width:width - 20,
                  bottom:height * 0.05,
                  height:this.state.textHeight+50,
                  backgroundColor:Color.background,
                  borderBottomEndRadius:5,
                  borderTopEndRadius:5,
                  borderTopStartRadius:5,
                  borderBottomStartRadius:5,
                  shadowColor: '#171717',
                  shadowOffset: {width: -2, height: 4},
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  }}>
               <View>
                <Image
                
                source={{uri:'http://'+this.state.product['image']}}
                style={{ 
                  ...StyleSheet.absoluteFillObject,
                  width:50,
                  height:70,
                  marginLeft:10,
                  marginTop:5,
                  resizeMode: "contain",
                  borderRadius: 6,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,}}
                >
  
                </Image>
                <View style={{width:width-75}}>
                  <Text numberOfLines={1} style={{marginTop:10,marginLeft:70,fontFamily:Constants.fontFamily,fontSize:15,fontWeight:'bold'}}>{this.state.product['titre']}</Text>
                </View>  
                <TouchableOpacity
                      onPress={()=>{
                        navigate("DetailScreen",{product:book});
                      }}
                  >
                    <Text style={{marginTop:8,marginLeft:70 ,fontSize:14,fontWeight:'bold',color:Color.primary}}>
                      {Languages[this.state.localLang].continueReading}
                    </Text>
                </TouchableOpacity>
                  {/* Change the continue reading cross styling */}
                <TouchableOpacity
                    activeOpacity={0.4}
                    style={{position:'absolute',width:60,height:this.state.textHeight+50,left:width-70,alignItems:'center',flexDirection:'row',justifyContent:"center",paddingRight:10}}
                    onPress={()=>{this.setState({reading:false,})}}
                >
                  <Text style={{fontSize:12,fontWeight:"400"}}>{Languages[this.state.localLang].Fermer}</Text>
                </TouchableOpacity>
              </View>
            </View>
            :null}
        </View>
  
      );
    }
  }
}
