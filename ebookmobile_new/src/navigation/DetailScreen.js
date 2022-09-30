/** @format */
 
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View,Image,Switch,Text,Button ,PanResponder,TouchableOpacity, Pressable} from "react-native";
import Modal from 'react-native-modal';
import { TabBarIcon } from "@components";
import { Color, Styles, withTheme } from "@common";
import { SafeAreaView } from "@components";
import { Detail } from "@containers";
import { Logo, Back, CartWishListIcons, ZoomInAndOut } from "./IconNav";
import { Modal as ModaliPhone,ModalFooter,ModalButton, ModalContent } from 'react-native-modals';
import Slider from '@react-native-community/slider';
 
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
      headerRight: () => {
      return (
          <View style= {{flexDirection:'row', justifyContent:'space-between'}}>
 
              {/*
              <Switch 
                style={{marginRight:20,  marginLeft: 10}}
                  trackColor={{ false: "#C0C0C0", true: "#3FC1BE" }}
                  //thumbColor={this.state.download ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={navigation.getParam('_onToggleDarkTheme')}
                  value={navigation.getParam('stateSwitch') ? true : false}
                />
                */
            }
              {Platform.OS === 'ios' ?
              <ModaliPhone
              visible={navigation.getParam('isModalVisible')}
              swipeDirection={['up', 'down','right','left']} // can be string or an array
              swipeThreshold={200} // default 100
              modalStyle={{marginBottom:370}}
              footer={
                <ModalFooter>
                  <ModalButton
                    text="Fermer"
                    onPress={navigation.getParam('onCloseModal')}
 
                  />
                  </ModalFooter>
                  }
              onSwipeOut={navigation.getParam('onCloseModal')}
 
            >
              <ModalContent>
                  <Text style={{alignContent:'center',alignSelf:'center',fontWeight:'bold'}}> {Math.floor(navigation.getParam('SlidingNumberFromDetail'))}</Text>
                  <Slider
                  style={{width: 300, height: 40, alignSelf:'center'}}
                  minimumValue={10}
                  maximumValue={30}
                  minimumTrackTintColor="#00FF00"
                  maximumTrackTintColor="#000000"
                  value= {navigation.getParam('SlidingNumberFromDetail')}
                  onSlidingComplete={(e) => {
                      navigation.setParams({SlidingNumber: e})
                    }
                  }
                  //onValueChange={(e) => reactotron.log('dark ===>',dark)}
                />
                    <View style={{flexDirection:'row', alignSelf:'center', padding:10, left:20}}>
 
                      <View style={{flexDirection:'column'}}>
 
                  <TouchableOpacity
                    style={{
                        borderWidth:1,
                       // borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:60,
                        height:60,
                        borderColor: 'grey',
                        backgroundColor:'#000000',
                        borderRadius:50,
                        justifyContent:'space-between',
                        marginRight:50 
 
                      }}
 
                      onPress={navigation.getParam('_onToggleDarkTheme')}
                      disabled={dark ? true: false}
                  > 
 
                  {dark ? 
                  <Image style={{width: "50%",height: "50%",alignSelf:'center',top:13}} source={require("@images/icons/checkedwhite.png")}/>
 
                  :
                  null}
 
                  </TouchableOpacity>
                  <Text style={{ paddingTop: 20, fontWeight: dark ? 'bold': '300',right:20}}> Dark mode</Text>
 
                  </View>
 
                  <View style={{flexDirection:'column'}}>
                  <TouchableOpacity
                    style={{
                        borderWidth:1,
                        //borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:60,
                        height:60,
                        borderColor:'grey' ,
                        backgroundColor:'#fff',
                        borderRadius:50,
                        justifyContent:'space-between',
                        //position:'absolute'
 
                      }}
 
                      onPress={navigation.getParam('_onToggleDarkTheme')}
                      disabled={!dark ? true: false}
                  >
 
 
                    {dark ? null : <Image style={{width: "50%",height: "50%",alignSelf:'center',top:13}} source={require("@images/icons/checkmark.png")}/>}
 
 
                  </TouchableOpacity>
                  <Text style={{ paddingTop: 20,fontWeight: dark ? '300': 'bold',right:20}}> Normal mode</Text>
 
                  </View>
 
 
 
                  </View>
              </ModalContent>
  </ModaliPhone>
  : 
 
  <View style={{ flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22}}>
 
        <Modal
          animationType="none"
          transparent={true}
          //swipeDirection={['up', 'down','right','left']} // can be string or an array
          //swipeThreshold={100}
          //onSwipeComplete={navigation.getParam('onCloseModal')}
          visible={navigation.getParam('isModalVisible')}
        >
          <View style={{ flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  }}>
            <View style={{margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:300,
    height:260,
    bottom:'35.5%',
  }}>
 
<Text style={{alignContent:'center',alignSelf:'center',fontWeight:'bold'}}> {Math.floor(navigation.getParam('SlidingNumberFromDetail'))}</Text>
                  <Slider
                  style={{width: 300, height: 40, alignSelf:'center'}}
                  minimumValue={10}
                  maximumValue={40}
                  minimumTrackTintColor="#00FF00"
                  maximumTrackTintColor="#000000"
                  value= {navigation.getParam('SlidingNumberFromDetail')}
                  onSlidingComplete={(e) => navigation.setParams({SlidingNumber: e})}
                  //onValueChange={(e) => reactotron.log('dark ===>',dark)}
                />
                    <View style={{flexDirection:'row', alignSelf:'center', padding:10, left:20}}>
 
                      <View style={{flexDirection:'column'}}>
 
                  <TouchableOpacity
                    style={{
                        borderWidth:1,
                       // borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:60,
                        height:60,
                        borderColor: 'grey',
                        backgroundColor:'#000000',
                        borderRadius:50,
                        justifyContent:'space-between',
                        marginRight:50 
 
                      }}
 
                      onPress={navigation.getParam('_onToggleDarkTheme')}
                      disabled={dark ? true: false}
                  > 
 
                  {dark ? 
                  <Image style={{width: "50%",height: "50%",alignSelf:'center',top:13}} source={require("@images/icons/checkedwhite.png")}/>
 
                  :
                  null}
 
                  </TouchableOpacity>
                  <Text style={{ paddingTop: 20, fontWeight: dark ? 'bold': '300',right:20}}> Dark mode</Text>
 
                  </View>
 
                  <View style={{flexDirection:'column'}}>
                  <TouchableOpacity
                    style={{
                        borderWidth:1,
                        //borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:60,
                        height:60,
                        borderColor:'grey' ,
                        backgroundColor:'#fff',
                        borderRadius:50,
                        justifyContent:'space-between',
                        //position:'absolute'
 
                      }}
 
                      onPress={navigation.getParam('_onToggleDarkTheme')}
                      disabled={!dark ? true: false}
                  >
 
 
                    {dark ? null : <Image style={{width: "50%",height: "50%",alignSelf:'center',top:13}} source={require("@images/icons/checkmark.png")}/>}
 
 
                  </TouchableOpacity>
                  <Text style={{ paddingTop: 20,fontWeight: dark ? '300': 'bold',right:20}}> Normal mode</Text>
 
                  </View>
 
 
 
                  </View>
 
 
 
                  <TouchableOpacity 
                   onPress={navigation.getParam('onCloseModal')}>
                      <Text style={{color:"#5C5CFF",fontWeight:'600', marginTop:'5%'}}>Fermer</Text>
                  </TouchableOpacity>
 
 
            </View>
          </View>
        </Modal>
      </View>
 
  }
                   <TouchableOpacity
                   onPress={navigation.getParam('onCloseModal')}
                   hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
                   >
 
                    <Text style={{
                          fontSize: 14,
                          color: dark ? 'white' : 'black',
                          fontFamily: 'Georgia',
                          fontWeight:'bold',
                          marginRight:15
                          }}>
                          Aa
                            </Text>
 
                            </TouchableOpacity>
 
       </View>
      );
      }
 
      ,
 
 
 
      //headerTintColor: 'red',
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
            <Detail
              product={state.params.product}
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