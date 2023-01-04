import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './src/navigation/Navigation';


export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
