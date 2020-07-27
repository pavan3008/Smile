import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { PLACES } from "../shared/content";

function RenderDetail(props) {
  const detail = props.detail;

  if (detail != null) {
    return (
      <Card featuredTitle={detail.name} image={require("./images/2.jpg")}>
        <Text style={{ margin: 10 }}>{detail.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: PLACES,
    };
  }

  static navigationOptions = {
    title: "Details",
  };

  render() {
    const placeId = this.props.navigation.getParam("placeId", "");
    return <RenderDetail detail={this.state.contents[+placeId]} />;
  }
}

export default Detail;