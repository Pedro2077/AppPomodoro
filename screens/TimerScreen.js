import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function TimerScreen({ navigation }) {
  const [time, setTime] = useState(25 * 60);  // Tempo inicial em segundos (25 minutos)
  const [isRunning, setIsRunning] = useState(false);

  // Atualiza o timer a cada segundo
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 48 }}>{formatTime(time)}</Text>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Button mode="contained" onPress={() => setIsRunning(!isRunning)} style={{ marginRight: 10 }}>
          {isRunning ? 'Pausar' : 'Iniciar'}
        </Button>
        <Button mode="contained" onPress={() => setTime(25 * 60)}>Resetar</Button>
      </View>
      <Button onPress={() => navigation.navigate('Config')}>Configurações</Button>
    </View>
  );
}
