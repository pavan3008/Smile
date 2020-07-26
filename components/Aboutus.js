import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card } from "react-native-elements";
import { LEADERS } from "../shared/leader";

function RenderItem(props) {
  const item = props.item;

  if (item != null) {
    return (
      <Card
        featuredTitle={item.name}
        featuredSubtitle={item.designation}
        image={require("./images/4.jpeg")}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

class Aboutus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leader: LEADERS,
    };
  }

  static navigationOptions = {
    title: "About us",
  };

  render() {
    return (
      <ScrollView>
        <RenderItem
          item={this.state.leader.filter((leader) => leader.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default Aboutus;
