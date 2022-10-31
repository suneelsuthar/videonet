import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Splash extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    setTimeout(() => {
      this.props.navigation.navigate("FirstStep");
    }, 2000);
    return (
      <LinearGradient colors={["#8FFF5A", "#213C14"]} style={styles._container}>
        <ImageBackground
          source={require("./../../../assets/bg.png")}
          style={styles._layer}
        >
          <Image source={require("./../../../assets/logo.png")} />
        </ImageBackground>
      </LinearGradient>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "#213C14",
  },
  _layer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
});
