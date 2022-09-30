/** @format */

import Images from "./Images";
import Constants from "./Constants";
import Icons from "./Icons";

const consumerKey = "ck_3ab42f7a03397f406a55e383780c1210760f1f60";
const consumerSecret = "cs_09991d337577a9d3403ad0a34eaa7c10458fc79f";

export default {
  /**
   * Step 1: change to your website URL and the wooCommerce API consumeKey
   */
  WooCommerce: {
    url: "http://159.65.230.227/index.php/",
    consumerKey,
    consumerSecret,
  },

  backendAPI:"http://backend.iferu.com",
  synthesiaAPI:"http://backend.synthesia.com",
  audioAPI: "http://audio.iferu.com",
  LogoURLDARK: require("@images/iferuDark.png"),
  LogoURLWhite: require("@images/logo.png"),
  LogoPrimaryColor: require("@images/logoGreen.png"),
  LogowithTextURLDARK: require("@images/logo_with_text_whiteMode.png"),
  LogowithTextURLWHITE: require("@images/logo_with_text.png"),
  /**
     Step 2: Setting Product Images
     - ProductSize: Explode the guide from: update the product display size: https://mstore.gitbooks.io/mstore-manual/content/chapter5.html
     The default config for ProductSize is disable due to some problem config for most of users.
     If you have success config it from the Wordpress site, please enable to speed up the app performance
     - HorizonLayout: Change the HomePage horizontal layout - https://mstore.gitbooks.io/mstore-manual/content/chapter6.html
       Update Oct 06 2018: add new type of categories
       NOTE: name is define value --> change field in Language.js
       Moved to AppConfig.json
     */
  ProductSize: {
    enable: false,
  },

  HomeCategories: [
    
  ],
  /**
     step 3: Config image for the Payment Gateway
     Notes:
     - Only the image list here will be shown on the app but it should match with the key id from the WooCommerce Website config
     - It's flexible way to control list of your payment as well
     Ex. if you would like to show only cod then just put one cod image in the list
     * */
  Payments: {
    cod: require("@images/payment_logo/cash_on_delivery.png"),
    paypal: require("@images/payment_logo/PayPal.png"),
    stripe: require("@images/payment_logo/stripe.png"),
  },

  /**
     Step 4: Advance config:
     - showShipping: option to show the list of shipping method
     - showStatusBar: option to show the status bar, it always show iPhoneX
     - LogoImage: The header logo
     - LogoWithText: The Logo use for sign up form
     - LogoLoading: The loading icon logo
     - appFacebookId: The app facebook ID, use for Facebook login
     - CustomPages: Update the custom page which can be shown from the left side bar (Components/Drawer/index.js)
     - WebPages: This could be the id of your blog post or the full URL which point to any Webpage (responsive mobile is required on the web page)
     - intro: The on boarding intro slider for your app
     - menu: config for left menu side items (isMultiChild: This is new feature from 3.4.5 that show the sub products categories)
     * */
  shipping: {
    visible: false,
    zoneId: 1, // depend on your woocommerce
    time: {
      free_shipping: "4 - 7 Days",
      flat_rate: "1 - 4 Days",
      local_pickup: "1 - 4 Days",
    },
  },
  showStatusBar: true,
  LogoImageWhite: require("@images/logo-main.png"),
  LogoImageDark: require("@images/iferuDark.png"),

  LogoWithText: require("@images/logo_with_text.png"),
  LogoLoading: require("@images/logo.png"),

  showAdmobAds: false,
  AdMob: {
    deviceID: "pub-2101182411274198",
    rewarded: "ca-app-pub-2101182411274198/5096259336",
    interstitial: "ca-app-pub-2101182411274198/8930161243",
    banner: "ca-app-pub-2101182411274198/4100506392",
  },
  appFacebookId: "501847534057136",
  CustomPages: { contact_id: 10941 },
  WebPages: { marketing: "http://inspireui.com" },

  intro: [
    {
      key: "page1",
      title: "Welcome to our Booke store!",
      text: "Get the latest books and have a good read.",
      icon: "ios-basket",
      colors: ["#0FF0B3", "#036ED9"],
    },
    {
      key: "page2",
      title: "Secure Payment",
      text: "All your payment infomation is top safety and protected",
      icon: "ios-card",
      colors: ["#13f1fc", "#0470dc"],
    },
   
  ],

  /**
   * Config For Left Menu Side Drawer
   * @param goToScreen 3 Params (routeName, params, isReset = false)
   * BUG: Language can not change when set default value in Config.js ==> pass string to change Languages
   */
  menu: {
    // has child categories
    isMultiChild: true,
    // Unlogged
    listMenuUnlogged: [
      {
        text: "Login",
        routeName: "LoginScreen",
        params: {
          isLogout: false,
        },
        icon: Icons.MaterialCommunityIcons.SignIn,
        iconName:"login",
        color:"#3366ff",
      },
    ],
    listMenuUnloggedFr: [
      {
        text: "LoginFr",
        routeName: "LoginScreen",
        params: {
          isLogout: false,
        },
        icon: Icons.MaterialCommunityIcons.SignIn,
        iconName:"login",
        color:"#3366ff",
      },
    ],
    // user logged in
    listMenuLogged: [
      {
        text: "Logout",
        routeName: "LoginScreen",
        params: {
          isLogout: true,
        },
        icon: Icons.MaterialCommunityIcons.SignOut,
        iconName:"login",
        color:"#ff0000",
      },
      {
        text: "DeleteAccount",
        params: {
          isLogout: true,
        },
        icon: Icons.MaterialCommunityIcons.SMS,
        iconName:"account-off",
        color:"red",
      },
    ],
    listMenuLoggedFr: [
      {
        text: "LogoutFr",
        routeName: "LoginScreen",
        params: {
          isLogout: true,
        },
        icon: Icons.MaterialCommunityIcons.SignOut,
        iconName:"login",
        color:"#ff0000",
      },
      {
        text: "DeleteFr",
        params: {
          isLogout: true,
        },
        icon: Icons.MaterialCommunityIcons.SMS,
        iconName:"account-off",
        color:"red",
      },
    ],
    
    // Default List
    listMenu: [
      {
        text: "Shop",
        routeName: "Home",
        icon: Icons.MaterialCommunityIcons.Home,
        iconName: "shop",
      },
      {
        text: "contactus",
        routeName: "CustomPage",
        params: {
          id: 10941,
          title: "contactus",
        },
        icon: Icons.MaterialCommunityIcons.Pin,
        iconName:"email-outline",
      },
      {
        text: "RateApp",
        routeName: "CustomPage",
        params: {
          id: 10941,
          title: "contactus",
        },
        icon: Icons.MaterialCommunityIcons.Email,
        iconName:"star",
      },
    ],
    listMenuFr: [
      {
        text: "ShopFr",
        routeName: "Home",
        icon: Icons.MaterialCommunityIcons.Home,
        iconName: "shop",
      },
      {
        text: "contactusFr",
        routeName: "CustomPage",
        params: {
          id: 10941,
          title: "contactus",
        },
        icon: Icons.MaterialCommunityIcons.Pin,
        iconName:"email-outline",
      },
      {
        text: "RateIferuFr",
        routeName: "CustomPage",
        params: {
          id: 10941,
          title: "contactus",
        },
        icon: Icons.MaterialCommunityIcons.Email,
        iconName:"star",
      },
    ],
  },

  // define menu for profile tab
  ProfileSettings: [
    // {
    //   label: "WishList",
    //   routeName: "WishListScreen",
    // },
    {
      label: "MyOrder",
      routeName: "MyOrders",
    },
    {
      label: "Address",
      routeName: "Address",
    },
    // {
    //   label: "Currency",
    //   isActionSheet: true,
    // },
    // only support mstore pro
     {
       label: "Settings",
       routeName: "SettingScreen",
     }, 
    // cacher Settings par commentaire dans le code
    {
      label: "Languages",
      routeName: "LanguageScreen",
    },
    
    {
      label: "PushNotification",
    },
    {
      label: "DarkTheme",
    },
    {
      label: "Highlight",
    },

    // {
    //   label: "contactus",
    //   routeName: "CustomPage",
    //   params: {
    //     id: 10941,
    //     title: "http://iferu.com/en/en-index.php",
    //   },
    // }, 
    // cacher contact us 
    {
      label: "Privacy",
      routeName: "PrivacyScreen",
      params: {
        url: "http://backend.iferu.com/page-gateway.php?privacy",
      },
    },
    {
      label: "termCondition",
      routeName: "TermsScreen",
      params: {
        url: "http://backend.iferu.com/page-gateway.php?terms",
      },
    },
    //  {
    //    label: "RateIferu",
    //    routeName: "CustomPage",
    //    params: {
    //      url: "http://inspireui.com",
    //    },
    //  }, 
    //cahcer about us 
  ],

  PROFILE: [
    // {
    //   label: "WishList",
    //   routeName: "WishListScreen",
    // },
    {
      label: "MyOrder",
      routeName: "MyOrders",
    },
    {
      label: "Address",
      routeName: "Address",
    },
    // {
    //   label: "Currency",
    //   isActionSheet: true,
    // },
    // only support mstore pro
     {
       label: "Parametres",
       routeName: "SettingScreen",
     }, 
    // cacher Settings par commentaire dans le code
    {
      label: "Languages",
      routeName: "LanguageScreen",
    },
    
    {
      label: "NotificationsPush",
    },
    {
      label: "Highlight",
    },
    {
      label: "ModeSombre",
    },

    // {
    //   label: "contactus",
    //   routeName: "CustomPage",
    //   params: {
    //     id: 10941,
    //     title: "http://iferu.com/en/en-index.php",
    //   },
    // }, 
    // cacher contact us 
    {
      label: "Privacy",
      routeName: "PrivacyScreen",
      params: {
        url: "http://iferu.com/en/en-privacy-policy-single.php",
      },
    },
   
    {
      label: "termCondition",
      routeName: "TermsScreen",
      params: {
        url: "http://iferu.com/en/en-terms-of-use.php",
      },
    },
    //  {
    //    label: "RateIferu",
    //    routeName: "CustomPage",
    //    params: {
    //      url: "http://inspireui.com",
    //    },
    //  }, 
    //cahcer about us 
  ],
  // Homepage Layout setting
  layouts: [
    {
      layout: Constants.Layout.card,
      image: Images.icons.iconCard,
      text: "cardView",
    },
    {
      layout: Constants.Layout.simple,
      image: Images.icons.iconRight,
      text: "simpleView",
    },
    {
      layout: Constants.Layout.twoColumn,
      image: Images.icons.iconColumn,
      text: "twoColumnView",
    },
    {
      layout: Constants.Layout.threeColumn,
      image: Images.icons.iconThree,
      text: "threeColumnView",
    },
    {
      layout: Constants.Layout.horizon,
      image: Images.icons.iconHorizal,
      text: "horizontal",
    },
    {
      layout: Constants.Layout.advance,
      image: Images.icons.iconAdvance,
      text: "advanceView",
    },
  ],

  // Default theme loading, this could able to change from the user profile (reserve feature)
   Theme: {
     isDark: false,
   },

  // new list category design
  CategoriesLayout: Constants.CategoriesLayout.card,

  // WARNING: Currently when you change DefaultCurrency, please uninstall your app and reinstall again. The redux saved store.
  DefaultCurrency: {
    symbol: "$",
    name: "US Dollar",
    code: "USD",
    name_plural: "US dollars",
    decimal: ".",
    thousand: ",",
    precision: 2,
    format: "%s%v", // %s is the symbol and %v is the value
  },

  DefaultCountry: {
    code: "en",
    RTL: false,
    language: "English",
    countryCode: "US",
    hideCountryList: false, // when this option is try we will hide the country list from the checkout page, default select by the above 'countryCode'
  },

  /**
   * Config notification onesignal, only effect for the Pro version
   */
  OneSignal: {
    appId: "43948a3d-da03-4e1a-aaf4-cb38f0d9ca51",
  },
  /**
   * Login required
   */
  Login: {
    RequiredLogin: false, // required before using the app
    AnonymousCheckout: false, // required before checkout or checkout anonymous
  },

  Layout: {
    HideHomeLogo: false,
    HideLayoutModal: false,
  },

  Affiliate: { enable: false },

  EnableOnePageCheckout: false,

  NativeOnePageCheckout: true,

  // using url from server to load AppConfig.json
  HomeCaching: {
    url: `http://159.65.230.227/index.php/cache?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`, // can change url to load another server
    enable: false, // disable load from server, and start load in local in `common/AppConfig.json`
  },
};
