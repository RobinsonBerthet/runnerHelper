import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface RythmProps {}

export default function Rythm({}: RythmProps) {
  return (
    <View style={styles.container}>
      <Text>Rythm Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
