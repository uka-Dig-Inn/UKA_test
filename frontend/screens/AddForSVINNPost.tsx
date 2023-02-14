import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const AddForSVINNPost = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Beskrivelse" style={styles.input} />
        <TextInput placeholder="Allergier" style={styles.input} />
        <TextInput placeholder="Type mat" style={styles.input} />
        <TextInput
          placeholder="Starttidspunkt for henting"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Legg til</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddForSVINNPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  input: {
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 10,
  },
  button: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#F9B148",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
  },
});
