import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import EventsScreen from "./screens/EventsScreen";
import DodensDetailsScreen from "./screens/DodensDetailsScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ForSvinnScreen from "./screens/ForSvinnScreen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import AddForSVINNPost from "./screens/AddForSVINNPost";

SplashScreen.preventAutoHideAsync();

const INTERN = true;

const HomeStack = createStackNavigator();

function MapStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTitle: "UKArt",
          headerTitleStyle: {
            color: "white",
            fontSize: 25,
            fontFamily: "Raleway-bold",
          },
          headerStyle: {
            backgroundColor: "#F9B148",
            borderBottomColor: "black",
            borderBottomWidth: 1,
          },
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DodensDetailsScreen}
        options={{
          headerTitle: "",
          headerTitleStyle: { color: "white", fontSize: 25 },
          headerStyle: {
            backgroundColor: "#F9B148",
            borderBottomWidth: 1,
            borderBottomColor: "black",
          },
          headerTintColor: "white",
          headerBackTitle: "Tilbake",
          headerBackTitleStyle: {
            color: "white",
            fontWeight: "700",
            fontSize: 20,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const ForSVINNStack = createStackNavigator();

function ForSVINNStackScreen() {
  return (
    <ForSVINNStack.Navigator>
      <ForSVINNStack.Screen
        name="ForSVINN"
        component={ForSvinnScreen}
        options={{
          headerTitle: "ForSVINN",
          headerTitleStyle: {
            color: "white",
            fontSize: 25,
            fontFamily: "Raleway-bold",
          },
          headerStyle: {
            backgroundColor: "#F9B148",
            borderBottomColor: "black",
            borderBottomWidth: 1,
          },
          headerBackTitle: "Tilbake",
        }}
      />
      <ForSVINNStack.Screen
        name="AddPost"
        component={AddForSVINNPost}
        options={{
          headerTitle: "Legg til",
          headerTitleStyle: { color: "white", fontSize: 25 },
          headerStyle: {
            backgroundColor: "#F9B148",
            borderBottomWidth: 1,
            borderBottomColor: "black",
          },
          headerTintColor: "white",
          headerBackTitle: "Tilbake",
          headerBackTitleStyle: {
            color: "white",
            fontWeight: "700",
            fontSize: 20,
          },
        }}
      />
    </ForSVINNStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Oppdag"
        component={HomeScreen}
        options={{
          headerTitle: "UKA-23",
          headerTitleStyle: {
            color: "white",
            fontSize: 25,
            fontFamily: "Raleway-bold",
          },
          headerStyle: {
            backgroundColor: "#F9B148",
            borderBottomColor: "black",
            borderBottomWidth: 1,
          },
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="white" />
          ),
          tabBarLabelStyle: { color: "white", fontFamily: "Raleway-bold" },
          tabBarStyle: {
            backgroundColor: "#F9B148",
            borderTopColor: "black",
            borderTopWidth: 1,
          },
        }}
      />
      <Tab.Screen
        name="Begivenheter"
        component={EventsScreen}
        options={{
          headerTitle: "UKANews",
          headerTitleStyle: {
            color: "white",
            fontSize: 25,
            fontFamily: "Raleway-bold",
          },
          headerStyle: {
            backgroundColor: "#F9B148",
            borderBottomColor: "black",
            borderBottomWidth: 1,
          },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={24} color="white" />
          ),
          tabBarLabelStyle: { color: "white", fontFamily: "Raleway-bold" },
          tabBarStyle: {
            backgroundColor: "#F9B148",
            borderTopColor: "black",
            borderTopWidth: 1,
          },
        }}
      />

      <Tab.Screen
        name="Kart"
        component={MapStackScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ color, size }) => (
            <Feather name="map" size={24} color="white" />
          ),
          tabBarLabelStyle: { color: "white", fontFamily: "Raleway-bold" },
          tabBarStyle: {
            backgroundColor: "#F9B148",
            borderTopColor: "black",
            borderTopWidth: 1,
          },
        }}
      />
      {INTERN ? (
        <Tab.Screen
          name="forSvinn"
          component={ForSVINNStackScreen}
          options={{
            title: "ForSVINN",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="food-bank" size={24} color="white" />
            ),
            tabBarLabelStyle: { color: "white", fontFamily: "Raleway-bold" },
            tabBarStyle: {
              backgroundColor: "#F9B148",
              borderTopColor: "black",
              borderTopWidth: 1,
            },
          }}
        />
      ) : (
        <></>
      )}
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Raleway-regular": require("./assets/fonts/Raleway/static/Raleway-Regular.ttf"),
    "Raleway-bold": require("./assets/fonts/Raleway/static/Raleway-Bold.ttf"),
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
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
