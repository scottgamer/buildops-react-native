import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmployeeDetails = props => {
  // console.log(props.navigation);

  return (
    <View>
      <Text>Employee details</Text>
      <Text>{props.navigation.state.params.employee.firstname}</Text>
    </View>
  );
};

export default EmployeeDetails;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  headertext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10
  }
});
