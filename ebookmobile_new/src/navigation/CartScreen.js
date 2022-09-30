/** @format */

import React, { PureComponent } from "react";

import { Cart } from "@containers";
import reactotron from "reactotron-react-native";

export default class CartScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  render() {
    const { navigate } = this.props.navigation;
    reactotron.log("WE HERE CART");
    return (
      <Cart
        onMustLogin={() => {
          navigate("LoginScreen", { onCart: true });
        }}
        onBack={() => navigate("Default")}
        onFinishOrder={() => navigate("MyOrders")}
        onViewHome={() => navigate("Default")}
        onViewProduct={(product) => navigate("Detail", product)}
        navigation={this.props.navigation}
      />
    );
  }
}
