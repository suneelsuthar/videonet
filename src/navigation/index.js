import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Add,
  CreateQrCode,
  DrugsYouUse,
  FirstStep,
  MedicineDetails,
  Notifications,
  SecondStep,
  Splash,
} from "./../screens";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="FirstStep" component={FirstStep} />
        <Stack.Screen name="SecondStep" component={SecondStep} />
        <Stack.Screen name="DrugsYouUse" component={DrugsYouUse} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="CreateQrCode" component={CreateQrCode} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="MedicineDetails" component={MedicineDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
