import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import CustomImageCarousel from "../components/Carousel/CustomImageCarousel";




const Home = () => {
  
  const data = [
    {image: require('../assets/2.jpg')},
    {image: require('../assets/1.jpg')},
    {image: require('../assets/2.jpg')},
    {image: require('../assets/33.jpg')},
    {image: require('../assets/2.jpg')},
  ]

  return (
  

  <SafeAreaView style={styles.container}>
   <ImageBackground source={require('../assets/homee.webp')}>
    <View style={styles.containerTittle}>
      <Text style={styles.tittle}>SEGUÍ TU ESTILO</Text>
      <Text style={styles.tittle2}>En SURFACE te damos las mejores opciones para que seas vos mismo</Text>
    </View>
   </ImageBackground>
    <Text>Productos destacados</Text>
    <CustomImageCarousel data={data}/>
    </SafeAreaView>
    



  )
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tittle:{
   textAlign: "center",
   fontSize: 40,
  },
  tittle2:{
    textAlign: "center",
    fontSize: 20,
   }
});
