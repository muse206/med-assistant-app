import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="login" component={Login} title="Login" initial />
          <Scene key="signup" component={Signup} title="Register" />
        </Stack>
      </Router>
    );
  }
}
