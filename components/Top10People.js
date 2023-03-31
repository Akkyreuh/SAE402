import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Top10Poeple(props) {
  const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a";
  const url =
    "https://api.themoviedb.org/3/person/popular?api_key=" +
    apiKey +
    "&language=fr-FR&page="
  const fetchOptions = { method: "GET" };
  // -- state = liste des personnes
  const [listeTopPeople, setTopPeople] = useState([]);
  // -- numero de page pour scroll vers le bas pour plus de résultats
  const [page, setPage] = useState(1)

  // -- requete initiala
  useEffect(() => {
    getDatas()
  }, []);

  // -- req AJAX = la 1ère et les suivantes en gérant le num de page
  function getDatas() {
    fetch(url + page, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON)
      // --  ajout dans la liste des personnes
      let l = [...listeTopPeople]
      dataJSON.results.forEach((data)=>{
        let people = data
        l.push(people)
      })
      console.log(l)
      setTopPeople(l); 
      // -- passage à la page suivante (en prévision de la prochaine req)
      let p = Number(page) + 1
      setPage(p)  
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
  <FlatList
    data={listeTopPeople}
    keyExtractor={ (item,index) => (item.id + index).toString() }
    renderItem={({item, index}) => {
        return(
               <View style={styles.item}> 
                    <Image 
                        source={ { 
                            uri : "https://image.tmdb.org/t/p/w185"  + item.profile_path   // - attention différent que pour un film
                        }} 
                        style={styles.image}></Image>
                    <Text style={styles.title}>{index+1} - {item.name} ({item.popularity})</Text>
                    { item.known_for.map((v)=> <Text key={v.id}> - {v.title ? v.title : v.name}</Text> )}   
                </View>
        )
      }
    }
    // -- cet event est déclenché car le user à acroller jusqu'à la fin de la liste
    onEndReached={getDatas}
    />

  );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
    },
    image: {
      width: 200,
      height: 200,
      margin: 5,
      backgroundColor: 'gray'
    },
    title: {
      fontSize: 20,
    },
  });

