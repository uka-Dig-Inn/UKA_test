import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    "Raleway-regular": require("../assets/fonts/Raleway/static/Raleway-Regular.ttf"),
    "Raleway-bold": require("../assets/fonts/Raleway/static/Raleway-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
