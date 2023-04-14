import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  function handleRegister() {
    console.log(`Email: ${email}, Password: ${password}, First Name: ${firstName}, Last Name: ${lastName}, Username: ${username}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Adresse email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Prénom"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Nom de famille"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize="none"
      />

      <Button title="S'inscrire" onPress={handleRegister} />

      <Text style={styles.text} onPress={() => console.log("Aller à la page d'inscription")}>
        Déjà inscrit ? Connectez-vous
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    width: "80%",
    borderRadius: 5,
  },
  text: {
    marginTop: 10,
  },
});