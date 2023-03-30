import { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Film from "../Film";

export default function DetailFilm(props) {
  const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a";

  const url = "https://api.themoviedb.org/3/movie/" +
          props.idFilm + 
          "?api_key=" +
          apiKey +
          "&language=fr"

    console.log(url)
  const fetchOptions = { method: "GET" };

  const [film, setFilm] = useState({});

  useEffect(() => {
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        f = new Film(dataJSON)
        console.log(f);
        setFilm(f)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={ { 
            uri : "https://image.tmdb.org/t/p/w500" + film.poster_path
        }} 
        style={styles.image}></Image>
     <Text style={styles.title}>{film.title}</Text>
     <Text style={styles.overview}>{film.overview}</Text>
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
   
    image: {
      width: 300,
      height: 300,
      margin: 5,
      backgroundColor: 'gray'
    },
    title: {
        fontSize: 20,
        margin: 5,
      },
    overview: {
        fontSize: 12,
        margin: 5,
      },
  });
