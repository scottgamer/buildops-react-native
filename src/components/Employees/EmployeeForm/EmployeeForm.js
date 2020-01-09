import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView
} from "react-native";

import axios from "axios";
import { Formik } from "formik";

import EmployeeSchema from "../../../schemas/EmployeeSchema";
import CONSTANTS from "../../../config/CONSTANTS";

export const EmployeeForm = props => {
  const initialValues = {
    firstname: "",
    lastname: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zipcode: "",
    skill: ""
  };

  const [employees, setEmployees] = useState(
    props.navigation.state.params.employees
  );

  const createEmployeeHandler = async values => {
    try {
      const requestBody = {
        query: `
          mutation {
            createEmployee(employeeInput: {firstname: "${values.firstname}", lastname: "${values.lastname}", addresses: [{
              line1: "${values.line1}",
              line2: "${values.line2}",
              city: "${values.city}",
              state: "${values.state}",
              zipcode: "${values.zipcode}"
            }], skills: [{
              name: "${values.skill}"
            }]}) {
              _id
              firstname
              lastname
              addresses{
                _id
                line1
                line2
                city
                state
                zipcode
              }
              skills{
                _id
                name
              }
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

      const updatedEmployees = [...employees];
      updatedEmployees.push(response.data.data.createEmployee);

      setEmployees([...updatedEmployees]);
      props.navigation.navigate("Employees", {
        employees: updatedEmployees
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EmployeeSchema}
      onSubmit={values => createEmployeeHandler(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
      }) => (
        <React.Fragment>
          <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
              <Text style={styles.containerHeader}>Add Employee</Text>

              <View style={{ flex: 1, backgroundColor: "#fefefe" }}>
                <View style={styles.formInput}>
                  <TextInput
                    onChangeText={handleChange("firstname")}
                    onBlur={handleBlur("firstname")}
                    value={values.firstname}
                    placeholder="First name"
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
                  />
                  {errors.skill && touched.skill ? (
                    <Text style={styles.errorText}>{errors.skill}</Text>
                  ) : null}
                </View>
                <Button onPress={handleSubmit} title="Submit" />
              </View>
            </View>
          </ScrollView>
        </React.Fragment>
      )}
    </Formik>
  );
};

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

export default EmployeeForm;
