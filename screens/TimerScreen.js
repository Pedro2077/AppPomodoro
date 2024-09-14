import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Title, useTheme } from 'react-native-paper';

const TimerScreen = ({ navigation }) => {
  const { colors } = useTheme(); // Obtenha cores do tema
  const [seconds, setSeconds] = useState(1500); // 25 minutos
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      <Title style={{ color: colors.primary, marginBottom: 20 }}>Pomodoro Timer</Title>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      <Button
        mode={isRunning ? "contained" : "outlined"}
        onPress={() => setIsRunning(!isRunning)}
        style={styles.button}
      >
        {isRunning ? 'Pausar' : 'Iniciar'}
      </Button>
      <Button
        mode="contained"
        onPress={() => setSeconds(1500)}
        style={[styles.button, { backgroundColor: colors.accent }]}
      >
        Redefinir
      </Button>
      <Button
        mode="text"
        onPress={() => navigation.navigate('Config')}
        style={styles.button}
        labelStyle={{ color: colors.accent }}
      >
        Configuração
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  timer: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    marginTop: 15,
    width: 200,
  },
});

export default TimerScreen;
