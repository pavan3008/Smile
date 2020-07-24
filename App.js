//import { StatusBar } from "expo-status-bar";

import React from "react";
import Main from "./components/MainComponent";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  //console.log("App executed"); //debugging; it is useful; before deploying comment it;
  render() {
    return <Main />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC433",
    alignItems: "center",
    justifyContent: "center",
  },
});
