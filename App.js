
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import AccueilView from './screens/AccueilView'
import FilmsView from './screens/RencontreView'
import DetailView from './screens/DetailView'
import Top10View from './screens/ConnexionView'
import RegisterForm from './components/Inscription';
import InscriptionView from './screens/InscriptionView';
import ConnexionView from './screens/ConnexionView';
import RencontreView from './screens/RencontreView';

// --  navigation principale = TabBar
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false 
        })}
      >
        <Tab.Screen 
        name="Rencontres" 
        component={RencontreScreen} 
        options={{
          tabBarLabel: 'PARIER',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller-outline" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="LIVE" 
        component={FilmsScreen} 
        options={{
          tabBarLabel: '  LIVE',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barcode-outline" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Connexion" 
        component={Top10Screen} 
        options={{
          tabBarLabel: 'SE CONNECTER',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// -- parie 1 = recherche de films
function RencontreScreen() {
  const Stack = createNativeStackNavigator();
  return (      
  <Stack.Navigator>
    {/* la navigation doit se faire uniquement entre des View*/}
    <Stack.Screen name="Rencontre" component={RencontreView} />

  </Stack.Navigator>
  )
}

function FilmsScreen() {
  const Stack = createNativeStackNavigator();
  return (      
  <Stack.Navigator>
    {/* la navigation doit se faire uniquement entre des View*/}
    <Stack.Screen name="Connexion" component={ConnexionView} />
  </Stack.Navigator>
  )
}
// -- classement des acteurs (le top10...)
function Top10Screen() {
  const StackTop10 = createNativeStackNavigator();
  return (      
  <StackTop10.Navigator>
    <StackTop10.Screen name="Top" component={Top10View} />
    <StackTop10.Screen name="Inscription" component={InscriptionView} />
  </StackTop10.Navigator>
  )

  function Inscription() {
    const StackTop10 = createNativeStackNavigator();
    return (      
    <StackTop10.Navigator>
      <StackTop10.Screen name="Inscription" component={InscriptionView} />
    </StackTop10.Navigator>
    )
}}