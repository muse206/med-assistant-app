import React, { Component } from "react";
import PropTypes from "prop-types";
import { AppLoading, Asset, Font, Icon } from "expo";
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Platform
} from "react-native";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import Home from "./screens/MainApp/HomeScreen";
import { w } from "./api/Dimensions";
import AppNavigator from "./navigation/AppNavigator";
import { createStackNavigator, StackNavigator } from "react-navigation";
import firebase from "firebase";
import SettingsScreen from "./screens/MainApp/SettingsScreen";
import HomeScreen from "./screens/MainApp/HomeScreen";
const AuthStack = { Login: Login };

const config = {
  apiKey: "AIzaSyDIOC2TDjKZVK3tj1bxYqw06BwNUtVBsjo",
  authDomain: "auth-2345.firebaseapp.com",
  databaseURL: "https://auth-2345.firebaseio.com",
  projectId: "auth-2345",
  storageBucket: "auth-2345.appspot.com",
  messagingSenderId: "1072093707426"
};
firebase.initializeApp(config);

export default class App extends Component {
  state = {
    currentScreen: "login" // can be: 'login' or 'register' or 'forgot'
  };

  changeScreen = screenName => () => {
    this.setState({ currentScreen: screenName });
  };

  userSuccessfullyLoggedIn = user => {
    this.props.navigation.navigate(user);
  };

  render() {
    let screenToShow;

    switch (this.state.currentScreen) {
      case "login":
        screenToShow = (
          <Login
            change={this.changeScreen}
            success={this.userSuccessfullyLoggedIn}
          />
        );
        break;
      case "register":
        screenToShow = <Register change={this.changeScreen} />;
        break;
      case "forgot":
        screenToShow = <ForgotPassword change={this.changeScreen} />;
        break;
      case "home":
        screenToShow = <Home change={this.changeScreen} />;
        break;
    }

    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#555"
  },
  background: {
    width: "100%",
    height: "100%"
  }
});
