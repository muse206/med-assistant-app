import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  KeyboardAvoidingView,
  StyleSheet,
  ImageBackground
} from "react-native";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import Home from "./screens/MainApp/HomeScreen";
import { w } from "./api/Dimensions";
import { createStackNavigator, StackNavigator } from "react-navigation";

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDIOC2TDjKZVK3tj1bxYqw06BwNUtVBsjo",
  authDomain: "auth-2345.firebaseapp.com",
  databaseURL: "https://auth-2345.firebaseio.com",
  projectId: "auth-2345",
  storageBucket: "auth-2345.appspot.com",
  messagingSenderId: "1072093707426"
};
firebase.initializeApp(config);

export default class FirebaseLogin extends Component {
  state = {
    currentScreen: "login" // can be: 'login' or 'register' or 'forgot'
  };

  changeScreen = screenName => () => {
    this.setState({ currentScreen: screenName });
  };

  userSuccessfullyLoggedIn = user => {
    this.props.change(user);
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
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={-w(40)}
        style={styles.container}
      >
        <ImageBackground
          source={this.props.background}
          style={styles.background}
          resizeMode="stretch"
        >
          {screenToShow}
        </ImageBackground>
      </KeyboardAvoidingView>
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
