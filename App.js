import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import TimerScreen from './screens/TimerScreen';
import ConfigScreen from './screens/ConfigScreen';

// Cria o stack navigator para navegação entre as telas
const Stack = createStackNavigator();

// Definição do tema customizado para o React Native Paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',  // Cor principal para botões e destaques
    accent: '#03dac4',   // Cor de acento
    background: '#f8f9fa', // Cor de fundo para a aplicação
    text: '#333',        // Cor padrão para o texto
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Timer">
          <Stack.Screen
            name="Timer"
            component={TimerScreen}
            options={{ title: 'Pomodoro Timer' }}
          />
          <Stack.Screen
            name="Config"
            component={ConfigScreen}
            options={{ title: 'Configuração' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
