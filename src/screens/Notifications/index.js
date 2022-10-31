import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Button } from "../../components";
export default class Notifications extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setModalVisible(true);
    }, 1000);
  }
  render() {
    const { modalVisible } = this.state;
    let CardData = [
      {
        profileImg: require("./../../../assets/ahmad.png"),
      },
      {
        profileImg: null,
      },
    ];
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingBottom: 20 }}
          >
            <Text style={styles._heading}>PILLTAKE {"\n"}notifications</Text>
            {CardData.map((v, i) => {
              return (
                <TouchableOpacity
                  style={styles._card_main}
                  key={i}
                  onPress={() =>
                    this.props.navigation.navigate("MedicineDetails")
                  }
                >
                  <View style={styles._line} />
                  <View style={styles._card_data_main}>
                    <View style={styles._profile_main}>
                      {v.profileImg !== null ? (
                        <Image
                          source={v.profileImg}
                          style={styles._profile_img}
                        />
                      ) : (
                        <View style={styles._profile_null}>
                          <Feather name="user" size={24} color="#99B2EE" />
                        </View>
                      )}
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
                    <View style={styles._pill_main}>
                      <Text style={styles._pill}>Take 1 pill now. </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
            <Text style={styles._message}>
              We will send you {"\n"}notifications, so you {"\n"}dont forget!
            </Text>
          </ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
          >
            <BlurView intensity={200} style={styles.blurContainer}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Would you like to allow {"\n"}notifications for PILLTAKE app
                  </Text>
                  <View style={styles._btn_main}>
                    <Button
                      title="No"
                      style={styles._btnStyle}
                      onPress={() => this.setModalVisible(!modalVisible)}
                    />
                    <Button
                      title="Yes"
                      style={styles._btnStyle}
                      onPress={() => this.setModalVisible(!modalVisible)}
                    />
                  </View>
                </View>
              </View>
            </BlurView>
          </Modal>
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
    fontSize: 35,
    textAlign: "center",
    marginTop: 30,
  },
  _message: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  _card_main: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 23,
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
  _pill_main: {
    backgroundColor: "#EEF2FC",
    borderRadius: 50,
    height: 26,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  _pill: {
    color: "#7C6DB7",
    fontFamily: "Poppins-Regular",
    fontSize: 13,
  },
  _profile_null: {
    width: 52,
    height: 52,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: "#E7EEFF",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    width: "90%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 5,
  },
  blurContainer: {
    flex: 1,
  },
  modalText: {
    color: "#414141",
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    textAlign: "center",
  },
  _btnStyle: {
    height: 30,
    width: 110,
  },
  _btn_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
});
