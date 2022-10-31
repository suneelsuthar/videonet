import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../../components";
export default class FirstStep extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <LinearGradient
        end={[1.0, 0.5]}
        start={[0.0, 0.5]}
        locations={[0.0, 1.0]}
        colors={["#386523", "#76d24a"]}
        style={styles._container}
      >
        <ImageBackground
          source={require("./../../../assets/bg.png")}
          style={styles._layer}
        >
          <Text style={styles._title}>PILLTAKE</Text>
          <Image
            source={require("./../../../assets/avatar.png")}
            style={styles._avatar}
          />
          <View style={styles._desc_view}>
            <Text style={styles._desc}>
              Do not forget to take {"\n"}your pills anymore!
            </Text>
          </View>
          <View style={styles._btn_main}>
            <Button
              title="Continue"
              style={styles._btnStyle}
              onPress={() => this.props.navigation.navigate("SecondStep")}
            />
          </View>
        </ImageBackground>
      </LinearGradient>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "#213C14",
    justifyContent: "center",
    alignItems: "center",
  },
  _layer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  _btnStyle: {
    height: 55,
    width: 215,
  },
  _title: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 35,
  },
  _desc: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
  },
  _desc_view: {
    width: "90%",
    alignSelf: "center",
  },
  _btn_main: {
    marginTop: 40,
  },
  _avatar: {
    width: 300,
    height: 300,
  },
});
