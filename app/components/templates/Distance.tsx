import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface DistanceProps {}

export default function Distance({}: DistanceProps) {
  return (
    <View style={styles.container}>
      <Text>Distance Component</Text>
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
