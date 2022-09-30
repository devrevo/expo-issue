/** @format */
import {
  center
} from 'react-native';
import React from "react";
import { Color, Images, Config } from "@common";
import { TabBar, TabBarIcon, TabBarIconHome } from "@components";
import { Dimensions, I18nManager, View ,AsyncStorage} from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationActions,
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "./HomeScreen";
import NewsScreen from "./NewsScreen";
import NewsDetailScreen from "./NewsDetailScreen";
import CategoriesScreen from "./CategoriesScreen";
import CategoryScreen from "./CategoryScreen";
import DetailScreen from "./DetailScreen";
import CartScreen from "./CartScreen";
import MyOrdersScreen from "./MyOrdersScreen";
import OrderDetailScreen from "./OrderDetailScreen";
import WishListScreen from "./WishListScreen";
import SearchScreen from "./SearchScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import CustomPageScreen from "./CustomPageScreen";
import ListAllScreen from "./ListAllScreen";
import SettingScreen from "./SettingScreen";
import UserProfileScreen from "./UserProfileScreen";
import FiltersScreen from "./FiltersScreen";
import AddressScreen from "./AddressScreen";
import AddAddressScreen from "./AddAddressScreen";
import AuthLoadingScreen from "./AuthLoadingScreen";
import HistoryBooksScreen from "./HistoryBooksScreen";
import TransitionConfig from "./TransitionConfig";
import LanguageScreen from "./LanguageScreen";
import ItemsScreen from "./ItemsScreen";
import SearchItemsScreen from "./SearchItemsScreen";
import SearchCategoriesScreen from "./SearchCategoriesScreen";
import DetailOfflineScreen from "./DetailOfflineScreen";
import DownloadedBooksScreen from "./DownloadBooksScreen";
import AudioScreen from "./AudioScreen";
import HighlightLibraryScreen from "./HighlightLibraryScreen";
import SubHighlightLibraryScreen from "./SubHighlightLibraryScreen";
import InterestsScreen from './InterestsScreen';
import OnBoardingScreen from './OnBoardingScreen';
import TrialScreen from './TrialScreen';
import PaymentScreen from './PaymentScreen';
import TermsScreen from './TermsScreen';
import PrivacyScreen from './PrivacyScreen';
import ChooseLanguageScreen from './ChooseLanguageScreen';



const { width } = Dimensions.get("window");

const NewsStack = createStackNavigator(
  {
    News: { screen: NewsScreen },
    NewsDetailScreen: { screen: NewsDetailScreen },
    CustomPage: { screen: CustomPageScreen },
  },
  {
    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default",
    },
  }
);

const CategoryStack = createStackNavigator(
  {
    CategoriesScreen: { screen: CategoriesScreen },
    CategoryScreen: { screen: CategoryScreen },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: { tabBarVisible: false },
    },
    PaymentScreen: {screen: PaymentScreen},
    CustomPage: { screen: CustomPageScreen },
  },
  {
    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default",
    },
  }
);

const CategoryDetailStack = createStackNavigator(
  {
    CategoryScreen: { screen: CategoryScreen },
    DetailScreen: {
      screen: DetailScreen,
      navigationOptions: { tabBarVisible: false },
    },
    PaymentScreen: {screen: PaymentScreen},
    CustomPage: { screen: CustomPageScreen },
  },
  {
    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default",
    },
  }
);

const WishListStack = createStackNavigator(
  {
    WishListScreen: { screen: WishListScreen },
    Detail: { screen: DetailScreen },
    CustomPage: { screen: CustomPageScreen },
    TermsScreen:{ screen:TermsScreen},
    PrivacyScreen:{ screen:PrivacyScreen},
    PaymentScreen: {screen: PaymentScreen},
    DetailOffline: { screen: DetailOfflineScreen,
      navigationOptions: { tabBarVisible: false }
    },
    DownloadPage: {screen: DownloadedBooksScreen,},
    HighlightPage: {screen: HighlightLibraryScreen,},
    SubHighlightPage: {screen: SubHighlightLibraryScreen}
  },
  {
    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default",
    },
  }
);

