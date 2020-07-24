import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

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

function Detail(props) {
  return <RenderDetail detail={props.detail} />;
}

export default Detail;
