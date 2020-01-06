import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Employees from "./pages/Employees/Employees";
import Header from "./components/Header/Header";

const NavigationStack = createStackNavigator(
  {
    Employees: {
      screen: Employees,
      navigationOptions: {
        header: () => {
          return <Header title="BuildOps" />;
        }
      }
    }
  },
  {
    initialRouteName: "Employees"
  }
);

const AppNavigator = createAppContainer(NavigationStack);

export default AppNavigator;