const SearchStack = createStackNavigator(
  {
    Search: { screen: SearchScreen },
    DetailScreen: { screen: DetailScreen },
    FiltersScreen: { screen: FiltersScreen },
    CustomPage: { screen: CustomPageScreen },
    PaymentScreen: {screen: PaymentScreen},
    SearchItemsScreen :{  screen : SearchItemsScreen},
    SearchCategoriesScreen :{ screen : SearchCategoriesScreen},
    TermsScreen:{ screen:TermsScreen,
      navigationOptions: {
        tabBarVisible:false,
        header:null,
        title:"TermsScreen",
      } 
    },
    PrivacyScreen:{ screen:PrivacyScreen, 
      navigationOptions: {
        tabBarVisible:false,
        header:null,
        title:"PrivacyScreen",
      } 
    },

  },
  {
    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default",
    },
  }
);

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    HistoryPage: {screen: HistoryBooksScreen,
      navigationOptions: { tabBarVisible: false }
    },
    ListAllScreen: { screen: ListAllScreen },
    ItemsScreen :{  screen : ItemsScreen},
    DetailScreen: { screen: DetailScreen },
    PaymentScreen: {screen: PaymentScreen},
    CustomPage: { screen: CustomPageScreen },
    TermsScreen:{ screen:TermsScreen,
      navigationOptions: {
        tabBarVisible:false,
        title:"TermsScreen",
      } 
    },
    PrivacyScreen:{ screen:PrivacyScreen, 
      navigationOptions: {
        tabBarVisible:false,
        title:"PrivacyScreen",
      } 
    },
    AudioScreen: {
      screen: AudioScreen,
      navigationOptions: { tabBarVisible: false },
    }, 
    InterestsScreen: {
      screen:InterestsScreen,
      navigationOptions: {
        tabBarVisible:false,
        header:null,
        title:"InterestsScreen",
      } 
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: (navigation) => {
      return {
        gestureResponseDistance: { horizontal: width / 2 },
        gesturesEnabled: true,
        gestureDirection: I18nManager.isRTL ? "inverted" : "default",
      }
    },
  }
);

const CartScreenStack = createStackNavigator(
  {
    Cart: { screen: CartScreen },
    Detail: { screen: DetailScreen },
    CustomPage: { screen: CustomPageScreen },
    PaymentScreen: {screen: PaymentScreen},
    TermsScreen:{ screen:TermsScreen},
    PrivacyScreen:{ screen:PrivacyScreen},
  },
  {
    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default",
    },
  }
);



const UserProfileStack = createStackNavigator(
  {
    UserProfile: { screen: UserProfileScreen },
    Address: { screen: AddressScreen },
    AddAddress: { screen: AddAddressScreen },
    SettingScreen: { screen: SettingScreen },
    LanguageScreen: {screen: LanguageScreen},
    CustomPage: { screen: CustomPageScreen },
    PaymentScreen: {screen: PaymentScreen},
    TermsScreen:{ screen:TermsScreen,
      navigationOptions: {
        tabBarVisible:false,
        title:"TermsScreen",
      } 
    },
    PrivacyScreen:{ screen:PrivacyScreen, 
      navigationOptions: {
        tabBarVisible:false,
        title:"PrivacyScreen",
      } 
    },
  },
  {
    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default",
    },
  }
);

const BoardingStack = createStackNavigator(
  {
    ChooseLanguageScreen:{
      screen:ChooseLanguageScreen,
      navigationOptions:{
        header:null,
        tabBarVisible:false,
        title:"ChooseLanguageScreen",
      }
    },
    OnBoardingScreen: { 
      screen: OnBoardingScreen ,
      navigationOptions:{
        header:null,
        tabBarVisible:false,
      }
    },
    SignUpScreen:{
      screen:SignUpScreen,
      navigationOptions:{
        header:null,
        tabBarVisible:false,
      }
    },
    TrialScreen:{
      screen:TrialScreen,
      navigationOptions:{
        header:null,
        tabBarVisible:false,
      }
    },
    InterestsScreen: {
      screen:InterestsScreen,
      navigationOptions: {
        tabBarVisible:false,
        header:null,
        title:"InterestsScreen",
      } 
    },
    LoginScreen: {
      screen:LoginScreen,
      navigationOptions: {
        tabBarVisible:false,
        header:null,
      } 
    },
    
  },
  {
    mode: "modal",
    header: null,
    tabBarVisible: false,
    transitionConfig: () => TransitionConfig,
  }
);

const LoginStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    
  },
  {
    InterestsScreen: {
      screen:InterestsScreen,
      navigationOptions: {
        tabBarComponent: null,
        tabBarVisible:false,
        header:null,
        title:"InterestsScreen",
      } 
    },
  },
  {
    mode: "modal",
    header: null,
    tabBarVisible: false,
    transitionConfig: () => TransitionConfig,
  }
);

