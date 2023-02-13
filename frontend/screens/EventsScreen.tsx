import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

import * as Linking from "expo-linking";

import Constants from "expo-constants";

const { manifest } = Constants;

const EventsScreen = () => {
  const [data, setData] = useState(null);

  const baseUrl = "https://www.uka.no";

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://${manifest.debuggerHost
        .split(":")
        .shift()}:7071/api/scrapeAndExport`;
      const res = await fetch(url);
      const resJson = await res.json();

      console.log(resJson);
      setData(resJson.array);
    };
    fetchData();
  }, []);

  const Item = ({ title, src, imgUrl }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        Linking.openURL(baseUrl + src);
      }}
    >
      <Image source={{ uri: baseUrl + imgUrl }} style={styles.image} />
      <Text style={styles.itemTitle}>{title}</Text>
    </TouchableOpacity>
  );

  if (!data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"white"} />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
          data={data}
          renderItem={({ item }) => (
            <Item title={item.text} src={item.src} imgUrl={item.imgUrl} />
          )}
          ItemSeparatorComponent={(props) => {
            console.log("props", props); // here you can access the trailingItem with props.trailingItem
            return <View style={{ height: 40 }} />;
          }}
        />
      </SafeAreaView>
    );
  }
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9B148",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "700",
    fontSize: 25,
    color: "white",
  },
  item: {
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    alignItems: "center",
    width: Dimensions.get("window").width - 20,
  },
  itemTitle: {
    fontWeight: "700",
    fontSize: 25,
    marginVertical: 10,
  },
  ItemSeparator: {
    height: 20,
    width: "100%",
    backgroundColor: "blue",
  },
  image: {
    width: "100%",
    height: 100,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
});
