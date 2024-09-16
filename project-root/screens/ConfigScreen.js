import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function ConfigScreen({ navigation }) {
  const [workTime, setWorkTime] = useState('25');  // Tempo de trabalho
  const [breakTime, setBreakTime] = useState('5');  // Tempo de descanso

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput
        label="Tempo de Trabalho (min)"
        value={workTime}
        keyboardType="numeric"
        onChangeText={(text) => setWorkTime(text)}
        style={{ marginBottom: 20 }}
      />
      <TextInput
        label="Tempo de Descanso (min)"
        value={breakTime}
        keyboardType="numeric"
        onChangeText={(text) => setBreakTime(text)}
        style={{ marginBottom: 20 }}
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Timer', { workTime: parseInt(workTime), breakTime: parseInt(breakTime) })}
      >
        Salvar
      </Button>
    </View>
  );
}
