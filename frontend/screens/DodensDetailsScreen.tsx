import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const DodensDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/kart_dd.png")}
        style={styles.image}
      />
    </View>
  );
};

export default DodensDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
