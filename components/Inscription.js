import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default function AjoutForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");

  function alert(message) {
    // implémentation de la méthode alert
    // par exemple, vous pouvez utiliser la méthode `console.log()` pour enregistrer le message dans la console
    console.log(message);
  };

  const handleSubmit = () => {
    const url = 'https://akkyrlouis.alwaysdata.net/api/adduti';
    
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    email: email,
    password: password,
    nom: nom,
    prenom: prenom,
    pseudo: pseudo,
    }),
    };
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    })
    .catch(error => {
    console.error(error);
    });
    };

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
        type="password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Prénom"
        onChangeText={(text) => setPrenom(text)}
        value={prenom}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Nom de famille"
        onChangeText={(text) => setNom(text)}
        value={nom}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="pseudo"
        onChangeText={(text) => setPseudo(text)}
        value={pseudo}
        autoCapitalize="none"
      />

      <Button title="S'inscrire" onPress={handleSubmit} />

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