
import { StyleSheet, View, Text } from 'react-native';

import LoginForm from '../components/Connexion';

export default function ConnexionView(props) {
  return (
    <View style={styles.container}>  
   
    <LoginForm></LoginForm>
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