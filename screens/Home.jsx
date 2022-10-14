import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomImageCarousel from "../components/Carousel/CustomImageCarousel";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const data = [
    { image: require("../assets/2.jpg") },
    { image: require("../assets/1.jpg") },
    { image: require("../assets/2.jpg") },
    { image: require("../assets/33.jpg") },
    { image: require("../assets/2.jpg") },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backContainer}>
        <ImageBackground
          style={styles.background}
          source={require("../assets/homee.webp")}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>SEGUÍ TU ESTILO</Text>
          <Text style={styles.subtitle}>
            En SURFACE te damos las mejores opciones para que seas vos mismo
          </Text>
        </View>
      </View>
      <Text style={styles.products}>Productos destacados</Text>
      <CustomImageCarousel data={data} />
      <View style={styles.whatWeDoContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.questionOne}>¿Por qué elegir SURFACE?</Text>
          <Text style={styles.questionTwo}>¿Qué hacemos?</Text>
          <View style={styles.iconBox}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              style={styles.icon}
              height="80"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z"></path>
            </svg>
            <Text style={styles.iconText}>Diseños personalizados</Text>
          </View>
          <View style={styles.iconBox}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              style={styles.icon}
              height="80"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
            </svg>
            <Text style={styles.iconText}>Distintos medios de pagos</Text>
          </View>
          <View style={styles.iconBox}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              style={styles.icon}
              height="80"
              width="80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 556.9l264.2 173.5L512.5 577 246.8 412.7zm896-290.3zm0 0L696.8 95 512.5 248.5l265.2 164.2L512.5 577l184.3 153.4L960 558.8 777.7 412.7zM513 609.8L328.2 763.3l-79.4-51.5v57.8L513 928l263.7-158.4v-57.8l-78.9 51.5zM328.2 95L64 265.1l182.8 147.6 265.7-164.2zM64 556.9z"></path>
            </svg>
            <Text style={styles.iconText}>Envío gratis</Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#rgb(11, 16, 21);",
    height: "auto",
  },
  backContainer: {
    backgroundColor: "rgb(11, 18, 27)",
    position: "relative",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    opacity: 0.2,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    color: "#BEF202",
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
  },
  products: {
    color: "#FFFFFF",
    textAlign: "center",
    padding: 15,
    fontSize: 20,
  },
  //Section 2
  whatWeDoContainer: {
    backgroundColor: "whitesmoke",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  questionOne: {
    textAlign: "center",
    padding: 15,
    fontSize: 20,
  },
  questionTwo: {
    textAlign: "center",
    padding: 15,
    fontSize: 35,
    fontWeight: "bold",
  },
  icon: {
    backgroundColor: "#222831",
    padding: 30,
    borderRadius: 360,
    color: "#BEF202",
    alignSelf: "center",
  },
  iconBox: {
    padding: 10,
    textAlign: "center",
    alignSelf: "center",
  },
  iconText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
