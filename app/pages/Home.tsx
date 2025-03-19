import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import NavigationBar from '../components/organisms/NavigationBar';
import Rythm from '../components/templates/Rythm';
import Distance from '../components/templates/Distance';
import Speed from '../components/templates/Speed';
import Time from '../components/templates/Time';

export default function Home() {
  const [distance, setDistance] = useState(''); // en km
  const [time, setTime] = useState(''); // en minutes
  const [speed, setSpeed] = useState(''); // en km/h
  const [pace, setPace] = useState(''); // en min/km

  const [actualPage, setActualPage] = useState<number>(0);

  const calculateSpeed = () => {
    if (distance && time) {
      const calculatedSpeed = (
        parseFloat(distance) /
        (parseFloat(time) / 60)
      ).toFixed(2);
      setSpeed(calculatedSpeed);
    } else {
      Alert.alert('Veuillez saisir la distance et le temps.');
    }
  };

  const calculatePace = () => {
    if (distance && time) {
      const totalMinutes = parseFloat(time);
      const calculatedPace = (totalMinutes / parseFloat(distance)).toFixed(2);
      setPace(calculatedPace);
    } else {
      Alert.alert('Veuillez saisir la distance et le temps.');
    }
  };

  const calculateTime = () => {
    if (distance && speed) {
      const calculatedTime = (
        (parseFloat(distance) / parseFloat(speed)) *
        60
      ).toFixed(2);
      setTime(calculatedTime);
    } else {
      Alert.alert('Veuillez saisir la distance et la vitesse.');
    }
  };

  function renderPages() {
    switch (actualPage) {
      case 1:
        return <Time />;
      case 2:
        return <Speed />;
      case 3:
        return <Distance />;
      case 4:
        return <Rythm />;
    }
  }

  return (
    <View style={styles.container}>
      {renderPages()}

      <NavigationBar actualPage={actualPage} setActualPage={setActualPage} />

      {/* <Text style={styles.title}>Calculateur de course</Text>

      <Text style={styles.label}>Distance (km):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
        placeholder="Entrez la distance"
      />

      <Text style={styles.label}>Temps (minutes):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={time}
        onChangeText={setTime}
        placeholder="Entrez le temps"
      />

      <Text style={styles.label}>Vitesse (km/h):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={speed}
        onChangeText={setSpeed}
        placeholder="Entrez la vitesse"
      />

      <View style={styles.buttonContainer}>
        <Button title="Calculer la vitesse" onPress={calculateSpeed} />
        <Button title="Calculer le rythme" onPress={calculatePace} />
        <Button title="Calculer le temps" onPress={calculateTime} />
      </View>

      <Text style={styles.result}>Rythme: {pace ? `${pace} min/km` : 'N/A'}</Text>
      <Text style={styles.result}>Vitesse: {speed ? `${speed} km/h` : 'N/A'}</Text>
      <Text style={styles.result}>Temps: {time ? `${time} minutes` : 'N/A'}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: 'space-between',
  },
  result: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});
