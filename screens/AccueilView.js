import { useState } from 'react';
import { StyleSheet, TextInput, View, Image, Button } from 'react-native';

export default function AccueilView(props) {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>  
      {/* le logo */}
      <Image
          style={styles.image}
          source={require('../assets/themoviedb.png')}
        />
      {/* la zone de saisie du critere */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="citere de recherche"
        />
        {/* bouton pour passer à la vue "Films" en lui donnont le critere saisi */}
        <Button 
          color="#24e082"
	        onPress={ () =>	props.navigation.navigate("Films",{"critere":text})}  title="Rechercher un film">
        </Button>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    height: 200,
    width:200
  },
});

// import { useState } from 'react';
// import { StyleSheet, TextInput, View, Image, Button } from 'react-native';

// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { Card, Button, Avatar } from "react-native-paper";
// import { blue } from "@mui/material/colors";

// export default function AccueilView(props) {
//   const [rencontre, setRencontre] = useState([]);
  
//   useEffect(() => {
//     const getMatch = async () => {
//       const response = await fetch(
//         `https://akkyrlouis.alwaysdata.net/api/getrencontres`
//       );
//       const data = await response.json();
//       console.log(data);
//       setRencontre(data);
//     };
//     getMatch();
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       {rencontre.map((rencontre) => (
//         <Card key={rencontre.id}>
//           <Card.Title
//             title={rencontre.equipe1}
//             subtitle={rencontre.jeux}
//             left={(props) => <Avatar.Icon {...props} icon="folder" />}
//             right={(props) => (
//               <TouchableOpacity {...props}>
//                 <Text style={styles.buttonText}>Parier</Text>
//               </TouchableOpacity>
//             )}
//           />
//           <Card.Content>
//             <View style={styles.bettingContainer}>
//               <Text style={styles.bettingOdds}>
//                 {rencontre.cote_equipe1}
//               </Text>
//               <View style={styles.bettingForm}>
//                 <Text style={styles.bettingLabel}>Mise :</Text>
//                 <TextInput
//                   style={styles.bettingInput}
//                   placeholder="Entrez votre mise"
//                   keyboardType="numeric"
//                 />
//                 <TouchableOpacity>
//                   <Text style={styles.bettingButton}>Valider le pari</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Card.Content>
//           <Card.Content>
//             <View style={styles.teamContainer}>
//               <Text style={styles.teamName}>{rencontre.equipe2}</Text>
//               <View style={styles.bettingContainer}>
//                 <Text style={styles.bettingOdds}>
//                   {rencontre.cote_equipe2}
//                 </Text>
//                 <View style={styles.bettingForm}>
//                   <Text style={styles.bettingLabel}>Mise :</Text>
//                   <TextInput
//                     style={styles.bettingInput}
//                     placeholder="Entrez votre mise"
//                     keyboardType="numeric"
//                   />
//                   <TouchableOpacity>
//                     <Text style={styles.bettingButton}>Valider le pari</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </Card.Content>
//           <Card.Actions>
//             <Button
//               icon="favorite"
//               color={blue[500]}
//               onPress={() => console.log("favoris")}
//             >
//               Favoris
//             </Button>
//             <Button
//               icon="share"
//               color={blue[500]}
//               onPress={() => console.log("partager")}
//             >
//               Partager
//             </Button>
//           </Card.Actions>
//         </Card>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 10,
//   },
//   bettingContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginVertical: 10,
//   },
//   bettingForm: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   bettingLabel: {
//     marginRight: 10,
//   },
//   bettingInput: {
//     borderWidth: 1,
//     borderColor: blue[500],
//   }})