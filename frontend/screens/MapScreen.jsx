import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import MapView, { Callout, Marker } from "react-native-maps";
import * as Linking from "expo-linking";

const MapScreen = () => {
  const { height, width } = Dimensions.get("window");

  const LATITUDE_DELTA = 0.09;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

  const locations = [
    {
      title: "Dødens dal",
      description: "Syyyykt fett sted med mye konsterter etc.",
      latLong: {
        latitude: 63.41939498228492,
        longitude: 10.406626136955333,
      },
      url: "https://www.uka.no/",
    },
    {
      title: "Studentersamfundet",
      description: "Vårt røde fantastiske bygg full av god stemning!",
      latLong: {
        latitude: 63.423205158334675,
        longitude: 10.395008325513349,
      },
      url: "https://www.uka.no/",
    },
    {
      title: "Trondheim Spektrum",
      description: "Stor hall med mange bra konsterter!",
      latLong: {
        latitude: 63.4274754215018,
        longitude: 10.377524945839491,
      },
      url: "https://www.uka.no/",
    },
    {
      title: "Baccarat",
      description:
        "Et helt nytt telt, som ligger i Høyskoleparken! MÅ OPPLEVES!",
      latLong: {
        latitude: 63.421304665980735,
        longitude: 10.39667037267744,
      },
      url: "https://www.uka.no/",
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 63.423205158334675,
          longitude: 10.395008325513349,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {locations.map((location, index) => {
          return (
            <Marker
              key={index}
              coordinate={location.latLong}
              title={location.title}
              description={location.description}
            >
              <Image
                source={require("../assets/doge.webp")}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30,
                  resizeMode: "cover",
                }}
              />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: "100%",
    height: "100%",
  },
});
