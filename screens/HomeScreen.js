import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { w, h, totalSize } from "/Users/musaosman/MedAssis/api/Dimensions";
import {
  StackNavigator,
  createSwitchNavigator,
  NavigationActions
} from "react-navigation";
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>Home</Text>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffffEE",
    textAlign: "center",
    fontSize: totalSize(2),
    fontWeight: "600"
  }
});
