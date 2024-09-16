import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import TimerScreen from './screens/TimerScreen';
import ConfigScreen from './screens/ConfigScreen';

const Stack = createStackNavigator();

// Definindo o tema do Paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
    background: '#f8f9fa',
    text: '#333',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Timer">
          <Stack.Screen 
            name="Timer" 
            component={TimerScreen} 
            options={{ title: 'Pomodoro Timer' }} 
          />
          <Stack.Screen 
            name="Config" 
            component={ConfigScreen} 
            options={{ title: 'Configurações' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
