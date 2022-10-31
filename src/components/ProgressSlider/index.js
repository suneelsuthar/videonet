import React from "react";
import { View } from "react-native";
import Slider from "@react-native-community/slider";
export default class ProgressSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Slider
          style={{
            width: "100%",
            height: 20,
          }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#6674fd"
          maximumTrackTintColor="#DEDAFA"
        />
      </View>
    );
  }
}
