import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FETESTE APPEN EVER</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9B148",
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 25,
  },
});
