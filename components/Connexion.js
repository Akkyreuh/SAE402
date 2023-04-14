import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import RegisterForm from "./Inscription";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // console.log("Email:" ${email}, "Password:" ${password});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connectez-vous</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={ () =>	props.navigation.navigate("Inscription")}>
        <Text style={styles.registerText}>Pas encore inscrit?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10
  },
  button: {
    backgroundColor: "#4285F4",
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center"
  },
  register: {
    margin: 10
  },
  registerText: {
    color: "#4285F4"
  }
});