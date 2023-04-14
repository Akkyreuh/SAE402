import { StyleSheet, View, Text } from 'react-native';

import AjoutForm from '../components/AjoutForm';

export default function AjoutView(props) {
  return (
    <View style={styles.container}>  
   
    <AjoutForm></AjoutForm>
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