import React from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView
} from "react-native";
import { Formik } from "formik";

const EmployeeForm = () => {
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <React.Fragment>
          <ScrollView showsVerticalScrollIndicator style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
              <Text style={styles.containerHeader}>Add Employee</Text>
              <Text style={{ color: "red", fontWeight: "400" }}>
                {" "}
                All fields are required
              </Text>
              <View style={{ flex: 1, backgroundColor: "#fefefe" }}>
                <View style={styles.formInput}>
                  <TextInput
                    onChangeText={handleChange("firstname")}
                    onBlur={handleBlur("firstname")}
                    value={values.firstname}
                    placeholder="First name"
                  />
                </View>
                <View style={styles.formInput}>
                  <TextInput
                    onChangeText={handleChange("lastname")}
                    onBlur={handleBlur("lastname")}
                    value={values.lastname}
                    placeholder="Last name"
                  />
                </View>
                <View style={styles.formInput}>
                  <TextInput
                    onChangeText={handleChange("line1")}
                    onBlur={handleBlur("line1")}
                    value={values.line1}
                    placeholder="Line 1"
                  />
                </View>
                <View style={styles.formInput}>
                  <TextInput
                    onChangeText={handleChange("line2")}
                    onBlur={handleBlur("line2")}
                    value={values.line2}
                    placeholder="Line 2"
                  />
                </View>
                <View style={styles.formInput}>
                  <TextInput
                    onChangeText={handleChange("city")}
                    onBlur={handleBlur("city")}
                    value={values.city}
                    placeholder="City"
                  />
                </View>
                <View style={styles.formInput}>
                  <TextInput
                    onChangeText={handleChange("state")}
                    onBlur={handleBlur("state")}
                    value={values.state}
                    placeholder="State"
                  />
                </View>
                <View style={styles.formInput}>
                  <TextInput
                    onChangeText={handleChange("zipcode")}
                    onBlur={handleBlur("zipcode")}
                    value={values.zipcode}
                    placeholder="Zip code"
                  />
                </View>
                <Button onPress={handleSubmit} title="Create" />
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
    height: 40,
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
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
  }
});

export default EmployeeForm;
