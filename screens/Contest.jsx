import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Footer from "../components/Footer/Footer";

const Contest = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.contactTitle}>Top 3 más votados:</Text>
      <View style={styles.mapContainer}>
        <ImageBackground
          style={styles.map}
          source={require("../assets/concurse1.jpg")}
        />
        <ImageBackground
          style={styles.map}
          source={require("../assets/concurse2.jpg")}
        />
        <ImageBackground
          style={styles.map}
          source={require("../assets/concurse3.jpg")}
        />
      </View>
      <Text style={styles.contactTitle}>Todos los post:</Text>
      <View style={styles.mapContainer}>
        <ImageBackground
          style={styles.map}
          source={require("../assets/concurse4.jpg")}
        />
        <ImageBackground
          style={styles.map}
          source={require("../assets/concurse1.jpg")}
        />
        <ImageBackground
          style={styles.map}
          source={require("../assets/concurse2.jpg")}
        />
        <ImageBackground
          style={styles.map}
          source={require("../assets/concurse3.jpg")}
        />
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Contest;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(11, 16, 21)",
  },
  contactTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingLeft: 20,
    marginTop: 20,
    textAlign: "center",
  },
  mapContainer: {
    padding: 20,
  },
  map: {
    width: "100%",
    height: "450px",
    borderRadius: 20,
    marginBottom: 25,
  },
  contactme: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  form: {
    padding: 20,
  },
  label: {
    color: "#FFFFFF",
    marginTop: 10,
  },
  input: {
    height: "44px",
    borderRadius: 5,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  send: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    padding: 10,
    width: 100,
    borderRadius: 5,
    marginTop: 20,
  },
  sendText: {
    textAlign: "center",
  },
});
