import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let { title, style,onPress } = this.props;
    console.log("=======>", style);
    return (
      // #e5e5e557
      <TouchableOpacity style={[styles._outer_border]} onPress={onPress}>
        <View style={[styles._btnstyle]}>
          <LinearGradient
            colors={["#76d24a", "#386523"]}
            style={[
              style,
              {
                borderRadius: 100,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
            start={[0, 0]}
            end={[1, 2]}
          >
            <Text style={styles._btn_text}>{title}</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  _container: {},
  _btnstyle: {
    borderRadius: 100,
    borderWidth: 0.85,
    borderColor: "#e5e5e57a",
    padding: 4,
  },

  _btn_text: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 17,
  },
  _outer_border: {
    borderRadius: 100,
    borderWidth: 0.85,
    borderColor: "#e5e5e557",
    padding: 2,
  },
});
