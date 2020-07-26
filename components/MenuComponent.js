import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { PLACES } from "../shared/content";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: PLACES,
    };
  }

  static navigationOptions = {
    title: "Menu",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderMenuItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          onPress={() => navigate("Detail", { placeId: item.id })}
          leftAvatar={{ source: require("./images/1.jpg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.contents}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Menu;
