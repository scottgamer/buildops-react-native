import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  Button
} from "react-native";

import axios from "axios";
import Separator from "../../components/Separator/Separator";
import { Spinner } from "react-native-ui-kitten";

import CONSTANTS from "../../config/CONSTANTS";

const Employees = props => {
  const [employees, setEmployees] = useState({
    employees: []
  });

  const [isActive, setActive] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchEmployees();
    setActive(false);
  }, [count]);

  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const requestBody = {
        query: `
            query {
              employees {
                _id
                firstname
                lastname 
                addresses {
                  _id
                  line1
                  line2
                  city
                  state
                  zipcode
                }
                skills {
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

      const employeesRes = response.data.data.employees;

      if (isActive) {
        setEmployees({ ...employees, employees: employeesRes });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      if (isActive) {
        setLoading(false);
      }
    }
  };

  const openEmployeeFormHandler = () => {
    props.navigation.navigate("EmployeeForm", {
      employees: employees.employees
    });
  };

  const openEmployeeDetailsHandler = (item, index) => {
    props.navigation.navigate("EmployeeDetails", {
      employee: item
    });
  };

  const renderEmployee = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          openEmployeeDetailsHandler(item, index);
        }}
      >
        <View style={styles.employeeCard}>
          <Text style={styles.employeeHeader}>
            {item.firstname} {item.lastname}
          </Text>
          <Text>{item.skills[0].name}</Text>
          <Text>
            {item.addresses[0].line1} & {item.addresses[0].line2},{" "}
            {item.addresses[0].city}, {item.addresses[0].state}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const reloadHandler = async () => {
    await fetchEmployees();
    console.log(count);
    setCount(count + 1);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Text style={styles.containerHeader}>List of Employees</Text>
        <Button
          style={styles.buttonAdd}
          title="Reload list"
          onPress={reloadHandler}
        />
        <Button
          style={styles.buttonAdd}
          title="Add an Employee"
          onPress={openEmployeeFormHandler}
        />
        <View style={{ flex: 1, backgroundColor: "#fefefe" }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={employees.employees}
            keyExtractor={employee => employee._id}
            contentContainerStyle={styles.listLayout}
            renderItem={renderEmployee}
            extraData={employees.employees}
          />
        </View>
      </View>
      <Separator />
    </SafeAreaView>
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
  employeeHeader: {
    color: "#5101d1",
    fontWeight: "600"
  },
  listLayout: {
    padding: 10,
    marginTop: 10
  },
  employeeCard: {
    flex: 1,
    width: "100%",
    height: 90,
    padding: 8,
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
  },
  itemBgImage: {
    height: "100%",
    width: "25%"
  },
  nameAndAddressContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
    marginRight: 7
  },
  itemNameText: { fontSize: 17, fontWeight: "bold", marginBottom: 15 },
  flexCenterAll: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Employees;
