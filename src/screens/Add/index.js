import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { Button, ProgressSlider } from "../../components";
import { BlurView } from "expo-blur";
import QRCode from "react-native-qrcode-generator";

export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      modalVisible2: false,
      text: "https://github.com/HishmatRai",
    };
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  setModalVisible2 = (visible2) => {
    this.setState({ modalVisible2: visible2 });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setModalVisible(true);
    }, 1000);
  }
  render() {
    const { modalVisible, modalVisible2 } = this.state;
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
            <Text style={styles._heading}>Add</Text>
            <View style={styles._back_btn_empty} />
          </View>
          <View style={styles._data_main}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles._input_main}>
                <MaterialIcons name="group-work" size={20} color="#5732C7" />
                <TextInput
                  placeholder="Name of the drug"
                  style={styles._input}
                  underlineColor="#747474"
                  placeholderTextColor="#747474"
                />
              </View>
              <View style={styles._input_main}>
                <FontAwesome5 name="pills" size={20} color="#5732C7" />
                <TextInput
                  placeholder="How many pills to take"
                  style={styles._input}
                  underlineColor="#747474"
                  placeholderTextColor="#747474"
                />
              </View>
              <View style={styles._input_main}>
                <AntDesign name="calendar" size={20} color="#5732C7" />
                <TextInput
                  placeholder="Time and date of the beginning"
                  style={styles._input}
                  underlineColor="#747474"
                  placeholderTextColor="#747474"
                />
              </View>
              <Text style={styles._perpetitions}>Repetitions</Text>
              <View style={styles._progress}>
                <ProgressSlider />
              </View>
              <View style={styles._note_main}>
                <View style={styles._note_title_main}>
                  <FontAwesome5 name="sticky-note" size={18} color="#3F248F" />
                  <Text style={styles._note_title}>Note</Text>
                </View>
                <View style={styles._note_input_main}>
                  <TextInput
                    placeholder="No milk"
                    style={styles._note_input}
                    underlineColor="#1F1559"
                    placeholderTextColor="#1F1559"
                    multiline={true}
                    // numberOfLines={7}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={styles._qr_btn}
                onPress={() => this.setModalVisible2(true)}
              >
                <Ionicons name="qr-code" size={24} color="#6C6DFE" />
                <Text style={styles._qr_btn_text}>OR code</Text>
              </TouchableOpacity>
              <View style={styles._btn_main2}>
                <Button
                  title="Save"
                  style={styles._btnStyle2}
                  onPress={() => this.props.navigation.goBack()}
                />
              </View>
              <View style={{ paddingBottom: 20 }} />
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
                      Would you like to allow {"\n"}these app to use Camera ?
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

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible2}
              onRequestClose={() => {
                this.setModalVisible2(!modalVisible2);
              }}
            >
              <BlurView intensity={200} style={styles.blurContainer}>
                <View style={styles.centeredView}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible2(!modalVisible2)}
                    style={styles._close_btn}
                  >
                    <Ionicons name="close" size={24} color="#000" />
                  </TouchableOpacity>
                  <View style={styles.modalView2}>
                    <QRCode
                      value={this.state.text}
                      size={200}
                      bgColor="black"
                      fgColor="white"
                    />
                  </View>
                </View>
              </BlurView>
            </Modal>
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
  _input_main: {
    backgroundColor: "#fff",
    height: 43,
    borderRadius: 50,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  _input: {
    width: "88%",
    fontSize: 15,
    color: "#747474",
    fontFamily: "Poppins-Regular",
    padding: 0,
    margin: 0,
    marginBottom: -5,
  },
  _perpetitions: {
    fontSize: 15,
    color: "#535353",
    fontFamily: "Poppins-Regular",
    marginTop: 20,
  },
  _note_main: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
  },
  _note_title_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _note_title: {
    fontSize: 15,
    color: "#747474",
    fontFamily: "Poppins-Medium",
    marginLeft: 10,
  },
  _note_input_main: {
    backgroundColor: "#EFEEF4",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    height: 143,
  },
  _note_input: {
    color: "#1F1559",
    fontSize: 15,
    fontFamily: "Poppins-Medium",
    justifyContent: "flex-start",
  },
  _qr_btn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    alignSelf: "flex-end",
    marginRight: 10,
  },
  _qr_btn_text: {
    fontFamily: "Poppins-Bold",
    color: "#6C6DFE",
    fontSize: 15,
    textAlign: "center",
    marginLeft: 10,
  },
  _btn_main2: {
    marginTop: 20,
    alignSelf: "center",
  },
  _btnStyle2: {
    height: 55,
    width: 186,
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
  modalView2: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    alignItems: "center",
    width: "70%",
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
  _progress: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 50,
    padding: 2,
    marginTop: 10,
    marginBottom: 20,
  },
  _close_btn: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    alignSelf: "flex-end",
    marginRight: "13%",
  },
});
