import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import TimerScreen from './screens/TimerScreen';
import ConfigScreen from './screens/ConfigScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Timer">
          <Stack.Screen name="Timer" component={TimerScreen} options={{ title: 'Pomodoro Timer' }} />
          <Stack.Screen name="Config" component={ConfigScreen} options={{ title: 'Configuração' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

