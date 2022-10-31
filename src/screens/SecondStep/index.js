import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../../components";
import { Ionicons } from "@expo/vector-icons";
export default class SecondStep extends React.Component {
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
          <Image
            source={require("./../../../assets/avatar.png")}
            style={styles._avatar}
          />
          <View style={styles._desc_view}>
            <Text style={styles._desc}>
              Lorem ipsum dolor sit amet,{"\n"} consectetur adipiscing elit.
              Semper{"\n"}
              lacinia commodo nibh vel {"\n"}pellentesque in. Sodales facilisi
              ut{"\n"}
              turpis eget. Viverra laoreet egestas {"\n"}egestas cras eros
              nullam.
            </Text>
          </View>
          <View style={styles._btn_main}>
            <Button
              title="MY PILLS"
              style={styles._btnStyle}
              onPress={() => this.props.navigation.navigate("Notifications")}
            />
          </View>
          <TouchableOpacity
            style={styles._qr_btn}
            onPress={() => this.props.navigation.navigate("CreateQrCode")}
          >
            <Ionicons name="qr-code" size={24} color="#fff" />
            <Text style={styles._qr_btn_text}>Doctor</Text>
          </TouchableOpacity>
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
    width: 289,
  },
  _desc: {
    fontFamily: "Poppins-Regular",
    color: "white",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
  },
  _desc_view: {
    width: "90%",
    alignSelf: "center",
  },
  _btn_main: {
    marginTop: 20,
  },
  _qr_btn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  _qr_btn_text: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginLeft: 10,
  },
  _avatar: {
    width: 300,
    height: 300,
    marginTop: 50,
  },
});
