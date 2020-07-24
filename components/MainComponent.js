import React, { Component } from "react";
import Menu from "./MenuComponent";
import Detail from "./DetailComponent";
import { View } from "react-native";

import { PLACES } from "../shared/content";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: PLACES,
      selectedPlace: null,
    };
  }

  onPlaceSelect(placeId) {
    this.setState({ selectedPlace: placeId });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Menu
          contents={this.state.contents}
          onPress={(placeId) => this.onPlaceSelect(placeId)}
        />
        <Detail
          detail={
            this.state.contents.filter(
              (place) => place.id === this.state.selectedPlace
            )[0]
          }
        />
      </View>
    );
  }
}

export default Main;
