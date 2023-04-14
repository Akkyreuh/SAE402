import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function ListeView() {
    return (
        <View style={styles.container}>
        <Text>Liste</Text>
        </View>
        )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });