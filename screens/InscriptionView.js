
import { StyleSheet, View, Text } from 'react-native';
import RegisterForm from '../components/Inscription';

export default function InscriptionView(props) {
  return (
    <View style={styles.container}>  
   
    <RegisterForm></RegisterForm>
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