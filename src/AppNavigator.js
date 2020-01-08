import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Employees from "./screens/Employees/Employees";
import EmployeeDetails from "./components/Employees/EmployeeList/EmployeeDetails";
import EmployeeForm from "./components/Employees/EmployeeForm/EmployeeForm";
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
    },
    EmployeeDetails: {
      screen: EmployeeDetails,
      navigationOptions: {
        header: () => {
          return <Header title="BuildOps" />;
        }
      }
    },
    EmployeeForm: {
      screen: EmployeeForm,
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
