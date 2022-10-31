import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign } from "@expo/vector-icons";
export default class MedicineDetails extends React.Component {
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
          <View style={styles._header_main}>
            <TouchableOpacity
              style={styles._back_btn}
              onPress={() => this.props.navigation.goBack()}
            >
              <Ionicons name="chevron-back-outline" size={24} color="#0062FF" />
            </TouchableOpacity>
            <Text style={styles._heading}>DOXYCYCLINE 125 </Text>
            <View style={styles._back_btn_empty} />
          </View>
          <View style={styles._data_main}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles._data}>
                <View style={styles._card_main}>
                  <View style={styles._line} />
                  <View style={styles._card_data_main}>
                    <View style={styles._profile_main}>
                      <Image
                        source={require("./../../../assets/ahmad.png")}
                        style={styles._profile_img}
                      />
                      <View style={styles._card_data}>
                        <View style={styles._card_header_main}>
                          <Text style={styles._card_heading}>
                            DOXYCYCLINE 125
                          </Text>
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate("DrugsYouUse")
                            }
                          >
                            <Ionicons
                              name="chevron-down-outline"
                              size={24}
                              color="#0062FF"
                            />
                          </TouchableOpacity>
                        </View>
                        <View style={styles._date_main}>
                          <AntDesign
                            name="calendar"
                            size={14}
                            color="#696974"
                          />
                          <Text style={styles._date}>Thu, 23 Jun</Text>
                          <Text style={styles._time}>02:00 - 03:00 PM</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles._des_title}>DESCRIPTION</Text>
                <Text style={styles._des}>
                  Doxycycline is a tetracycline antibiotic that fights bacteria
                  in the body. {"\n"}
                  {"\n"}Doxycycline is used to treat many different bacterial
                  infections, such as acne, urinary tract infections, intestinal
                  infections, respiratory infections, eye infections, gonorrhea,
                  chlamydia, syphilis, periodontitis (gum disease), and others.{" "}
                  {"\n"}
                  {"\n"}Doxycycline is also used to treat blemishes, bumps, and
                  acne-like lesions caused by rosacea. It will not treat facial
                  redness caused by rosacea. {"\n"}
                  {"\n"}Some forms of doxycycline are used to prevent malaria,
                  to treat anthrax, or to treat infections caused by mites,
                  ticks, or lice.
                </Text>
                <TouchableOpacity
                  style={styles._medicine_btn}
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Text style={styles._medicine_btn_text}>
                    I took the medicine now
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingBottom: 20 }} />
            </ScrollView>
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
  },
  _data_main: {
    backgroundColor: "#EFF3FC",
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  _back_btn: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  _back_btn_empty: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _data: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
  },
  _line: {
    width: 2,
    height: 66,
    backgroundColor: "#50B5FF",
    marginLeft: 2,
  },
  _card_data_main: {
    width: "95%",
    paddingLeft: 10,
  },
  _profile_img: {
    width: 52,
    height: 52,
    borderRadius: 10,
    marginRight: 15,
  },
  _profile_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _card_header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_heading: {
    fontFamily: "Poppins-Bold",
    color: "#171725",
    fontSize: 15,
  },
  _card_data: {
    width: "75%",
  },
  _date_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _date: {
    color: "#696974",
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    marginLeft: 5,
    marginTop: 5,
  },
  _time: {
    color: "#92929D",
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    marginLeft: 5,
    marginTop: 5,
  },
  _des_title: {
    color: "#171725",
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    marginHorizontal: 20,
    marginTop: 10,
  },
  _des: {
    color: "#443583",
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    marginHorizontal: 20,
    marginTop: 10,
  },
  _medicine_btn: {
    marginHorizontal: 20,
    marginVertical: 20,
    height: 44,
    backgroundColor: "#1BC60B",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  _medicine_btn_text: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 18,
  },
});
