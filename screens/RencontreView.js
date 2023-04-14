import { StyleSheet, Text, View, Image } from 'react-native';
import FilmsList from '../components/RencontreList';

export default function FimsView() {
  // -- récupérer le critere saisi dans le formulaire et transmis par le router
  return (
    <View style={styles.container}>
        <Text>Liste des Rencontres</Text>
        {/* afficher le composant qui va faire la recherche et afficher les résultats */}
        <FilmsList ></FilmsList>
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
});