import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useAddUserSignUpMutation } from "../features/actions/authAPI";
import Footer from "../components/Footer/Footer";

const SignUp = () => {
  const [singUp] = useAddUserSignUpMutation();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  const userData = {
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    photo: photo,
    from: "form",
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length <= 2) {
    } else if (lastName.length <= 2) {
    } else if (email.length <= 7) {
    } else if (password.length <= 5) {
    } else if (photo.length <= 8) {
    } else {
      singUp(userData)
        .unwrap()
        .then((res) => console.log(res));

      e.target.reset();
    }
  }

  function handleChange(e) {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "photo":
        setPhoto(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;

      default:
        break;
    }
  }

  return (
    <ScrollView method="post" style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <View>
        <Text style={styles.text}>Nombre</Text>
        <TextInput
          style={styles.input}
          type="text"
          onChange={handleChange}
          id="name"
          placeholder="Juan"
          name="name"
        ></TextInput>

        <Text style={styles.text}>Apellido</Text>
        <TextInput
          style={styles.input}
          type="text"
          onChange={handleChange}
          id="lastName"
          placeholder="Perez"
          name="lastName"
        ></TextInput>

        <Text style={styles.text}>Correo</Text>
        <TextInput
          style={styles.input}
          type="text"
          onChange={handleChange}
          id="email"
          placeholder="ejemplo@ejemplo.com"
          name="email"
        ></TextInput>

        <Text style={styles.text}>Contraseña</Text>
        <TextInput
          style={styles.input}
          type="password"
          onChange={handleChange}
          placeholder="******"
          id="password"
          name="password"
        ></TextInput>

        <Text style={styles.text}>Foto URL</Text>
        <TextInput
          style={styles.input}
          type="text"
          onChange={handleChange}
          placeholder="https://..."
          id="photo"
          name="photo"
        ></TextInput>
        <Button
          style={styles.button}
          onPress={handleSubmit}
          method="post"
          title="Registrarme"
        />
      </View>
      <Footer />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#rgb(11, 16, 21);",
    height: "auto",
    minHeight: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    color: "#BEF202",
    fontWeight: "bold",
    backgroundColor: "black",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "black",
  },
  input: {
    textAlign: "center",
    color: "white",
  },
  button: {
    paddingTop: "20px",
  },
});
