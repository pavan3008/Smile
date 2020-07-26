import React, { Component } from "react";
import Menu from "./MenuComponent";
import Detail from "./DetailComponent";
import { View, Platform } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import Home from "./HomeComponent";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";

const MenuNavigator = createStackNavigator(
  {
    Menu: { screen: Menu },
    Detail: { screen: Detail },
  },
  {
    initialRouteName: "Menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#0F0C04",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#0F0C04",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    Aboutus: { screen: Aboutus },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#0F0C04",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
    }),
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contactus: { screen: Contactus },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#0F0C04",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
    }),
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        drawerLabel: "Home",
      },
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: "Menu",
        drawerLabel: "Menu",
      },
    },
    Aboutus: {
      screen: AboutNavigator,
      navigationOptions: {
        title: "About",
        drawerLabel: "About",
      },
    },
    Contactus: {
      screen: ContactNavigator,
      navigationOptions: {
        title: "Contact",
        drawerLabel: "Contact",
      },
    },
  },
  {
    drawerBackgroundColor: "#D1C4E9",
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}

export default Main;
