import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button
} from "react-native";

import { Formik } from "formik";
import EmployeeSchema from "../../../schemas/EmployeeSchema";

const EmployeeDetails = props => {
  console.log(
    "Current employe in form",
    props.navigation.state.params.employee
  );
  const [isEditable, setEditable] = useState(false);
  const [employee, setEmployee] = useState({
    ...props.navigation.state.params.employee
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

  // useEffect(() => {
  //   changeInitialValuesHandler();
  // }, []);

  // const changeInitialValuesHandler = () => {
  //   console.log("change initial values handler");

  //   if (
  //     props.navigation.state.params &&
  //     props.navigation.state.params.employee
  //   ) {
  //     const selectedEmployee = props.navigation.state.params.employee;
  //     console.log("selectedEmployee", selectedEmployee);
  //     setEmployee({ ...selectedEmployee });
  //     console.log("selectedEmployee", employee);
  //   }
  // };

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
                  {employee.firstname} {employee.lastname}
                </Text>

                <View style={{ flex: 1, backgroundColor: "#fefefe" }}>
                  <View style={styles.formInput}>
                    <TextInput
                      onChangeText={handleChange("firstname")}
                      onBlur={handleBlur("firstname")}
                      value={values.firstname}
                      placeholder="First name"
                      // editable={isEditable}
                      defaultValue={employee.firstname}
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
                      // editable={isEditable}
                      defaultValue={employee.lastname}
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
                      // editable={isEditable}
                      defaultValue={employee.addresses[0].line1}
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
                      // editable={isEditable}
                      defaultValue={employee.addresses[0].line2}
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
                      // editable={isEditable}
                      defaultValue={employee.addresses[0].city}
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
                      // editable={isEditable}
                      defaultValue={employee.addresses[0].state}
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
                      // editable={isEditable}
                      defaultValue={employee.addresses[0].zipcode}
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
                      // editable={isEditable}
                      defaultValue={employee.skills[0].name}
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
                    <Button
                      onPress={handleSubmit}
                      title="Update"
                      disabled={true}
                    />
                    <Button color="red" onPress={handleSubmit} title="Delete" />
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
