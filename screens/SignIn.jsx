import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import React from "react";
import SignInForm from "../components/SignIn/SignInForm";

export default function SignIn() {
  return (
    <ScrollView>
      <Text>Sign In with:</Text>
      <SignInForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
