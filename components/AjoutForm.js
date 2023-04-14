

import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default function RegisterForm() {
  const [jeux, setJeux] = useState("");
  const [equipe1, setEquipe1] = useState("");
  const [equipe2, setEquipe2] = useState("");
  const [cote_equipe1, setCote_equipe1] = useState("");
  const [cote_equipe2, setCote_equipe2] = useState("");

  function alert(message) {
    // implémentation de la méthode alert
    // par exemple, vous pouvez utiliser la méthode `console.log()` pour enregistrer le message dans la console
    console.log(message);
  };

  const handleSubmit = () => {
    const url = 'https://akkyrlouis.alwaysdata.net/api/postrencontres';
    
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jeux: jeux,
      equipe1: equipe1,
      equipe2: equipe2,
      cote_equipe1: cote_equipe1,
      cote_equipe2: cote_equipe2,
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
      <Text style={styles.title}>Ajout d'une rencontre</Text>

      <TextInput
        style={styles.input}
        placeholder="Jeu"
        onChangeText={(text) => setJeux(text)}
        value={jeux}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Equipe1"
        onChangeText={(text) => setEquipe1(text)}
        value={equipe1}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Equipe2"
        onChangeText={(text) => setEquipe2(text)}
        value={equipe2}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Cote equipe1"
        type="number"
        onChangeText={(text) => setCote_equipe1(text)}
        value={cote_equipe1}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Cote equipe1"
        type="number"
        onChangeText={(text) => setCote_equipe2(text)}
        value={cote_equipe2}
        autoCapitalize="none"
      />

      <Button title="Valider" onPress={handleSubmit} />
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