const MyOrderStack = createStackNavigator({
  MyOrdersScreen: { screen: MyOrdersScreen },
  OrderDetailScreen: { screen: OrderDetailScreen },
});

const AppNavigator = createBottomTabNavigator(
  {
    Default: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          return (
            <TabBarIcon 
              onPress={() => {
                navigation.navigate('Home');
              }} 
              icon={Images.IconHome} 
              tintColor={tintColor} 
              screen={'HomeScreen'}/>
          )
          
        }
      }),
    },
    
    CategoriesScreen: {
      screen: CategoryStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={{alignItems:'center', justifyContent:'center'}}>  
            <TabBarIcon
              wishlistIcon
              css={{ width: 18, height: 18 }}
              icon={Images.IconCategory}
              tintColor={tintColor}
              screen={'CategoryScreen'}
            />
          </View>
        ),
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <TabBarIcon
            css={{ width: 18, height: 18 }}
            icon={Images.IconSearch}
            tintColor={tintColor}
            screen={'SearchScreen'}
          />
        ),
      },
    },
    ...(Config.Affiliate.enable
      ? {}
      : {
          CartScreen: {
            screen: WishListStack,
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <TabBarIcon
                  cartIcon
                  css={{ width: 18, height: 18 }}
                  icon={Images.IconCart}
                  tintColor={tintColor}
                  screen={'WishScreen'}
                  />
              ),
            },
          },
        }),
    WishListScreen: {
      screen: WishListStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <TabBarIcon
            wishlistIcon
            css={{ width: 18, height: 18 }}
            icon={Images.IconCart}
            tintColor={tintColor}
          />
        ),
      },
    },
    UserProfileScreen: {
      screen: UserProfileStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <TabBarIcon
            wishlistIcon
            css={{ width: 18, height: 18 }}
            icon={Images.IconUser}
            tintColor={tintColor}
            screen={'ProfileScreen'}
          />
        ),
      },
    },
    ...(Config.Affiliate.enable
      ? {}
      : {
          MyOrders: {
            screen: MyOrderStack,
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <TabBarIcon
                  orderIcon
                  css={{ width: 18, height: 18 }}
                  icon={Images.IconOrder}
                  tintColor={tintColor}
                />
              ),
            },
          },
        }),
    NewsScreen: { screen: NewsStack },
    LoginStack: { screen: LoginStack },
    LanguageScreen: {screen: LanguageScreen},
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        tabBarVisible: false,
        gestureDirection: I18nManager.isRTL ? "inverted" : "default",
      },
    },
    CategoryDetail: { screen: CategoryDetailStack },
    
    
  },
  {
    // initialRouteName: 'CategoriesScreen',
    tabBarComponent: TabBar,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: Color.tabbarTint,
      inactiveTintColor: Color.tabbarColor,
    },
    lazy: true,
    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default",
    },
  }
);

const AuthNavigator = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    InterestsScreen: {
      screen:InterestsScreen,
      navigationOptions: {
        tabBarVisible: false,
        header: null,
      },
    },
  },
  {
    mode: "modal",
    header: null,
    tabBarVisible: false,
    transitionConfig: () => TransitionConfig,
  }
);


export default 
  createAppContainer(
  Config.Login.RequiredLogin
    ? createSwitchNavigator(
        {
          AuthLoading: AuthLoadingScreen,
          App: AppNavigator,
          Auth: AuthNavigator,
        },
        {
          initialRouteName: "AuthLoading",
        }
      )
      : 
      createSwitchNavigator(
        {
          Login:BoardingStack,
          Home:AppNavigator,
        },
      )
    );
  

/**
 * prevent duplicate screen
 */
const navigateOnce = (getStateForAction) => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
};

/**
 * Add AppNavigator to navigateOnce bug naivgate drawer category
 */
NewsStack.router.getStateForAction = navigateOnce(
  NewsStack.router.getStateForAction
);
CategoryStack.router.getStateForAction = navigateOnce(
  CategoryStack.router.getStateForAction
);
CategoryDetailStack.router.getStateForAction = navigateOnce(
  CategoryDetailStack.router.getStateForAction
);
WishListStack.router.getStateForAction = navigateOnce(
  WishListStack.router.getStateForAction
);
HomeStack.router.getStateForAction = navigateOnce(
  HomeStack.router.getStateForAction
);
SearchStack.router.getStateForAction = navigateOnce(
  SearchStack.router.getStateForAction
);
CartScreenStack.router.getStateForAction = navigateOnce(
  CartScreenStack.router.getStateForAction
);

