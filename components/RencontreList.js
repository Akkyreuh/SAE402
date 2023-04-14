import { useState, useEffect } from "react";
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import Film from "../Film";

export default function FilmsList() {

  const url = "https://akkyrlouis.alwaysdata.net/api/getrencontres";

  const fetchOptions = { method: "GET" };

  const [listeRencontres, setRencontres] = useState([]);

  useEffect(() => {
    getDatas()
  }, []);

  function getDatas() {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        setRencontres(dataJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FlatList
      data={listeRencontres}
      keyExtractor={(rencontres) => rencontres.idrencontre.toString()}
      renderItem={({ item }) => {
        console.log(item)
        return (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Detail", { idFilm: item.id })} style={styles.item1}>

            <View style={styles.item}>
              <Text style={styles.title}>{item.equipe1}</Text>
              <Text style={styles.title}>{item.cote_equipe1}</Text>
              <Button style={styles.button}
                color="#24e082"
                title="Parier">
              </Button>
            </View>
            <View>
              <Text style={styles.title}>{item.jeux}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.title}>{item.equipe2}</Text>
              <Text style={styles.title}>{item.cote_equipe2}</Text>
              <Button style={styles.button}
                color="#24e082"
                title="Parier">
              </Button>
            </View>
          </TouchableOpacity>
        )
      }
      }
    />
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width:10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
   
    padding: 10,
    marginVertical: 5,
  },
  item1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10,
    maxWidth:380,
    marginVertical: 5,
  },
  equipe: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  equipeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cote: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
  separator: {
    width: 2,
    height: 100,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
  title: {
    fontSize:12
  },
  button: {
    backgroundColor: '#24e082',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});