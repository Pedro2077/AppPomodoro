import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';

const ConfigScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [workTime, setWorkTime] = useState('25');
  const [restTime, setRestTime] = useState('5');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tempo de Trabalho (min):</Text>
      <TextInput
        keyboardType="numeric"
        value={workTime}
        onChangeText={text => setWorkTime(text)}
        style={styles.input}
        mode="outlined"
      />
      <Text style={styles.label}>Tempo de Descanso (min):</Text>
      <TextInput
        keyboardType="numeric"
        value={restTime}
        onChangeText={text => setRestTime(text)}
        style={styles.input}
        mode="outlined"
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Timer')}
        style={styles.button}
      >
        Salvar Configurações
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 20,
  },
});

export default ConfigScreen;
