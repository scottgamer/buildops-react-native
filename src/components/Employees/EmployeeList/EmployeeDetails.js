import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button
} from "react-native";

import axios from "axios";
import { Formik } from "formik";
import EmployeeSchema from "../../../schemas/EmployeeSchema";

import CONSTANTS from "../../../config/CONSTANTS";

const EmployeeDetails = props => {
  const [employee] = useState({
    selectedEmployee: props.navigation.state.params.employee
  });

  const initialValues = {
    firstname: props.navigation.state.params.employee.firstname,
    lastname: props.navigation.state.params.employee.lastname,
    line1: props.navigation.state.params.employee.addresses[0].line1,
    line2: props.navigation.state.params.employee.addresses[0].line2,
    city: props.navigation.state.params.employee.addresses[0].city,
    state: props.navigation.state.params.employee.addresses[0].state,
    zipcode: props.navigation.state.params.employee.addresses[0].zipcode,
    skill: props.navigation.state.params.employee.skills[0].name
  };

  // TODO finish this method
  const updateEmployeeHandler = (event, employeeId) => {
    event.preventDefault();
    console.log(employeeId);
  };

  const deleteEmployeeHandler = async () => {
    try {
      console.log(employee.selectedEmployee);

      const requestBody = {
        query: `
          mutation {
            deleteEmployee(employeeId: "${employee.selectedEmployee._id}") {
              _id
              firstname
              lastname 
            }
          }
        `
      };

      const response = await axios.post(
        `${CONSTANTS.API_URL}/graphql`,
        JSON.stringify(requestBody),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status !== 200 && response.status !== 201) {
        throw new Error("Failed!");
      }

      props.navigation.navigate("Employees");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EmployeeSchema}
      onSubmit={values => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
      }) => {
        return (
          <React.Fragment>
            <ScrollView
              showsVerticalScrollIndicator
              style={{ flex: 1, backgroundColor: "#fff" }}
            >
              <View style={styles.container}>
                <Text style={styles.containerHeader}>
                  {employee.selectedEmployee.firstname}{" "}
                  {employee.selectedEmployee.lastname}
                </Text>

                <View style={{ flex: 1, backgroundColor: "#fefefe" }}>
                  <View style={styles.formInput}>
                    <TextInput
                      onChangeText={handleChange("firstname")}
                      onBlur={handleBlur("firstname")}
                      value={values.firstname}
                      placeholder="First name"
                      defaultValue={employee.selectedEmployee.firstname}
                    />
                    {errors.firstname && touched.firstname ? (
                      <Text style={styles.errorText}>{errors.firstname}</Text>
                    ) : null}
                  </View>
                  <View style={styles.formInput}>
                    <TextInput
                      onChangeText={handleChange("lastname")}
                      onBlur={handleBlur("lastname")}
                      value={values.lastname}
                      placeholder="Last name"
                      defaultValue={employee.selectedEmployee.lastname}
                    />
                    {errors.lastname && touched.lastname ? (
                      <Text style={styles.errorText}>{errors.lastname}</Text>
                    ) : null}
                  </View>
                  <View style={styles.formInput}>
                    <TextInput
                      onChangeText={handleChange("line1")}
                      onBlur={handleBlur("line1")}
                      value={values.line1}
                      placeholder="Line 1"
                      defaultValue={
                        employee.selectedEmployee.addresses[0].line1
                      }
                    />
                    {errors.line1 && touched.line1 ? (
                      <Text style={styles.errorText}>{errors.line1}</Text>
                    ) : null}
                  </View>
                  <View style={styles.formInput}>
                    <TextInput
                      onChangeText={handleChange("line2")}
                      onBlur={handleBlur("line2")}
                      value={values.line2}
                      placeholder="Line 2"
                      defaultValue={
                        employee.selectedEmployee.addresses[0].line2
                      }
                    />
                    {errors.line2 && touched.line2 ? (
                      <Text style={styles.errorText}>{errors.line2}</Text>
                    ) : null}
                  </View>
                  <View style={styles.formInput}>
                    <TextInput
                      onChangeText={handleChange("city")}
                      onBlur={handleBlur("city")}
                      value={values.city}
                      placeholder="City"
                      defaultValue={employee.selectedEmployee.addresses[0].city}
                    />
                    {errors.city && touched.city ? (
                      <Text style={styles.errorText}>{errors.city}</Text>
                    ) : null}
                  </View>
                  <View style={styles.formInput}>
                    <TextInput
                      onChangeText={handleChange("state")}
                      onBlur={handleBlur("state")}
                      value={values.state}
                      placeholder="State"
                      defaultValue={
                        employee.selectedEmployee.addresses[0].state
                      }
                    />
                    {errors.state && touched.state ? (
                      <Text style={styles.errorText}>{errors.state}</Text>
                    ) : null}
                  </View>
                  <View style={styles.formInput}>
                    <TextInput
                      onChangeText={handleChange("zipcode")}
                      onBlur={handleBlur("zipcode")}
                      value={values.zipcode}
                      placeholder="Zip code"
                      defaultValue={
                        employee.selectedEmployee.addresses[0].zipcode
                      }
                    />
                    {errors.zipcode && touched.zipcode ? (
                      <Text style={styles.errorText}>{errors.zipcode}</Text>
                    ) : null}
                  </View>
                  <View style={styles.formInput}>
                    <TextInput
                      onChangeText={handleChange("skill")}
                      onBlur={handleBlur("skill")}
                      value={values.skill}
                      placeholder="Skill"
                      defaultValue={employee.selectedEmployee.skills[0].name}
                    />
                    {errors.skill && touched.skill ? (
                      <Text style={styles.errorText}>{errors.skill}</Text>
                    ) : null}
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: 10
                    }}
                  >
                    <Button onPress={handleSubmit} title="Update" />
                    <Button
                      color="red"
                      onPress={deleteEmployeeHandler}
                      title="Delete"
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </React.Fragment>
        );
      }}
    </Formik>
  );
};

export default EmployeeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center"
  },
  containerHeader: {
    padding: 10,
    fontSize: 18,
    fontWeight: "500"
  },
  formInput: {
    flex: 1,
    width: 200,
    height: 50,
    padding: 8,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3,
    borderColor: "black",
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.75 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    alignContent: "center",
    justifyContent: "center"
  },
  errorText: {
    color: "red",
    fontWeight: "400"
  }
});
