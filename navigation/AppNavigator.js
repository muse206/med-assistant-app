import React from "react";
import { createStackNavigator, StackNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import Login from "../screens/Login/index";
import Register from "../screens/Register/index";
import ForgotPassword from "../screens/ForgotPassword";
import HomeScreen from "../screens/MainApp/HomeScreen";
import SettingsScreen from "../screens/MainApp/SettingsScreen";

export const AuthStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      title: "Forgot"
    }
  }
});
