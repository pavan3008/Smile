import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card } from "react-native-elements";
import { CONTACTS } from "../shared/contact";

function RenderItem(props) {
  const item = props.item;

  if (item != null) {
    return <Text style={{ margin: 10 }}>{item.description}</Text>;
  } else {
    return <View></View>;
  }
}

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: CONTACTS,
    };
  }

  static navigationOptions = {
    title: "Contact",
  };

  render() {
    return (
      <ScrollView>
        <RenderItem
          item={this.state.contact.filter((contact) => contact.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default Contactus;
