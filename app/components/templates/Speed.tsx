import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface SpeedProps {}

export default function Speed({}: SpeedProps) {
  return (
    <View style={styles.container}>
      <Text>Speed Component</Text>
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
