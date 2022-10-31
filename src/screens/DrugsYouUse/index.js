import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
export default class DrugsYouUse extends React.Component {
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
          <Text style={styles._heading}>Drugs you use</Text>
          <View style={styles._data_main}>
            <View style={styles._data}>
              <Text style={styles._title}>Roaccutane 10 mg</Text>
              <View style={styles._points_main}>
                <View style={styles._line_active} />
                <View style={styles._line_active} />
                <View style={styles._line_active} />
                <View style={styles._line} />
                <View style={styles._line} />
                <TouchableOpacity>
                  <Text style={styles._more_btn}>More</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles._title}>DOXYCYCLINE 125</Text>
              <View style={styles._points_main}>
                <View style={styles._line_active} />
                <View style={styles._line_active} />
                <View style={styles._line} />
                <View style={styles._line} />
                <View style={styles._line} />
                <TouchableOpacity>
                  <Text style={styles._more_btn}>More</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles._add_btn}
                onPress={() => this.props.navigation.navigate("Add")}
              >
                <Entypo name="plus" size={34} color="white" />
              </TouchableOpacity>
            </View>
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
  },
  _layer: {
    flex: 1,
    resizeMode: "contain",
  },
  _heading: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 21,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  _data_main: {
    backgroundColor: "#EFF3FC",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    padding: 20,
  },
  _data: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  _add_btn: {
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    backgroundColor: "#1BC60B",
    position: "absolute",
    bottom: 20,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    right: 20,
  },
  _title: {
    fontFamily: "Poppins-Regular",
    color: "#7F73B8",
    fontSize: 16,
    marginTop: 20,
  },
  _line_active: {
    height: 4,
    backgroundColor: "#0062FF",
    width: "16%",
    borderRadius: 50,
  },
  _more_btn: {
    fontFamily: "Poppins-Medium",
    color: "#0062FF",
    fontSize: 14,
  },
  _line: {
    height: 4,
    backgroundColor: "#E2E2EA",
    width: "16%",
    borderRadius: 50,
  },
  _points_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
