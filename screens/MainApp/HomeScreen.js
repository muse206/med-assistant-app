import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  Text,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { w, h, totalSize } from "../../api/Dimensions";
const companylogo = require("../../assets/companylogo.png");
import {
  StackNavigator,
  createSwitchNavigator,
  NavigationActions
} from "react-navigation";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} resizeMode="contain" source={companylogo} />
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to
          get a shareable url.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});
