import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import TextButton from '../atoms/TextButton';

interface TimeProps { }

export default function Time({ }: TimeProps) {
  const [distance, setDistance] = useState(''); // en km
  const [time, setTime] = useState(''); // en minutes ou formaté
  const [speed, setSpeed] = useState(''); // en km/h
  const [pace, setPace] = useState(''); // en min/km

  useEffect(() => {
    if (time) {
      calculatePace();
    }
  }, [time]);

  const calculateTime = () => {
    if (distance && speed) {
      const calculatedTime = (
        (parseFloat(distance.replace(',', '.')) /
          parseFloat(speed.replace(',', '.'))) *
        60
      ).toFixed(2);

      let totalMinutes = parseFloat(calculatedTime);
      let hours = Math.floor(totalMinutes / 60);
      let minutes = Math.floor(totalMinutes % 60);
      let seconds = Math.round((totalMinutes % 1) * 60);

      let result = '';
      if (hours > 0) result += `${hours}h `;
      if (minutes > 0) result += `${minutes}m `;
      if (seconds > 0) result += `${seconds}s`;

      setTime(result.trim());
    } else {
      Alert.alert('Veuillez saisir la distance et la vitesse.');
    }
  };

  const calculatePace = () => {
    if (distance && time) {
      const totalMinutes = convertTimeToMinutes(time);
      const paceInMinutes =
        totalMinutes / parseFloat(distance.replace(',', '.'));

      // Extraction des minutes et des secondes
      const minutes = Math.floor(paceInMinutes);
      const seconds = Math.round((paceInMinutes - minutes) * 60);

      setPace(`${minutes}:${seconds < 10 ? '0' : ''}${seconds} min/km`);
    } else {
      Alert.alert('Veuillez saisir la distance et le temps.');
    }
  };

  // Fonction pour convertir un format "1h 30m 45s" en minutes décimales
  const convertTimeToMinutes = (timeString: string): number => {
    let totalMinutes = 0;
    const regex = /(\d+)\s*h|(\d+)\s*m|(\d+)\s*s/g;
    let match;

    while ((match = regex.exec(timeString)) !== null) {
      if (match[1]) totalMinutes += parseInt(match[1]) * 60; // Heures en minutes
      if (match[2]) totalMinutes += parseInt(match[2]); // Minutes
      if (match[3]) totalMinutes += parseInt(match[3]) / 60; // Secondes en fraction de minute
    }

    return totalMinutes;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculateur de temps</Text>

      <Text style={styles.label}>Distance (km):</Text>
      <View style={styles.buttonRow}>
        {[5, 10, 21.0975, 42.195].map(d => (
          <TextButton
            key={d.toString()}
            onPress={() => setDistance(d.toString().replace('.', ','))}
            label={d.toString()}
            containerStyle={{ backgroundColor: d.toString().replace('.', ',') == distance ? 'rgb(3, 255, 163)' : 'white' }}
            textStyle={{ color: d.toString().replace('.', ',') == distance ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 0)' }}
          />
        ))}
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
        placeholder="Entrez la distance"
      />

      <Text style={styles.label}>Vitesse (km/h):</Text>
      <View style={styles.buttonRow}>
        {[10, 12, 15].map(s => (
          <TouchableOpacity key={s} onPress={() => setSpeed(s.toString())}>
            <Text>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={speed}
        onChangeText={setSpeed}
        placeholder="Entrez la vitesse"
      />


      <TextButton
        containerStyle={{ backgroundColor: "rgb(3, 255, 163)" }}
        textStyle={{ color: 'rgb(0, 0, 0)' }}
        label="Calculer le temps"
        onPress={calculateTime}
      />

      <Text style={styles.result}>Rythme: {pace ? `${pace}` : 'N/A'}</Text>
      <Text style={styles.result}>
        Vitesse: {speed ? `${speed} km/h` : 'N/A'}
      </Text>
      <Text style={styles.result}>Temps: {time ? `${time}` : 'N/A'}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginHorizontal: 'auto',
  },
  buttonContainer: {
    marginTop: 20,
  },
  result: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});
