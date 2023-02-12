import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Constants from "expo-constants";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const HomeScreen = () => {
  console.log(process.env.API_URL);
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
