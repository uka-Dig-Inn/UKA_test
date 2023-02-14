import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

import { AntDesign } from "@expo/vector-icons";

const ADMIN = true;

const ForSvinnScreen = ({ navigation }) => {
  const { height, width } = Dimensions.get("window");

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentLocations, setCurrentLocations] = useState([]);
  const [possibleLocations, setPossibleLocations] = useState([
    "Dødens Dal",
    "Baccarat",
    "Spektrum",
  ]);

  const url = `https://059a-2001-700-300-4003-35d1-bbe6-9266-e2f2.ngrok.io/forSVINN_posts`;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(url);
        const resJson = await res.json();

        setData(resJson.posts);
        setFilteredData(resJson.posts);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();

    return () => {};
  }, [navigation]);

  const Post = ({ description, allergier, type, tid, tidspunkt_publisert }) => (
    <TouchableOpacity style={styles.item} onPress={() => {}}>
      <View style={{ width: "100%" }}>
        <Text style={styles.itemTitle}>{description}</Text>
        <View style={styles.row}>
          <Text style={styles.itemTitle}>Allergier: </Text>
          <Text style={[styles.itemTitle, { fontFamily: "Raleway-bold" }]}>
            {allergier}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.itemTitle}>Type mat: </Text>
          <Text style={[styles.itemTitle, { fontFamily: "Raleway-bold" }]}>
            {type}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.itemTitle}>Starttidspunkt for henting: </Text>
          <Text style={[styles.itemTitle, { fontFamily: "Raleway-bold" }]}>
            {tid}
          </Text>
        </View>
      </View>
      <View
        style={{ width: "100%", paddingVertical: 10, alignItems: "flex-end" }}
      >
        <Text>Publisert: {tidspunkt_publisert}</Text>
      </View>
    </TouchableOpacity>
  );

  const Location = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (currentLocations.includes(item)) {
            let filteredArr = currentLocations.filter(
              (curr_location) => curr_location !== item
            );
            setCurrentLocations(filteredArr);
          } else {
            setCurrentLocations((oldArr) => [...oldArr, location]);
          }

          setFilteredData((oldArr) =>
            data.filter((post) => currentLocations.includes(post.location))
          );
        }}
        style={{
          paddingHorizontal: 10,
          marginHorizontal: 5,
          borderColor: "black",
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: currentLocations.includes(item) ? "blue" : "white",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            paddingTop: 10,
            paddingBottom: 20,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  if (!data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}
          data={possibleLocations}
          horizontal={true}
          renderItem={({ item }) => <Location item={item} />}
        />

        <FlatList
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
          data={filteredData}
          renderItem={({ item }) => (
            <Post
              description={item.description}
              allergier={item.allergier}
              type={item.type}
              tid={item.tid}
              tidspunkt_publisert={item.tidspunkt_publisert}
            />
          )}
          ItemSeparatorComponent={(props) => {
            return <View style={{ height: 40 }} />;
          }}
        />
        {ADMIN ? (
          <View
            style={{
              paddingVertical: 20,
              display: "flex",
              alignItems: "flex-end",
              paddingRight: 20,
              width: width,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("AddPost");
              }}
            >
              <Text style={{ marginRight: 10 }}>Legg til varsel</Text>
              <AntDesign name="pluscircle" size={30} color="black" />
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  }
};

export default ForSvinnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: "400",
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "Raleway-regular",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
