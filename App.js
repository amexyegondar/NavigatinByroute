import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import ContactScreen from './screens/Contact';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator>
   <Stack.Screen name='home' component={HomeScreen} options={{title:'Home'}}/>
   <Stack.Screen name='about' component={AboutScreen}/>
   <Stack.Screen name='contact' component={ContactScreen}/>
</Stack.Navigator>


    </NavigationContainer>
  );
}


