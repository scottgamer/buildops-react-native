import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? "#5101d1" : "#fefefe",
    alignItems: "center"
  },
  headerTitle: {
    color: Platform.OS === "android" ? "#fefefe" : "#5101d1",
    fontSize: 20,
    fontWeight: "bold"
  }
});
