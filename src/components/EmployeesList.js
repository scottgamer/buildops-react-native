import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList
} from "react-native";
import { Spinner } from "react-native-ui-kitten";

export default class EmployeesList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      isLoadingMore: false
    };
  }

  // async componentDidMount() {
  //   const data = await this.fetchData();
  //   this.setState({
  //     isLoading: false
  //   });
  //   this.populateSiteData(data.sites);
  // }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1, backgroundColor: "#fefefe" }}>
          <FlatList />
        </View>
      </SafeAreaView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//   },
//   listLayout: {
//     padding: 10,
//     marginTop: 10
//   },
//   cardContainer: {
//     flex: 1,
//     flexDirection: "row",
//     width: "100%",
//     height: 110,
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 5,
//     marginBottom: 15,
//     borderRadius: 3,
//     borderColor: "black",
//     backgroundColor: "#fff",
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 0.75 },
//     shadowOpacity: 0.5,
//     shadowRadius: 1,
//     elevation: 2,
//     alignContent: "center",
//     justifyContent: "center"
//   },
//   itemBgImage: {
//     height: "100%",
//     width: "25%"
//   },
//   nameAndAddressContainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     paddingLeft: 10,
//     marginRight: 7
//   },
//   itemNameText: { fontSize: 17, fontWeight: "bold", marginBottom: 15 },
//   flexCenterAll: {
//     display: "flex",
//     width: "100%",
//     height: "100%",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
