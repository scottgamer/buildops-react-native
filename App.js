import React from "react";
import AppNavigator from "./src/AppNavigator";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Testing expo</Text>
    </View>
    // <ApplicationProvider mapping={mapping} theme={lightTheme}>
    //     <AppNavigator />
    // </ApplicationProvider>
  );
}
