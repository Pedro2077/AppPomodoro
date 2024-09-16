import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ConfigScreen = ({ navigation }) => {
  const [workTime, setWorkTime] = useState('25');
  const [breakTime, setBreakTime] = useState('5');

  const saveConfig = () => {
    // Aqui você pode passar os tempos configurados para o TimerScreen
    // ou armazená-los em um contexto global ou estado de gerenciamento
    navigation.navigate('Timer', { workTime: parseInt(workTime) * 60, breakTime: parseInt(breakTime) * 60 });
  };

  return (
    <View style={styles.container}>
      <Text>Tempo de Trabalho (minutos):</Text>
      <TextInput
        style={styles.input}
        value={workTime}
        keyboardType="numeric"
        onChangeText={(text) => setWorkTime(text)}
      />
      <Text>Tempo de Descanso (minutos):</Text>
      <TextInput
        style={styles.input}
        value={breakTime}
        keyboardType="numeric"
        onChangeText={(text) => setBreakTime(text)}
      />
      <Button title="Salvar" onPress={saveConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ConfigScreen;
