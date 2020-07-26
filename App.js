//import { StatusBar } from "expo-status-bar";

import React from "react";
import Main from "./components/MainComponent";
import { StyleSheet, Text, View } from "react-native";

console.disableYellowBox = true;

export default class App extends React.Component {
  //console.log("App executed"); //debugging; it is useful; before deploying comment it;
  render() {
    return <Main />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccccff",
    alignItems: "center",
    justifyContent: "center",
  },
});
