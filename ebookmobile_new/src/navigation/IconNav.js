/** @format */

import React from "react";
import {
  View,
  Platform,
  Image,
  Button,
  TouchableOpacity,
  I18nManager,
  Animated,
  Text,
  AsyncStorage,
  StatusBar
} from "react-native";
import { isEmpty } from "lodash";
import { Styles, Events, Images, Config } from "@common";
import { NavigationBarIcon, CartIcons } from "@components";
import { toggleDrawer } from "@app/Omni";
import { TouchableHighlight } from "react-native-gesture-handler";
import reactotron from "reactotron-react-native";

const NavBarLogo = (props) => {

  const scrollAnimation =
    props && !isEmpty(props.navigation)
      ? props.navigation.getParam("animatedHeader")
      : new Animated.Value(1);

  return (
    <Animated.Image
      source={Config.LogoImage}
      style={[Styles.Common.logo, { opacity: scrollAnimation }]}
    />
  );
};

const NavBarText = (props) => {
  const scrollAnimation =
    props && !isEmpty(props.navigation)
      ? props.navigation.getParam("animatedHeader")
      : new Animated.Value(1);

  return (
    <Animated.Text
      style={[Styles.Common.headerText, { opacity: scrollAnimation }]}>
      {props.text}
    </Animated.Text>
  );
};

// Icons for HeaderBar
const Logo = () => (
  <Image source={Config.LogoImage} style={Styles.Common.logo} />
);

const hitSlop = { top: 20, right: 20, bottom: 0, left: 20 };
const Menu = (dark) => (
  <TouchableOpacity hitSlop={hitSlop} onPress={toggleDrawer}>
    <Image
      source={Images.icons.home}
      style={[
        Styles.Common.toolbarIcon,
        dark && { tintColor: "#fff" },
        I18nManager.isRTL && {
          transform: [{ rotate: "180deg" }],
        },
      ]}
    />
  </TouchableOpacity>
);

const EmptyView = () => (
  <View
    style={[
      Styles.Common.Row,
      I18nManager.isRTL ? { left: -10 } : { right: -5 },
      Platform.OS !== "ios" && { right: -12 },
    ]}
  />
);

const HeaderRight = (navigation) => (
  <View
    style={[
      Styles.Common.Row,
      I18nManager.isRTL ? { left: -10 } : { right: -5 },
      Platform.OS !== "ios" && { right: -12 },
    ]}>
    <NavigationBarIcon
      icon={Images.IconSearch}
      size={17}
      onPress={() => navigation.navigate("Search")}
    />
  </View>
);

const HeaderHomeRight = (navigation, item) => (
  <View style={[Styles.Common.Row, Platform.OS !== "ios" && { right: -12 }]}>
    {!Config.Layout.HideLayoutModal && <NavigationBarIcon
      icon={Images.IconGrid}
      size={17}
      onPress={Events.openModalLayout}
    />}
  </View>
);

const CartWishListIcons = (navigation) => <CartIcons navigation={navigation} />;

const Back = (navigation, iconBack, dark) => (
  <TouchableOpacity
    style={Styles.Common.viewBack}
    hitSlop={hitSlop}
    onPress={() => {
      navigation.goBack(null);
    }}>
    <Image
      source={iconBack || Images.icons.back}
      style={[
        Styles.Common.toolbarIconBack,
        iconBack && Styles.Common.iconBack,
        {tintColor:'#191919'},
        dark && { tintColor: "#fff" },
        I18nManager.isRTL && {
          transform: [{ rotate: "180deg" }],
        },
      ]}
    />
  </TouchableOpacity>
);

const RightTitle = (dark,name) => {
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight + 25;

  return (
    <View style={{ height: STATUSBAR_HEIGHT}}>
      <Text style={{textAlign: 'center',color:dark?'white':'black',padding:10,fontSize:25, fontWeight:"bold"}}>
      {name}
      </Text>
    </View>
  );
};

const RightIcon = (icon, onPress, dark) => (
  <View style={[Styles.Common.Row]}>
    <NavigationBarIcon icon={icon} size={24} onPress={onPress} />
  </View>
);


const Title = (title, textColor) => (
  <View>
    <Text style={[Styles.Common.headerTitleStyle, { color: textColor }]}>
      {title}
    </Text>
  </View>
);

export {
  Logo,
  Menu,
  HeaderRight,
  EmptyView,
  CartWishListIcons,
  HeaderHomeRight,
  Back,
  NavBarLogo,
  RightIcon,
  NavBarText,
  Title,
  RightTitle
};
