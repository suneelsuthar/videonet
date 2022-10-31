// //import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { LogBox, StatusBar } from "react-native";
import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreAllLogs(["VirtualizedLists should never be nested"]);
LogBox.ignoreAllLogs(); // ignore all logs

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const getFonts = () => {
    try {
      return Font.loadAsync({
        "CG-regular": require("./assets/fonts/CormorantGaramond-Regular.ttf"),
        "CG-bold": require("./assets/fonts/CormorantGaramond-Bold.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      });
    } catch (err) {
      // console.log("--------->", err);
    }
  };

  if (fontsLoaded) {
    return (
      <SafeAreaProvider>
        <StatusBar
          hidden={false}
          backgroundColor="#386523e0"
          barStyle="light-content"
          translucent={false}
        />
        <Navigation />
      </SafeAreaProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.log("")}
      />
    );
  }
}
