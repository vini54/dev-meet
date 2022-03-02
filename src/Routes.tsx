import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";

import { Greeting } from "./screens/Greeting";
import { Events } from "./screens/Events";

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
        <Screen name="Events" component={Events} />
      </Navigator>
    </NavigationContainer>
  );
};
