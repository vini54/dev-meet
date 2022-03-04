import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";

import { Greeting } from "./screens/Greeting";
import { Available } from "./screens/Available";
import { Event } from "./screens/Event";
import { Chose } from "./screens/Chose";

const { Navigator, Screen } =
  createNativeStackNavigator<propsNavigationStack>();

export const Routing = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Greeting"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Greeting" component={Greeting} />
        <Screen name="Available" component={Available} />
        <Screen name="Event" component={Event} />
        <Screen name="Chose" component={Chose} />
      </Navigator>
    </NavigationContainer>
  );
};
