import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import EventsScreen from "./screens/EventsScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Oppdag"
        component={HomeScreen}
        options={{
          headerTitle: "UKA-23",
          headerTitleStyle: { color: "white", fontSize: 25 },
          headerStyle: { backgroundColor: "#F9B148" },
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="white" />
          ),
          tabBarLabelStyle: { color: "white" },
          tabBarStyle: {
            backgroundColor: "#F9B148",
            borderTopColor: "black",
            borderTopWidth: 3,
          },
        }}
      />
      <Tab.Screen
        name="Begivenheter"
        component={EventsScreen}
        options={{
          headerTitle: "UKA-23",
          headerTitleStyle: { color: "white", fontSize: 25 },
          headerStyle: { backgroundColor: "#F9B148" },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={24} color="white" />
          ),
          tabBarLabelStyle: { color: "white" },
          tabBarStyle: {
            backgroundColor: "#F9B148",
            borderTopColor: "black",
            borderTopWidth: 3,
          },
        }}
      />
      <Tab.Screen
        name="Kart"
        component={MapScreen}
        options={{
          headerTitle: "UKA-23",
          headerTitleStyle: { color: "white", fontSize: 25 },
          headerStyle: { backgroundColor: "#F9B148" },
          tabBarIcon: ({ color, size }) => (
            <Feather name="map" size={24} color="white" />
          ),
          tabBarLabelStyle: { color: "white" },
          tabBarStyle: {
            backgroundColor: "#F9B148",
            borderTopColor: "black",
            borderTopWidth: 3,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
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
