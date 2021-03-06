import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { PostFeed } from "../container";



class MainFeed extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };

  }

  render() {

    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100+"%"}}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <PostFeed/>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 50,
    marginTop: 20,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233, 233, 233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MainFeed;
