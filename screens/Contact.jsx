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

const Contact = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.contactTitle}>Nuestra Sucursal</Text>
      <View style={styles.mapContainer}>
        <ImageBackground
          style={styles.map}
          source={require("../assets/mapa.jpg")}
        />
      </View>
      <Text style={styles.contactme}>Contáctenos!</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Mensaje</Text>
        <TextInput style={styles.input} />
        <Pressable style={styles.send}>
          <Text style={styles.sendText}>Enviar</Text>
        </Pressable>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Contact;

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
  },
  mapContainer: {
    padding: 20,
  },
  map: {
    width: "100%",
    height: "500px",
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
