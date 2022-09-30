/** @format */

import React from "react";
import { View } from "react-native";

import { Font } from "@expo";
import { Provider } from "react-redux";
import storage from "redux-persist/es/storage";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import { ModalPortal } from 'react-native-modals';
import {AsyncStorage } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Platform} from 'react-native';

import { connect } from "react-redux";
import reactotron from "reactotron-react-native";
import store from "@store/configureStore";
import RootRouter from "./src/Router";
import "./ReactotronConfig";
import { useSelector, useDispatch } from 'react-redux';
function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      darkMode: [],
    };
  }
  loadAssets = async () => {
    const fontAssets = cacheFonts([
      { OpenSans: require("@assets/fonts/OpenSans-Regular.ttf") },
      { Georgia: require("@assets/fonts/Georgia.ttf") },
      { Comfortaa: require("@assets/fonts/Comfortaa-VariableFont_wght.ttf") },
      { Roboto: require("@assets/fonts/Roboto-Light.ttf") },
      { Baloo: require("@assets/fonts/Baloo-Regular.ttf") },

      { Entypo: require("@expo/vector-icons/fonts/Entypo.ttf") },
      {
        "Material Icons": require("@expo/vector-icons/fonts/MaterialIcons.ttf"),
      },
      {
        MaterialCommunityIcons: require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
      },
      {
        "Material Design Icons": require("@expo/vector-icons/fonts/MaterialCommunityIcons.ttf"),
      },
      { FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf") },
      {
        "simple-line-icons": require("@expo/vector-icons/fonts/SimpleLineIcons.ttf"),
      },
      { Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf") },
    ]);

    // const imageAssets = cacheImages([
    //   Images.icons.iconCard,
    //   Images.icons.iconColumn,
    //   Images.icons.iconLeft,
    //   Images.icons.iconRight,
    //   Images.icons.iconThree,
    //   Images.icons.iconAdvance,
    //   Images.icons.iconHorizal,
    //   Images.icons.back,
    //   Images.icons.home,
    //   Images.IconSwitch,
    //   Images.IconFilter,
    //   Images.IconList,
    //   Images.IconGrid,
    //   Images.IconCard,
    //   Images.IconSearch,
    //   Images.IconHome,
    //   Images.IconCategory,
    //   Images.IconHeart,
    //   Images.IconOrder,
    //   Images.IconCart,
    // ]);
  
    await Promise.all([...fontAssets]);
  };

  async componentDidMount()  {
    const darkModeState= await AsyncStorage.getItem('state');
    let darModeStateArr = JSON.parse(darkModeState)
    reactotron.log("darModeStateArr ==>",darModeStateArr);
    this.setState({
      darkMode:darModeStateArr.isDarkTheme
    })
    this.loadAssets();
  }
  

  async shouldComponentUpdate(nextProps, nextState){
    const darkModeState= await AsyncStorage.getItem('state');

    let darModeStateArr = JSON.parse(darkModeState)

    if (this.state.darkMode !== darModeStateArr.isDarkTheme){
      this.setState({
        darkMode:darModeStateArr.isDarkTheme
      })
      return true;
    }
    return false;
  }

  async componentDidUpdate(){
    const darkModeState= await AsyncStorage.getItem('state');

    let darModeStateArr = JSON.parse(darkModeState)

    if (this.state.darkMode !== darModeStateArr.isDarkTheme){
      this.setState({
        darkMode:darModeStateArr.isDarkTheme
      })  }


      reactotron.log() 
    }
  
  render() {
    
    const aaa = AsyncStorage.getItem('state');
    const persistor = persistStore(store);

    return (
      <Provider store={store}>
        <StatusBar
         animated={true}
         style="dark"
         translucent ={true}
          />
        <PersistGate loading={null} persistor={persistor}>
          <RootRouter />
        </PersistGate>
        <ModalPortal />
      </Provider>
    );
  }
}


