import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import TimerScreen from './screens/TimerScreen';
import ConfigScreen from './screens/ConfigScreen';
import './styles/styles.scss';

const Stack = createStackNavigator();


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
