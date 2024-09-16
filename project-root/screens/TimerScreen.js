import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { formatTime } from '../utils/timeUtils'; // função utilitária para formatar o tempo

const TimerScreen = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(25 * 60); // Tempo inicial: 25 minutos
  const [intervalId, setIntervalId] = useState(null);

  // Função para iniciar e pausar o timer
  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalId);
    } else {
      const id = setInterval(() => {
        setCurrentTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      setIntervalId(id);
    }
    setIsRunning(!isRunning);
  };

  // Função para resetar o timer
  const resetTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setCurrentTime(25 * 60); // Reseta para 25 minutos
  };

  useEffect(() => {
    if (currentTime === 0) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(currentTime)}</Text>
      <Button title={isRunning ? 'Pausar' : 'Iniciar'} onPress={toggleTimer} />
      <Button title="Resetar" onPress={resetTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default TimerScreen;
